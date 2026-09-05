import React from "react";
import styles from "./QuoteBlock.module.scss";
import { Testimonial } from "../data/testimonials";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SVG from "../../public/assets/py18/faq/pencil-icon-vector 1.svg";

interface QuoteBlockProps {
  testimonial: Testimonial;
  imagePosition?: "left" | "right"; // optional
}

const QuoteBlock = ({ testimonial: t, imagePosition = "left" }: QuoteBlockProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className={`${styles.quoteBlockContainer} ${isImageLeft ? styles.imageLeft : styles.imageRight}`}>
      <div className={styles.quoteContent}>
        <div className={styles.imageWrapper}>
          <Image src={t.imageSrc} alt={`${t.authorName}'s picture`} className={styles.quoteImage} />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.quoteText}>
            <ReactMarkdown>{t.quoteText}</ReactMarkdown>
          </div>

          <div className={styles.authorInfo}>
            <Image src={SVG} alt="Signature pen" className={styles.signatureImage} />

            <span className={styles.authorDetails}>{` — ${t.authorName} ${t.authorDetails}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
