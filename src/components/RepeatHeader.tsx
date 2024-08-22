// TODO: add font
import styles from "./RepeatHeader.module.scss";

export default function RepeatingHeader(props:{title: string }) {
    const title = props.title.toUpperCase();
  
    return (
      <span className={styles.repeatTitle}>
        <h1 className={`${styles.title}`}>{title}</h1>
        <h1 className={`${styles.title}`}>{title}</h1>
        <h1 className={`${styles.title} ${styles.highlighted}`}>{title}</h1>
        <h1 className={`${styles.title}`}>{title}</h1>
        <h1 className={`${styles.title}`}>{title}</h1>
    </span>
    ) 
  }