import React from "react";
import styles from "./Quote.module.scss";

interface QuoteProps {
  imageUrl?: string;
  author: string;
  position: string;
  testimonial: string;
  side: "left" | "right";
}

const Quote: React.FC<QuoteProps> = ({ imageUrl, author, position, testimonial, side }) => {
  const alignment = side === "left" ? styles.alignLeft : styles.alignRight;
  return (
    <div className={`${styles.quoteBlock} ${alignment}`}>
      <div className="">
        <img src={imageUrl} alt="" className={`${styles.quoteImage}`} />
      </div>
      <div className={`${styles.testimonialContainer}`}>
        <q className={`${styles.testimonialText}`}>{testimonial}</q>
        <div className={`${styles.authorContainer}`}>
          <span className={styles.quoteBox}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19" fill="none" className={`${styles.quoteIcon}`}>
              <path
                d="M18.125 9.5H15V7C15 5.62109 16.1211 4.5 17.5 4.5H17.8125C18.332 4.5 18.75 4.08203 18.75 3.5625V1.6875C18.75 1.16797 18.332 0.75 17.8125 0.75H17.5C14.0469 0.75 11.25 3.54688 11.25 7V16.375C11.25 17.4102 12.0898 18.25 13.125 18.25H18.125C19.1602 18.25 20 17.4102 20 16.375V11.375C20 10.3398 19.1602 9.5 18.125 9.5ZM6.875 9.5H3.75V7C3.75 5.62109 4.87109 4.5 6.25 4.5H6.5625C7.08203 4.5 7.5 4.08203 7.5 3.5625V1.6875C7.5 1.16797 7.08203 0.75 6.5625 0.75H6.25C2.79688 0.75 0 3.54688 0 7V16.375C0 17.4102 0.839844 18.25 1.875 18.25H6.875C7.91016 18.25 8.75 17.4102 8.75 16.375V11.375C8.75 10.3398 7.91016 9.5 6.875 9.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div className="">
            <h4 className={styles.authorText}>{author}</h4>
            <p className={styles.authorPosition}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
