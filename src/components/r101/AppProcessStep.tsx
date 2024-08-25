import Link from "next/link";
import styles from "./AppProcessStep.module.scss";

interface AppProcessStepProps {
  step: number;
  title: string;
  description: string;
  href?: string; // link to the form
}

function AppProcessStep(props: AppProcessStepProps) {
  const stepClass = `step-${props.step}`;
  return (
    <div className={`${styles.appProcessStep} ${styles[stepClass]}`}>
      <div className={styles.appProcessNum}>{props.step}</div>
      <div className={styles.appProcessTitle}>{props.title}</div>
      <div className={styles.appProcessDescription}>
        {props.step === 1 ? (
          <>
            Applicants must first accomplish the <Link href="#">Google Form</Link>.
          </>
        ) : (
          props.description
        )}
      </div>
    </div>
  );
}

export default AppProcessStep;
