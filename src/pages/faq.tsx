import styles from "../styles/faq.module.scss";
import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import Link from "next/link";

import ApplicationGroup from "../components/faqComponents/ApplicationGroup";
import InterviewGroup from "../components/faqComponents/InterviewGroup";
import OrgGroup from "../components/faqComponents/OrgGroup";
import ResultsGroup from "../components/faqComponents/ResultsGroup";
import SussyGroup from "../components/faqComponents/SussyGroup";
import { Layout } from "../components/Layout";
import { Titles } from "../components/Titles";

const FaqPage = () => {
  const [tag, setTag] = useState("selectTag");
  const [orgShown, setOrgShown] = useState(false);
  const [interviewShown, setInterviewShown] = useState(false);
  const [applicationShown, setApplicationShown] = useState(false);
  const [resultsShown, setResultsShown] = useState(false);
  const [sussyShown, setSussyShown] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const orgPicked = {
    backgroundColor: "#E0C9AF",
    fontFamily: "Sailec Bold",
  };

  const interviewPicked = {
    backgroundColor: "#B9E6F9",
    fontFamily: "Sailec Bold",
  };

  const applicationPicked = {
    backgroundColor: "#FDDAA6",
    fontFamily: "Sailec Bold",
  };

  const resultPicked = {
    backgroundColor: "#D6BADC",
    fontFamily: "Sailec Bold",
  };

  const sussyPicked = {
    backgroundColor: "#A9CBAA",
    fontFamily: "Sailec Bold",
  };

  const unpicked = {
    fontFamily: windowWidth <= 770 ? "Sailec Bold" : "Sailec Medium",
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
    tag === "application"
      ? setApplicationShown(true)
      : setApplicationShown(false);
    tag === "results" ? setResultsShown(true) : setResultsShown(false);
    tag === "sussy" ? setSussyShown(true) : setSussyShown(false);
  }, [tag, buttonPressed, windowWidth]);

  return (
    <Layout>
      <div className={styles["FaqPage"]}>
        <div className={styles["picker-div"]}>
          <Titles title="FAQS">Can I ask you a Question</Titles>
          <div className={styles["selection-div"]}>
            <div className={styles["faq-main-holder"]}>
              <button
                className={`${styles["button-picker"]} ${styles["mobile-cell1"]}`}
                onClick={() => setTag("org")}
                style={orgShown ? orgPicked : unpicked}
              >
                the org
              </button>

              <button
                className={`${styles["button-picker"]} ${styles["mobile-cell2"]}`}
                onClick={() => setTag("interview")}
                style={interviewShown ? interviewPicked : unpicked}
              >
                interview
              </button>
              <a
                href="https://tomasinoweb.org"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles["faq-main-item"]}>
                  <img
                    src="/static/HandWriting.png"
                    className={`${styles["faq-icons"]} ${styles["mobile-cell3"]}`}
                    alt="icon"
                  ></img>
                </div>
              </a>
              <button
                className={`${styles["button-picker"]} ${styles["mobile-cell4"]}`}
                onClick={() => setTag("application")}
                style={applicationShown ? applicationPicked : unpicked}
              >
                application
              </button>

              <a
                href="https://join.tomasinoweb.org/quiz"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles["faq-main-item"]}>
                  <img
                    src="/static/slot-machine.png"
                    className={`${styles["faq-icons"]} ${styles["mobile-cell5"]}`}
                    alt="icon"
                  ></img>
                </div>
              </a>
              <button
                className={`${styles["button-picker"]} ${styles["mobile-cell6"]}`}
                onClick={() => setTag("results")}
                style={resultsShown ? resultPicked : unpicked}
              >
                results
              </button>

              <a
                href="https://youtu.be/m6fCTVsMmS8"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles["faq-main-item"]}>
                  <img
                    src="/static/clapper-board.png"
                    className={`${styles["faq-icons"]} ${styles["mobile-cell7"]} `}
                    alt="icon"
                  ></img>
                </div>
              </a>
              <button
                className={`${styles["button-picker"]} ${styles["mobile-cell8"]}`}
                onClick={() => setTag("sussy")}
                style={sussyShown ? sussyPicked : unpicked}
              >
                thought you&apos;d never ask
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className={styles["faqs"]}>
          <pre>
            <div className={`faq-answer ${orgShown ? "faq-answer-open" : ""}`}>
              {orgShown && (
                <p>
                  <OrgGroup />
                </p>
              )}
            </div>
            <div
              className={`faq-answer ${
                interviewShown ? "faq-answer-open" : ""
              }`}
            >
              {interviewShown && <InterviewGroup />}
            </div>
            <div
              className={`faq-answer ${
                applicationShown ? "faq-answer-open" : ""
              }`}
            >
              {applicationShown && <ApplicationGroup />}
            </div>
            <div
              className={`faq-answer ${resultsShown ? "faq-answer-open" : ""}`}
            >
              {resultsShown && <ResultsGroup />}
            </div>
            <div
              className={`faq-answer ${sussyShown ? "faq-answer-open" : ""}`}
            >
              {sussyShown && <SussyGroup />}
            </div>
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default FaqPage;
