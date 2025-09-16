import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../globals.scss";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import Loading from "../components/Loading";

const metatags = {
  "/": {
    title: "Planet TomasinoWeb",
    description:
      "Good grief, the applications are open! Be part of TomasinoWeb – UST’s premier digital media organization in journalism, design, photography, videography, and web.",
    tags: "TomasinoWeb, R101, UST, TomasinoWeb application, UST digital media organization",
  },
  "/about": {
    title: "About | Planet TomasinoWeb",
    description:
      "Happiness is being part of TomasinoWeb! Discover how TomasinoWeb delivers top multimedia journalism through creative storytelling to the Thomasian community.",
    tags: "TomasinoWeb, R101, UST, TomasinoWeb digital media",
  },
  "/about/departments": {
    title: "Departments | Planet TomasinoWeb",
    description:
      "Every good person needs a squad! Step into UST’s future of media with TomasinoWeb – discover your role, explore teams, and find where you belong.",
    tags: "TomasinoWeb, R101, UST, TomasinoWeb departments",
  },
  "/about/people": {
    title: "People | Planet TomasinoWeb",
    description:
      "Meet the round-headed kids running the show! Get to know TomasinoWeb’s student leaders shaping journalism, creativity, and innovation at UST.",
    tags: "TomasinoWeb, R101, UST",
  },
  "/about/org-culture": {
    title: "Org Culture | Planet TomasinoWeb",
    description:
      "Experience TomasinoWeb's supportive culture where students grow together as innovators and leaders, just like Charlie Brown's lovable gang of misfits!",
    tags: "TomasinoWeb, R101, UST, tomasinoweb.org",
  },
  "/r101": {
    title: "R101 Application | Planet TomasinoWeb",
    description:
      "The Great Pumpkin believes in you! Submit your R101 application and join TomasinoWeb's next generation of storytellers, designers, and media creatives.",
    tags: "TomasinoWeb, R101, UST, R101 application",
  },
  "/faq": {
    title: "Frequently Asked Questions | Planet TomasinoWeb",
    description:
      "Blockhead got questions? We've got answers! Navigate the R101 application process and learn how Thomasians can join UST’s digital media organization.",
    tags: "TomasinoWeb, R101, UST, R101 questions",
  },
  "/results": {
    title: "Results | Planet TomasinoWeb",
  },
  "/quiz": {
    title: "Quiz | Planet TomasinoWeb",
  },
};

const CANONICAL_URL = "https://join.tomasinoweb.org/";

export default function App({ Component, pageProps }: AppProps) {
  const [hasLoaded, setHasLoaded] = useState(false); // set this to false before we launch
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 2500);
  }, []);

  const details = metatags[router.pathname as keyof typeof metatags] ?? metatags["/"];
  const description = "description" in details ? details.description : metatags["/"].description;
  const tags = "tags" in details ? details.tags : metatags["/"].tags;

  return (
    <>
      <NextSeo
        title={details.title}
        description={description}
        additionalMetaTags={[{ name: "keywords", content: tags }]}
        openGraph={{
          title: details.title,
          description: description,
          images: [{ url: `${CANONICAL_URL}snoopy_meta_mock.png` }],
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
