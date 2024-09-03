import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../globals.scss";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import Loading from "../components/Loading";

const metatags = {
  "/": {
    title: "The R101 by STUDIO TOMWEB",
    description:
      "TomasinoWeb is back on track exploring around UST to look for innovative, passionate, and dedicated individuals who can bring our story to life! Will you be part of the story?",
  },
  "/about": {
    title: "About: The R101 by STUDIO TOMWEB",
    description:
      "The whispers say there's magic in the air! Discover TomasinoWeb, a world where every department is filled with vibrant souls and lively traditions.",
  },
  "/about/departments": {
    title: "Departments: The R101 by STUDIO TOMWEB",
    description: "You cannot alter your fate. However, you can rise to meet it.?",
  },
  "/about/people": {
    title: "The People: The R101 by STUDIO TOMWEB",
    description:
      "Meet the visionaries behind all the content of TomasinoWeb, the premier digital media organization of the University of Santo Tomas.",
  },
  "/about/org-culture": {
    title: "Org Culture: The R101 by STUDIO TOMWEB",
    description: "We're all a little lost, but we're not alone. Explore what makes our org culture special.",
  },
  "/r101": {
    title: "Application Process: The R101 by STUDIO TOMWEB",
    description: "Come on, Totoro, let's go! Here's how YOU can join TomasinoWeb.",
  },
  "/faq": {
    title: "FAQ: The R101 by STUDIO TOMWEB",
    description: "Can you show me the way to the river?",
  },
};

const CANONICAL_URL = "https://join.tomasinoweb.org/";

export default function App({ Component, pageProps }: AppProps) {
  const [hasLoaded, setHasLoaded] = useState(true); // set this to false before we launch
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 2500);
  }, []);

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
      <div className={`loading-container ${hasLoaded ? "has-loaded" : ""}`}>
        <Loading />
      </div>
      <Component {...pageProps} />
    </>
  );
}
