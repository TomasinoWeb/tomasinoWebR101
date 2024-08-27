import React from "react";
import styles from "../../pages/faq.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={faq.open ? `${styles["faq"]} ${styles["open"]}` : `${styles["faq"]}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={styles["faq-header"]}>
        <div className={styles["faq-question"]}>{faq.question}</div>
        <FontAwesomeIcon icon={faPlus} className={faq.open ? styles.open : styles.closed} />
      </div>

      <div className={styles["faq-answer"]}>{faq.answer}</div>
    </div>
  );
}

export default FAQ;
