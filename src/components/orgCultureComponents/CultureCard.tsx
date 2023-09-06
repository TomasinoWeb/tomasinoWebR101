import { ReactNode } from "react";
import styles from "./CultureCard.module.scss";

import Image from "next/image";

interface CultureCardProps {
  title: string;
  children: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  border?: string;
}
export const CultureCard: React.FC<CultureCardProps> = ({
  title,
  children,
  image,
  backgroundColor,
  textColor,
  border,
}) => {
  return (
    <div className={styles.cardContainer} style={{ backgroundColor: `var(--${backgroundColor})` }}>
      <Image src={image} alt={title} width={500} height={500} className={styles.image} />
      <div className={`${styles.cardTextContainer}`}>
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
