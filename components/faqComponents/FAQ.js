import React from 'react'
import styles from '../../styles/Faq.module.css'
function FAQ ({faq, index, toggleFAQ}) {

{faq.open ? `${styles["faq"]} ${styles["open"]}` : `${styles["faq"]}`}

  return (
    <div 
        className={faq.open ? `${styles["faq"]} ${styles["open"]}` : `${styles["faq"]}`}
        key={index}
        onClick={() => toggleFAQ(index)}
        >
        <div className={styles["faq-question"]}>
            {faq.question}
        </div>
        <div className={styles["faq-answer"]}>
            {faq.answer}
        </div>

    </div>
  )
}

export default FAQ
