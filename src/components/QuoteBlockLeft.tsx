import ReactNode from "react";
import styles from "./QuoteBlock.module.scss";

interface QuoteBlockProps {
  text: string;
  bold: string;
  children: string;
}

export const QuoteBlockLeft: React.FC<QuoteBlockProps> = ({text, bold, children}) => {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteImg}></div>
      <div className={styles.quoteTextContainer}>
        <p className={styles.quoteText}>
          {text}
        </p>
        <p className={styles.quoteAuthor}>
          {children}
        </p>
      </div>
    </div>
  );
};
