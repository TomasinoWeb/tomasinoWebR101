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
    <div className={`${styles.quoteBlock}`}>
      <div className={`${styles.quoteContainer}`}>
        <div className={`${styles.quoteImageContainer}`}>
          <span className={`${styles.quoteImagePlantIcon}`}>
            <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8367 58.7507L12.4788 55.0281C12.4788 55.0281 20.7067 44.772 31.2927 38.2385C41.8787 31.705 54.8226 28.8941 54.8226 28.8941L57.1806 32.6167L14.8367 58.7507ZM19.3176 22.5876C12.1789 16.8965 0.325122 26.5426 0.325122 26.5426C0.325122 26.5426 9.94472 40.7994 20.5979 31.1177C16.332 26.2426 12.213 26.7136 12.213 26.7136C18.1411 23.0548 22.5731 29.1219 22.5731 29.1219L27.9965 37.6839L32.2309 35.0705L27.2791 27.253C27.2791 27.253 22.681 19.9939 27.8536 14.2125C27.8536 14.2125 27.1562 22.4098 29.5142 26.1324C45.1599 18.2884 33.8415 0.419939 33.8415 0.419939C33.8415 0.419939 13.8195 10.1883 19.3176 22.5876Z"
                fill="#60996D"
              />
            </svg>
          </span>
          <img src={imageUrl} alt="" className={`${styles.quoteImage}`} />
        </div>
      </div>
      <div className={`${styles.testimonialContainer}`}>
        <q className={`${styles.testimonialText}`}>{testimonial}</q>
        <div className="">
          <span></span>
          <div className="">
            <h4>{author}</h4>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
