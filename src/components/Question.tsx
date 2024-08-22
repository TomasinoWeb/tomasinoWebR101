import React, { useState } from "react";
import styles from "./Question.module.scss";

interface QuestionProps {
  question: string;
  choices: string[];
}

const Question = (props: QuestionProps) => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  return (
    <div className={styles.question_container}>
      <h1>{props.question}</h1>
      <div className={styles.choices_container}>
        {props.choices.map((choice, index) => (
          <button
            key={index}
            className={selectedChoice === index ? styles.selected : ""}
            onClick={() => setSelectedChoice(index)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
