import { ReactNode } from "react";
import styles from "./culturecard.module.scss";

import Image from "next/image";

interface CultureCardProps {
  title: string;
  children: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}
export const CultureCard: React.FC<CultureCardProps> = ({
  title,
  children,
  image,
  backgroundColor,
  textColor,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div
        className={styles.cardTextContainer}
        style={{ backgroundColor: `var(--${backgroundColor})` }}
      >
        <h3 className={styles.cardTitle} style={{ color: `var(--${textColor})` }}>
          {title}
        </h3>
        <p className={styles.cardText} style={{ color: `var(--${textColor})` }}>
          {children}
        </p>
      </div>
    </div>
  );
};
