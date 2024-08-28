import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { useEffect, useState } from "react";
import RepeatingHeader from "../components/RepeatHeader";
import AppProcessStep from "../components/r101/AppProcessStep";
import styles from "./r101.module.scss";

const R101 = PublicLayoutFrontend.use(() => {
  const isDesktop = useViewportWidth(1024);
  const isLargerThanMobile = useViewportWidth(601);

  // Hook for checking if viewport width is greater than or equal to target width
  function useViewportWidth(targetWidth: number) {
    const [isWidthMet, setIsWidthMet] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setIsWidthMet(window.innerWidth >= targetWidth);
        };

        // Initial check for viewport width
        handleResize();

        // Monitor window resize
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, [targetWidth]);

    return isWidthMet;
  }

  return {
    footer_disable: false,
    header: "full",
    is_transparent: false,

    children: (
      <div className={styles.r101MainContainer}>
        <RepeatingHeader title="APPLICATION PROCESS" />
        <div className={styles.mainStepContainer}>
          <div className={styles.step1}>
            <AppProcessStep {...steps[0]} susuwatari={!isLargerThanMobile ? "1-reversed" : "1"} />
          </div>
          <div className={styles.step2}>
            <AppProcessStep {...steps[1]} susuwatari="2-left" />
          </div>
          <div className={styles.step3}>
            <AppProcessStep {...steps[2]} susuwatari={isDesktop ? "1" : "2-right"} />
          </div>
          <div className={styles.step4}>
            <AppProcessStep {...steps[3]} susuwatari={isDesktop ? "2-right" : "1"} />
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
