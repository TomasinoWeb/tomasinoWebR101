import React, { useState } from "react";
import FAQ from "./FAQ";

function InterviewGroup() {
  const [faqs, setfaqs] = useState([
    {
      question: "Who gets to be interviewed?",
      answer:
        "Applicants who successfully pass the preliminary requirements and their respective department exam are qualified for an interview.",
      tag: "interview",
      open: false,
    },
    {
      question: "How long does the interview usually take?",
      answer: "The interview usually takes around 30 minutes.",
      tag: "interview",
      open: false,
    },
    {
      question: "How do I schedule an interview?",
      answer:
        "Upon accomplishing the interview prerequisites, the Human Resources department will send you a scheduling sheet. They will send you a confirmation email once they have taken note of your interview schedule.",
      tag: "interview",
      open: false,
    },
    {
      question: "Am I required to turn on my camera for the interview?",
      answer:
        "Yes, you are required to turn on your camera for the interview. Wear something you’re comfortable in!",
      tag: "interview",
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

export default InterviewGroup;
