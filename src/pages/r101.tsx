import { PublicLayoutFrontend } from "../layouts/public/frontend";
import AppProcessHeader from "../components/r101/AppProcessHeader";
import AppProcessStep from "../components/r101/AppProcessStep";
import styles from "./r101.module.scss";

const R101 = PublicLayoutFrontend.use(() => {
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

  return {
    footer_disable: false,
    header: "full",
    is_transparent: false,

    children: (
      <div className={styles.r101MainContainer}>
        <AppProcessHeader />
        <div className={styles.stepContainer}>
          <AppProcessStep {...steps[0]} />
          <AppProcessStep {...steps[1]} />
          <AppProcessStep {...steps[2]} />
          <AppProcessStep {...steps[3]} />
        </div>
      </div>
    ),
  };
});

export default R101;
