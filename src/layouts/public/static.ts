import { implementLayoutStatic } from "@scinorandex/layout";
import { PublicLayoutOptions, Result } from "./common";
import axios from "axios";

const DOMAIN = "https://apply.tomasinoweb.org";
const TESTING = true;
export async function fetchResults() {
  if (TESTING)
    return { success: true, results: [{ name: "test", department: "Web Technologies" as const, team: ["test"] }] };

  try {
    const { data } = await axios.post(DOMAIN + "/api/trpc/public.results?batch=1", { 0: {} });
    const cleansed = data[0].result.data as { success: boolean; results: Result[] };
    if (cleansed.success === true) return { success: true, results: cleansed.results };
    else throw cleansed;
  } catch (err) {
    console.log({ err });
  }

  return { success: false, results: [] };
}

export const PublicLayoutBackend = implementLayoutStatic<PublicLayoutOptions>({
  async getStaticProps(ctx) {
    try {
      const results = await fetchResults();
      if (results.success) return { props: { layout: { resultsAreOut: true }, locals: { results } }, revalidate: 900 };
    } catch (err) {}

    return {
      props: { layout: { resultsAreOut: false }, locals: { results: { success: false, results: [] } } },
      revalidate: 60,
    };
  },
});
