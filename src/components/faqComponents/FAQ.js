import React from "react";
import styles from "../../pages/faq.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import Cross from "../../../public/assets/cross.svg";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={faq.open ? `${styles.faq} ${styles.open}` : `${styles.faq}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={styles.faq_header}>
        <div className={styles.faq_question}>{faq.question.toUpperCase()}</div>
        <FontAwesomeIcon icon={faPlus} className={faq.open ? styles.open : styles.closed} />
        {/* <Image
          src="/assets/crossmark.svg"
          alt="Cross"
          width="20"
          height="20"
          className={`${styles.faq_icons} ${faq.open ? styles.open : styles.closed}`}
        /> */}
        {/* TODO: ADD IMPORT */}
      </div>

      <div className={styles.faq_answer}>{faq.answer}</div>
    </div>
  );
}

export default FAQ;
