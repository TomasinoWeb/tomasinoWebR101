import React, { useState } from "react";
import styles from "./Question.module.scss";
import Buttons from "./Buttons";

interface QuestionProps {
  question: string;
  choices: React.ReactNode[];
  image: string;
}

const Question = (props: QuestionProps) => {
  return (
    <div>
      <div className={styles.questionContainer}>
        <img className={styles.questionImage} src={props.image} alt="Question Image" />
        <h1 className={styles.questionText}>{props.question}</h1>
        <p>Photo from Whisper of the Heart (1995)</p>
      </div>
      <div className={styles.choicesContainer}>
        {props.choices.map((choice, index) => (
          <Buttons key={index} text={choice} theme="secondary" />
        ))}
      </div>
    </div>
  );
};

export default Question;
