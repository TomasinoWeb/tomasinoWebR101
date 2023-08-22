import React from "react";
import styles from "./quoteBlock.module.scss";

import Image from "next/image";

interface QuoteBlockProps {
  author: string;
  position: string;
  year: string;
  children: string;
  image: string;
  textColor: string;
}

export const Left: React.FC<QuoteBlockProps> = ({
  author,
  position,
  year,
  children,
  image,
  textColor,
}) => {
  return (
    <div className={styles.quoteContainer} style={{ flexDirection: "row-reverse" }}>
      <div className={styles.quoteTextContainer}>
        <p className={styles.quoteText} style={{ color: `var(--${textColor})` }}>
          {children}
        </p>
        <p className={styles.quoteText} style={{ color: `var(--${textColor})` }}>
          - {author} ({position}, PY {year})
        </p>
      </div>
      <Image
        src={image}
        alt={author}
        width={500}
        height={500}
        className={styles.quoteImg}
      />
    </div>
  );
};

export const Right: React.FC<QuoteBlockProps> = ({
  author,
  position,
  year,
  children,
  image,
  textColor,
}) => {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteTextContainer}>
        <p className={styles.quoteText} style={{ color: `var(--${textColor})` }}>
          {children}
        </p>
        <p className={styles.quoteText} style={{ color: `var(--${textColor})` }}>
          - {author} ({position}, PY {year})
        </p>
      </div>
      <Image
        src={image}
        alt={author}
        width={500}
        height={500}
        className={styles.quoteImg}
      />
    </div>
  );
};

const QuoteBlock = {
  Left,
  Right,
};

export default QuoteBlock;
