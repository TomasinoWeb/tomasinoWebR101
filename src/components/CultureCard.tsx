import { ReactNode } from "react";
import styles from "./culturecard.module.scss";

export const CultureCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}></div>
      <div className={styles.cardTextContainer}>
        <h3 className={styles.cardTitle}>Post-Coverage hangouts</h3>
        <p className={styles.cardText}>
          Where we discuss the most random of things from "Antonism" to Dating
          App bios. Feel free to hop in whenever you see your orgmates hanging
          out on one of the "tambay lang" channels.
        </p>
      </div>
    </div>
  );
};
