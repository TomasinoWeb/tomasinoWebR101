import styles from "./Testimonial.module.scss";

interface TestimonialProps {
  imageSrc: string;
  text: React.ReactNode;
  name: string;
  about: string;
  invertOnLarge?: boolean;
}

const Testimonial = ({ imageSrc, text, name, about, invertOnLarge }: TestimonialProps) => {
  return (
    <section className={styles.testimonialContainer}>
      {/* imagecontainer must be order last in large devices */}
      <div className={`${styles.testimonialImageContainer} ${invertOnLarge ? styles.invertOnLarge : ""}`}>
        <svg
          className={styles.sprout}
          width="100"
          height="100"
          viewBox="0 0 36 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59316 37.0357L8.13159 34.7283C8.13159 34.7283 13.2316 28.3712 19.7931 24.3215C26.3547 20.2718 34.3778 18.5295 34.3778 18.5295L35.8394 20.8369L9.59316 37.0357ZM12.3706 14.6205C7.94573 11.093 0.598345 17.072 0.598345 17.072C0.598345 17.072 6.5609 25.9088 13.1641 19.9077C10.5199 16.886 7.96685 17.1779 7.96685 17.1779C11.6413 14.9101 14.3884 18.6707 14.3884 18.6707L17.75 23.9777L20.3747 22.3578L17.3054 17.5123C17.3054 17.5123 14.4553 13.0129 17.6615 9.42935C17.6615 9.42935 17.2292 14.5103 18.6908 16.8177C28.3885 11.9558 21.373 0.880228 21.373 0.880228C21.373 0.880228 8.96263 6.93498 12.3706 14.6205Z"
            fill="#60996D"
          />
        </svg>
        <img className={styles.testimonialImage} src={imageSrc} alt={`Photo of ${name}`} />
      </div>

      <div className={styles.testimonialBody}>
        {/* text is ReactNode since content has some bold text within. */}
        {text}

        <div className={styles.about}>
          <div className={styles.quoteIcon}>
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.0625 5.55762H7.5V4.30762C7.5 3.61817 8.06055 3.05762 8.75 3.05762H8.90625C9.16602 3.05762 9.375 2.84863 9.375 2.58887V1.65137C9.375 1.3916 9.16602 1.18262 8.90625 1.18262H8.75C7.02344 1.18262 5.625 2.58106 5.625 4.30762V8.99513C5.625 9.51271 6.04492 9.93263 6.5625 9.93263H9.0625C9.58008 9.93263 10 9.51271 10 8.99513V6.49512C10 5.97754 9.58008 5.55762 9.0625 5.55762ZM3.4375 5.55762H1.875V4.30762C1.875 3.61817 2.43555 3.05762 3.125 3.05762H3.28125C3.54102 3.05762 3.75 2.84863 3.75 2.58887V1.65137C3.75 1.3916 3.54102 1.18262 3.28125 1.18262H3.125C1.39844 1.18262 0 2.58106 0 4.30762V8.99513C0 9.51271 0.419922 9.93263 0.9375 9.93263H3.4375C3.95508 9.93263 4.375 9.51271 4.375 8.99513V6.49512C4.375 5.97754 3.95508 5.55762 3.4375 5.55762Z"
                fill="#343332"
              />
            </svg>
          </div>

          <div>
            <p>
              <strong>{name}</strong>
            </p>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
