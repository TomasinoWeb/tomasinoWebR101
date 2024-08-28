import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { useEffect, useState } from "react";
import AppProcessHeader from "../components/r101/AppProcessHeader";
import AppProcessStep from "../components/r101/AppProcessStep";
import styles from "./r101.module.scss";
import { isMobile, isDesktop, isTablet } from "../components/r101/checkWidth";

const R101 = PublicLayoutFrontend.use(() => {
  return {
    footer_disable: false,
    header: "full",
    is_transparent: false,

    children: (
      <div className={styles.r101MainContainer}>
        <AppProcessHeader />
        <div className={styles.stepContainer}>
          <div className={styles.step1}>
            <AppProcessStep {...steps[0]} susuwatari="1" />
          </div>
          <div className={styles.step2}>
            <AppProcessStep {...steps[1]} susuwatari="2-left" />
          </div>
          <div className={styles.step3}>
            <AppProcessStep {...steps[2]} susuwatari="2-right" />
          </div>
          <div className={styles.step4}>
            <AppProcessStep {...steps[3]} susuwatari="1" />
          </div>
        </div>
      </div>
    ),
  };
});

const steps = [
  {
    step: 1,
    title: "APPLICATION",
    description: "Applicants must first accomplish the Google Form.",
    href: "/", // place link to form here
  },
  {
    step: 2,
    title: "TAKE THE EXAM",
    description:
      "The department examination will be sent by our Human Resources department. Skip this step if your department does not have an exam.",
  },
  {
    step: 3,
    title: "INTERVIEW",
    description:
      "After passing your requirements, the Human Resources department will send you a scheduling sheet for the interview.",
  },
  {
    step: 4,
    title: "RESULTS",
    description: "The results will be sent to you in less than a week by our Human Resources department.",
  },
];

export default R101;
