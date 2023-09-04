import React, { useState } from "react";
import FAQ from "./FAQ";

function ResultsGroup() {
  const [faqs, setfaqs] = useState([
    {
      question: "How long should I wait for the results?",
      answer:
        "The maximum waiting period for the application results should be seven days. If you did not receive an email regarding the result of your application, please do not hesitate to follow up with us through join.tomweb15@gmail.com. ",
      tag: "results",
      open: false,
    },
    {
      question: "What happens after I get accepted?",
      answer: "The fun begins 🥳",
      tag: "results",
      open: false,
    },
    {
      question:
        "Am I allowed to apply again if I don’t get accepted this year?",
      answer: "Of course!",
      tag: "results",
      open: false,
    },
    {
      question: "Can I shift to another department after I get accepted?",
      answer:
        "You can shift to another department after a semester if you pass the departmental exam and interview.",
      tag: "results",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : faq.open,
      }))
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

export default ResultsGroup;
