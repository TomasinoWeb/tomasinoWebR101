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
        {isImageLeft && (
          <div className={styles.imageWrapper}>
            <img
              src={imageSrc}
              alt={`${authorName}'s picture`}
              className={styles.quoteImage}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/150x150/ff7f7f/333333?text=User";
              }}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <p className={styles.quoteText}>{quoteText}</p>
          <div className={styles.authorInfo}>
            <img src="../../assets/pencil-icon-vector 1.svg" alt="Signature pen" className={styles.signatureImage} />
            <span className={styles.authorDetails}>{`${authorName} (${authorDetails})`}</span>
          </div>
        </div>
        {!isImageLeft && (
          <div className={styles.imageWrapper}>
            <img
              src={imageSrc}
              alt={`${authorName}'s picture`}
              className={styles.quoteImage}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/150x150/ff7f7f/333333?text=User";
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteBlock;
