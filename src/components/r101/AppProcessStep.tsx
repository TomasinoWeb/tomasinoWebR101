import styles from "./AppProcessStep.module.scss";

interface AppProcessStepProps {
  step: number;
  title: string;
  description: string;
}

function AppProcessStep(props: AppProcessStepProps) {
  return (
    <div className={styles.appProcessStep}>
      <div className="app-process-step__number">{props.step}</div>
      <h3 className="app-process-step__title">{props.title}</h3>
      <p className="app-process-step__description">{props.description}</p>
    </div>
  );
}

export default AppProcessStep;
