import React, { useState } from "react";
import FAQ from "./FAQ";

function ApplicationGroup() {
  const [faqs, setfaqs] = useState([
    {
      question: "Am I eligible to apply?",
      answer:
        "You should be eligible to apply for TomasinoWeb if:\n \t1. You are not involved in any/all political parties; \n\t2. You do not hold a position in a student council and/or part of an organization that has the same nature with TomasinoWeb and; \n\t3. You are a bonafide undergraduate student of the University of Santo Tomas enrolled in any program.",
      tag: "application",
      open: false,
    },
    {
      question: "What is the application process?",
      answer:
        "Fill out the application form found in the website. After sending the necessary documents stated at the end of the application form, we will inform you of the next step. \n\nShould you qualify for an interview, the Human Resources department will send you a scheduling sheet to confirm your slot. After the interview, wait for a few days for the said department to send your application results. ",
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
      question:
        "To whom do we send our curriculum vitae and student registration form?",
      answer:
        "Please send your curriculum vitae to join.tomweb15@gmail.com with the subject “[DEPARTMENT] Your Whole Name”. Fill out the necessary fields, of course.",

      tag: "application",
      open: false,
    },
    {
      question: "Is there membership fee?",
      answer: "There is none as of the moment.",
      tag: "application",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i}>
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        </div>
      ))}
    </div>
  );
}

export default ApplicationGroup;
