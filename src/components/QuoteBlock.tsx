import React from "react";
import styles from "./QuoteBlock.module.scss";

import Image from "next/image";

interface QuoteBlockProps {
  author: string;
  position: string;
  year: string;
  children: string;
  image: string;
  textColor: string;
  side: "left" | "right";
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ author, position, year, children, image, textColor, side }) => {
  return (
    <div className={styles.quoteContainer} style={{ flexDirection: side === "right" ? "row" : "row-reverse" }}>
      <div className={styles.quoteTextContainer}>
        <p className={styles.quoteText} style={{ color: `var(--${textColor})` }}>
          {children}
        </p>
        <p className={styles.quoteAuthor} style={{ color: `var(--${textColor})` }}>
          - {author} ({position}, PY {year})
        </p>
      </div>
      <Image src={image} alt={author} width={500} height={500} className={styles.quoteImg} />
    </div>
  );
};
