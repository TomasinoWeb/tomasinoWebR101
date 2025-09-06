import React from "react";
import styles from "./QuoteBlock.module.scss";

interface QuoteBlockProps {
  imageSrc: string;
  quoteText: string;
  authorName: string;
  authorDetails: string;
  imagePosition?: "left" | "right"; // optional
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({
  imageSrc,
  quoteText,
  authorName,
  authorDetails,
  imagePosition = "left", // default value for prop
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className={`${styles.quoteBlockContainer} ${isImageLeft ? styles.imageLeft : styles.imageRight}`}>
      <div className={styles.quoteContent}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={`${authorName}'s picture`} className={styles.quoteImage} />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.quoteText}>{quoteText}</p>
          <div className={styles.authorInfo}>
            <img
              src="../../assets/faq/pencil-icon-vector 1.svg"
              alt="Signature pen"
              className={styles.signatureImage}
            />
            <span className={styles.authorDetails}>{` — ${authorName} (${authorDetails})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
