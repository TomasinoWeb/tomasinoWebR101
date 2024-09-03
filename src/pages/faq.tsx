import styles from "./faq.module.scss";
import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";

import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";

import ApplicationGroup from "../components/faqComponents/ApplicationGroup";
import InterviewGroup from "../components/faqComponents/InterviewGroup";
import OrgGroup from "../components/faqComponents/OrgGroup";
import ResultsGroup from "../components/faqComponents/ResultsGroup";
import SussyGroup from "../components/faqComponents/SussyGroup";
import RepeatingHeader from "../components/RepeatHeader";
import Stairs from "../components/transition/Stairs";

interface PageProps {}

const FaqPage = () => {};

export default PublicLayoutFrontend.use<PageProps>(() => {
  const bgColor = "#CCECE4";
  const [tag, setTag] = useState("selectTag");
  const [orgShown, setOrgShown] = useState(false);
  const [interviewShown, setInterviewShown] = useState(false);
  const [applicationShown, setApplicationShown] = useState(false);
  const [resultsShown, setResultsShown] = useState(false);
  const [sussyShown, setSussyShown] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const orgPicked = {
    backgroundColor: bgColor,
  };

  const interviewPicked = {
    backgroundColor: bgColor,
  };

  const applicationPicked = {
    backgroundColor: bgColor,
  };

  const resultPicked = {
    backgroundColor: bgColor,
  };

  const sussyPicked = {
    backgroundColor: bgColor,
  };

  const unpicked = {
    color: "var(--darkgray)",
    backgroundColor: "white",
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    tag === "org" ? setOrgShown(true) : setOrgShown(false);
    tag === "interview" ? setInterviewShown(true) : setInterviewShown(false);
    tag === "application" ? setApplicationShown(true) : setApplicationShown(false);
    tag === "results" ? setResultsShown(true) : setResultsShown(false);
    tag === "sussy" ? setSussyShown(true) : setSussyShown(false);
  }, [tag, buttonPressed, windowWidth]);

  return {
    header: "full",
    footer_disable: false,
    is_transparent: false,

    children: (
      <>
        <Stairs>
          <div className={styles.FaqPage}>
            <header>
              <RepeatingHeader title="FAQS" />
            </header>

            <div className={styles.picker_div}>
              <div className={styles.selection_div}>
                <div className={styles.faq_main_holder}>
                  <button
                    className={`${styles.button_picker} ${styles.mobile_cell1}`}
                    onClick={() => setTag("org")}
                    style={orgShown ? orgPicked : unpicked}
                  >
                    the org
                  </button>

                  <button
                    className={`${styles.button_picker} ${styles.mobile_cell2}`}
                    onClick={() => setTag("interview")}
                    style={interviewShown ? interviewPicked : unpicked}
                  >
                    interview
                  </button>
                  <a href="https://tomasinoweb.org" target="_blank" rel="noreferrer">
                    <div className={styles.faq_main_item}>
                      <img
                        src="/assets/kodama.png" // change this to the correct icon
                        className={`${styles.faq_icons} ${styles.mobile_cell3}`}
                        alt="icon"
                      ></img>
                    </div>
                  </a>
                  <button
                    className={`${styles.button_picker} ${styles.mobile_cell4}`}
                    onClick={() => setTag("application")}
                    style={applicationShown ? applicationPicked : unpicked}
                  >
                    application
                  </button>

                  <a href="/quiz" target="_blank" rel="noreferrer">
                    <div className={styles.faq_main_item}>
                      <img
                        src="/assets/no face v1.png" // change this to the correct icon
                        className={`${styles.faq_icons} ${styles.mobile_cell5}`}
                        alt="icon"
                      ></img>
                    </div>
                  </a>
                  <button
                    className={`${styles.button_picker} ${styles.mobile_cell6}`}
                    onClick={() => setTag("results")}
                    style={resultsShown ? resultPicked : unpicked}
                  >
                    results
                  </button>

                  <a href="https://youtu.be/m6fCTVsMmS8" target="_blank" rel="noreferrer">
                    <div className={styles.faq_main_item}>
                      <img
                        src="/assets/calcifer v1.png" // change this to the correct icon
                        className={`${styles.faq_icons} ${styles.mobile_cell7} `}
                        alt="icon"
                      ></img>
                    </div>
                  </a>
                  <button
                    className={`${styles.button_picker} ${styles.mobile_cell8}`}
                    onClick={() => setTag("sussy")}
                    style={sussyShown ? sussyPicked : unpicked}
                  >
                    thought you&apos;d never ask
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div className={styles.faqs}>
              <pre>
                <div className={`faq-answer ${orgShown ? "faq-answer-open" : ""}`}>
                  {orgShown && (
                    <p>
                      <OrgGroup />
                    </p>
                  )}
                </div>
                <div className={`faq-answer ${interviewShown ? "faq-answer-open" : ""}`}>
                  {interviewShown && <InterviewGroup />}
                </div>
                <div className={`faq-answer ${applicationShown ? "faq-answer-open" : ""}`}>
                  {applicationShown && <ApplicationGroup />}
                </div>
                <div className={`faq-answer ${resultsShown ? "faq-answer-open" : ""}`}>
                  {resultsShown && <ResultsGroup />}
                </div>
                <div className={`faq-answer ${sussyShown ? "faq-answer-open" : ""}`}>
                  {sussyShown && <SussyGroup />}
                </div>
              </pre>
            </div>
          </div>
        </Stairs>
      </>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
