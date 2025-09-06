import styles from "./faq.module.scss";
import { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";

import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import Image from "next/image";
import Overlay from "../../public/assets/faq/Question-Mark-Overlay.png";
import SleepyD from "../../public/assets/faq/sleepy-snoopy-d.png";
import SleepyM from "../../public/assets/faq/sleepy-snoopy-m.png";

import ApplicationGroup from "../components/faqComponents/ApplicationGroup";
import InterviewGroup from "../components/faqComponents/InterviewGroup";
import OrgGroup from "../components/faqComponents/OrgGroup";
import ResultsGroup from "../components/faqComponents/ResultsGroup";
import SussyGroup from "../components/faqComponents/SussyGroup";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  const bgColor = "#CCECE4";
  const [tag, _setTag] = useState("selectTag");
  const setTag = (tag: string) => {
    _setTag(tag);
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("scroll-target")!.offsetTop,
        behavior: "smooth",
      });
    }, 50);
  };

  const picked = { backgroundColor: bgColor };
  const unpicked = { color: "var(--darkgray)", backgroundColor: "white" };

  return {
    dots: "full",
    header: "full_regular",
    footer: "regular",

    children: (
      <div className={styles.page}>
        <div className={styles.underlay}>
          <Image src={Overlay} alt="Overlay" className={styles.image} />
        </div>

        <div className={styles.FaqPage}>
          <header>
            <h1>FAQS</h1>
          </header>

          <div className={styles.picker_div}>
            <div className={styles.selection_div}>
              <div className={styles.faq_main_holder}>
                <button
                  className={`${styles.button_picker} ${styles.mobile_cell1}`}
                  onClick={() => setTag("org")}
                  style={tag === "org" ? picked : unpicked}
                >
                  the org
                </button>

                <button
                  className={`${styles.button_picker} ${styles.mobile_cell2}`}
                  onClick={() => setTag("interview")}
                  style={tag === "interview" ? picked : unpicked}
                >
                  interview
                </button>
                <a href="https://tomasinoweb.org" target="_blank" rel="noreferrer" className={styles.faq_main_item}>
                  <img
                    src="/assets/faq/peanuts-icons-1.png" // change this to the correct icon
                    className={`${styles.faq_icons} ${styles.mobile_cell3}`}
                    alt="icon"
                  ></img>
                </a>
                <button
                  className={`${styles.button_picker} ${styles.mobile_cell4}`}
                  onClick={() => setTag("application")}
                  style={tag === "application" ? picked : unpicked}
                >
                  application
                </button>

                <Link href="/quiz" target="_blank" rel="noreferrer" className={styles.faq_main_item}>
                  <img
                    src="/assets/faq/peanuts-icons-2.png" // change this to the correct icon
                    className={`${styles.faq_icons} ${styles.mobile_cell5}`}
                    alt="icon"
                  ></img>
                </Link>
                <button
                  className={`${styles.button_picker} ${styles.mobile_cell6}`}
                  onClick={() => setTag("results")}
                  style={tag === "results" ? picked : unpicked}
                >
                  results
                </button>

                <a
                  href="https://youtu.be/m6fCTVsMmS8"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.faq_main_item}
                >
                  <img
                    src="/assets/faq/peanuts-icons-3.png" // change this to the correct icon
                    className={`${styles.faq_icons} ${styles.mobile_cell7} `}
                    alt="icon"
                  ></img>
                </a>
                <button
                  className={`${styles.button_picker} ${styles.mobile_cell8}`}
                  onClick={() => setTag("sussy")}
                  style={tag === "sussy" ? picked : unpicked}
                >
                  thought you&apos;d never ask
                </button>
              </div>
            </div>
          </div>

          <div className={styles.sleepy_snoopy}>
            <Image src={SleepyD} alt="Sleepy Snoopy" className={styles.desktop} />
            <Image src={SleepyM} alt="Sleepy Snoopy" className={styles.mobile} />
          </div>

          {tag !== "selectTag" && (
            <div className={styles.faqs} id="scroll-target">
              <pre>
                <div className={`faq-answer ${tag === "org" ? "faq-answer-open" : ""}`}>
                  {tag === "org" && <OrgGroup />}
                </div>
                <div className={`faq-answer ${tag === "interview" ? "faq-answer-open" : ""}`}>
                  {tag === "interview" && <InterviewGroup />}
                </div>
                <div className={`faq-answer ${tag === "application" ? "faq-answer-open" : ""}`}>
                  {tag === "application" && <ApplicationGroup />}
                </div>
                <div className={`faq-answer ${tag === "results" ? "faq-answer-open" : ""}`}>
                  {tag === "results" && <ResultsGroup />}
                </div>
                <div className={`faq-answer ${tag === "sussy" ? "faq-answer-open" : ""}`}>
                  {tag === "sussy" && <SussyGroup />}
                </div>
              </pre>
            </div>
          )}
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
