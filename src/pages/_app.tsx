import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const metatags = {
  "/": {
    title: "The R101 Tour by TomasinoWeb",
    description:
      "It’s been a long time coming but TomasinoWeb is back on track touring around UST to look for innovative, passionate, and dedicated individuals! Are you ready for it?",
  },
  "/about": {
    title: "About: The R101 Tour by TomasinoWeb",
    description:
      "Heard a rumor from Inez? Know all about TomasinoWeb from its departments and its people to the fun and dynamic cultures we have.",
  },
  "/about/departments": {
    title: "Departments: The R101 Tour by TomasinoWeb",
    description: "Are you a fearless leader, an alpha type?",
  },
  "/about/people": {
    title: "The People: The R101 Tour by TomasinoWeb",
    description:
      "Meet the masterminds behind all the content of TomasinoWeb, the premier digital media organization of the University of Santo Tomas.",
  },
  "/about/org-culture": {
    title: "Org Culture: The R101 Tour by TomasinoWeb",
    description: "In the middle of the night, in our dreams, you should see the things we do. ",
  },
  "/r101": {
    title: "Application Process: The R101 Tour by TomasinoWeb",
    description: "Now that you got no reason to be afraid, here’s how YOU can join TomasinoWeb.",
  },
  "/faq": {
    title: "FAQ: The R101 Tour by TomasinoWeb",
    description: "Can I ask you a question?.",
  },
};

const CANONICAL_URL = "https://join.tomasinoweb.org/";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const details = metatags[router.pathname as keyof typeof metatags] ?? metatags["/"];

  return (
    <>
      <NextSeo
        title={details.title}
        description={details.description}
        openGraph={{
          title: details.title,
          description: details.description,
          images: [
            {
              url: `${CANONICAL_URL}meta.png`,
            },
          ],
        }}
        twitter={{
          handle: "@tomasinoweb",
          site: "@tomasinoweb",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
