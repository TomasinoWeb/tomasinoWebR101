import { PublicLayoutFrontend } from "../layouts/public/frontend";
import AppProcessHeader from "../components/r101/AppProcessHeader";
import AppProcessStep from "../components/r101/AppProcessStep";
import styles from "./r101.module.scss";

const R101 = PublicLayoutFrontend.use(() => {
  const steps = [
    {
      step: 1,
      title: "Application",
      description: "Applicants must first accomplish the Google Form.",
    },
    {
      step: 2,
      title: "Take The Exam",
      description:
        "The deparment examination will be sent by our Human Resources department. Skip this step if your department does not have an exam.",
    },
    {
      step: 3,
      title: "Interview",
      description:
        "After passing your requirements, the Human Resources department will send you a scheduling sheet for the interview.",
    },
    {
      step: 4,
      title: "Results",
      description: "The results will be sent to you in less than a week by our Human Resources department.",
    },
  ];

  return {
    children: (
      <div className={styles.r101MainContainer}>
        <AppProcessHeader />
        <div className={styles.stepContainer}>
          {steps.map((step, index) => (
            <AppProcessStep key={index} step={step.step} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    ),
  };
});

export default R101;
