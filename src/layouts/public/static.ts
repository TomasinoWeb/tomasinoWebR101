import { implementLayoutStatic } from "@scinorandex/layout";
import { PublicLayoutOptions, Result } from "./common";
import axios from "axios";

// TODO: set to false in prod
const TESTING = false;
const DOMAIN = "https://apply.tomasinoweb.org";

export async function fetchResults() {
  if (TESTING)
    return {
      success: true,
      results: [
        { name: "Lance Owen Gulinao", department: "Web Technologies" as const, team: "Front-end" },
        { name: "Neil Casas", department: "Web Technologies" as const, team: "Back-end" },
        { name: "Zeandarra Giva", department: "Web Technologies" as const, team: "UI/UX" },
        { name: "Winfrey De Vera", department: "Web Technologies" as const, team: "Front-end" },
      ],
    };

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
