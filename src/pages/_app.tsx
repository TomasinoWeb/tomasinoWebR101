import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MotionConfig } from "framer-motion";
import "../globals.scss";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import Loading from "../components/Loading";
import LandingAnnouncement from "../components/LandingAnnouncement";

const metatags = {
  "/": {
    title: "2016 TomasinoWeb",
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
  "/about/life": {
    title: "Life at TomasinoWeb | Planet TomasinoWeb",
    description:
      "From on-site coverages to late-night PowerPoint parties — see what life is really like inside TomasinoWeb.",
    tags: "TomasinoWeb, R101, UST, TomasinoWeb culture, life at TomasinoWeb",
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
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const router = useRouter();
  const isLandingPage = router.pathname === "/";

  useEffect(() => {
    if (!isLandingPage) {
      setHasLoaded(true);
      return;
    }

    const id = setTimeout(() => setHasLoaded(true), 2500);
    return () => clearTimeout(id);
  }, [isLandingPage]);

  useEffect(() => {
    if (isLandingPage && hasLoaded) {
      setIsAnnouncementOpen(true);
    } else if (!isLandingPage) {
      setIsAnnouncementOpen(false);
    }
  }, [hasLoaded, isLandingPage]);

  useEffect(() => {
    if (!isLandingPage) {
      return;
    }

    const openAnnouncement = () => setIsAnnouncementOpen(true);
    window.addEventListener("open-landing-announcement", openAnnouncement);
    return () => window.removeEventListener("open-landing-announcement", openAnnouncement);
  }, [isLandingPage]);

  const details = metatags[router.pathname as keyof typeof metatags] ?? metatags["/"];
  const description = "description" in details ? details.description : metatags["/"].description;
  const tags = "tags" in details ? details.tags : metatags["/"].tags;

  return (
    <MotionConfig reducedMotion="user">
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

      {isLandingPage && (
        <div className={`loading-container ${hasLoaded ? "has-loaded" : ""}`}>
          <Loading />
        </div>
      )}

      <Component {...pageProps} />

      {isLandingPage && isAnnouncementOpen && (
        <LandingAnnouncement onClose={() => setIsAnnouncementOpen(false)} />
      )}
    </MotionConfig>
  );
}
