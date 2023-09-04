import React from "react";
import styles from "./QuoteBlock.module.scss";
import ReactMarkdown from "react-markdown";

import Image from "next/image";
import { Testimonial } from "../../public/assets/data/testimonials";

interface QuoteBlockProps {
  testimonial: Testimonial;
  textColor: string;
  side: "left" | "right";
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ testimonial, textColor, side }) => {
  return (
    <div className={styles.quoteContainer} style={{ flexDirection: side === "right" ? "row" : "row-reverse" }}>
      <div className={styles.quoteTextContainer} style={{ color: `var(--${textColor})` }}>
        <ReactMarkdown className="react-markdown">{testimonial.content}</ReactMarkdown>
        <p className={styles.quoteAuthor} style={{ color: `var(--${textColor})` }}>
          - {testimonial.name} {testimonial.position}
        </p>
      </div>
      <Image src={testimonial.image} alt={testimonial.name} width={500} height={500} className={styles.quoteImg} />
    </div>
  );
};
