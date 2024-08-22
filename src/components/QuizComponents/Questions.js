import React, { useState } from "react";
import Question from "./Question";


function Questions() {
  const [question, answerQuestion] = useState([
    {
      question: "Question 1",
      answerOne: "Choice 1",
      answerTwo: "Choice 2",
      answerThree: "Choice 3",
      answerFour: "Choice 4",
      tag: "questionOne",
      correctAnswer: answerOne,
    },
    {
      question: "What is the application process?",
      answer:
        "Fill out the application form found on the website. After sending the necessary documents stated at the end of the application form, we will inform you of the next step. \n\nShould you qualify for an interview, the Human Resources department will send you a scheduling sheet to confirm your slot. After the interview, wait for a few days for the said department to send your application results. ",
      tag: "application",
      open: false,
    },
    {
      question: "Are you strict about deadlines?",
      answer: "Yes. Punctuality is of utmost importance in TomasinoWeb.",
      tag: "application",
      open: false,
    },
    {
      question: "To whom do we send our curriculum vitae and student registration form?",
      answer:
        "Please send your curriculum vitae to join@tomasinoweb.org with the subject “[DEPARTMENT] Your Whole Name”. Fill out the necessary fields, of course.",
      tag: "application",
      open: false,
    },
    {
      question: "Is there a membership fee?",
      answer: "Yes. It's P250 per member, but rest assured, you will absolutely get more than what you paid for.",
      tag: "application",
      open: false,
    },
  ]);

  return (
    <div>
      {question.map((question, i) => (
        <div key={i}>
          <Question question={question} index={i} answerQuestion={answerQuestion} />
        </div>
      ))}
    </div>
  )
}

export default Questions;
