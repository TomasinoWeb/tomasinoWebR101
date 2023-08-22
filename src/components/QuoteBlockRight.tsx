import ReactNode from "react";
import styles from "./QuoteBlock.module.scss";

interface QuoteBlockProps {
  text: string;
  bold: string;
  children: string;
}

export const QuoteBlockRight: React.FC<QuoteBlockProps> = ({text, bold, children}) => {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteTextContainer}>
        <p className={styles.quoteText}>
        {text}
        </p>
        <p className={styles.quoteAuthor}>
          - Mikaela Gabrielle De Castro (Blogs Editor, PY 2021-2024)
        </p>
      </div>
      <div className={styles.quoteImg}></div>
    </div>
  );
};
