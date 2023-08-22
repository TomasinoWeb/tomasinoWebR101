import { ReactNode } from "react";
import styles from "./culturecard.module.scss";

interface CultureCardProps {
  text: string;
  children: string;
  image: string;
}
export const CultureCard: React.FC<CultureCardProps> = ({text, children, image}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg} background-image={`url(${image})`}></div>
      <div className={styles.cardTextContainer}>
        <h3 className={styles.cardTitle}>{text}</h3>
        <p className={styles.cardText}>
        {children}
        </p>
      </div>
    </div>
  );
};
