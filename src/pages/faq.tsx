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
  const buttonPressedStyle = buttonPressed ? styles["sailec-bold-text"] : "";

  const orgPicked = {
    backgroundColor: "#E0C9AF",
    fontWeight: "bold",
  };

  const interviewPicked = {
    backgroundColor: "#B9E6F9",
    fontWeight: "bold",
  };

  const applicationPicked = {
    backgroundColor: "#FDDAA6",
    fontWeight: "bold",
  };

  const resultPicked = {
    backgroundColor: "#D6BADC",
    fontWeight: "bold",
  };

  const sussyPicked = {
    backgroundColor: "#A9CBAA",
    fontWeight: "bold",
  };

  const unpicked = {
    color: "black",
    backgroundColor: "white",
  };

  useEffect(() => {
    tag === "org" ? setOrgShown(true) : setOrgShown(false);
    tag === "interview" ? setInterviewShown(true) : setInterviewShown(false);
    tag === "application"
      ? setApplicationShown(true)
      : setApplicationShown(false);
    tag === "results" ? setResultsShown(true) : setResultsShown(false);
    tag === "sussy" ? setSussyShown(true) : setSussyShown(false);
  }, [tag]);

  return (
    <Layout>
      <div className={styles["FaqPage"]}>
        <div className={styles["picker-div"]}>
          <Titles title="FAQS">
          Can I ask you a Question
          </Titles>
          <div className={styles["selection-div"]}>
            <div className={styles["faq-main-holder"]}>
              <button
                className={`${styles["button-picker"]} ${styles["mobile-cell1"]} ${buttonPressedStyle}`}
                onClick={() => setTag("org")}
                style={orgShown ? orgPicked : unpicked}
              >
                the org
              </button>

              <button
                className={`${styles["button-picker"]} ${styles["mobile-cell2"]}${buttonPressedStyle}`}
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
                className={`${styles["button-picker"]} ${styles["mobile-cell4"]} ${buttonPressedStyle}`}
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
                className={`${styles["button-picker"]} ${styles["mobile-cell6"]} ${buttonPressedStyle}`}
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
                className={`${styles["button-picker"]} ${styles["mobile-cell8"]} ${buttonPressedStyle}`}
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
            {orgShown && <OrgGroup />}
            {interviewShown && <InterviewGroup />}
            {applicationShown && <ApplicationGroup />}
            {resultsShown && <ResultsGroup />}
            {sussyShown && <SussyGroup />}
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default FaqPage;
