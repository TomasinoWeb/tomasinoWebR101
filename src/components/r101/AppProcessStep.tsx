import styles from "./AppProcessStep.module.scss";

interface AppProcessStepProps {
  step: number;
  title: string;
  description: string;
}

function AppProcessStep(props: AppProcessStepProps) {
  return (
    <div className={styles.appProcessStep}>
      <div className={styles.appProcessNum}>{props.step}</div>
      <div className={styles.appProcessTitle}>{props.title}</div>
      <div className={styles.appProcessDescription}>{props.description}</div>
    </div>
  );
}

export default AppProcessStep;
