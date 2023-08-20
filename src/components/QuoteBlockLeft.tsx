import ReactNode from "react";
import styles from "./quoteBlock.module.scss";

export const QuoteBlockLeft = () => {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteImg}></div>
      <div className={styles.quoteTextContainer}>
        <p className={styles.quoteText}>
          “I was a wide-eyed freshman when I joined <span className={styles.span}>TomasinoWeb</span>. They helped me
          develop my expertise and passion as I worked with diverse and
          like-minded people who enthusiastically dabble in storytelling,
          community development, civic engagement, and student leadership. With
          everyone's support and initiative, it is always a thrill to work with
          them in pursuit of impactful and moving conversations.”{" "}
        </p>
        <p className={styles.quoteAuthor}>- Mikaela Gabrielle De Castro (Blogs Editor, PY 2021-2024)</p>
      </div>
    </div>
  );
};
