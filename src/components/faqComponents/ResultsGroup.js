import React, { useState } from "react";
import FAQ from "./FAQ";

function ResultsGroup() {
  const [faqs, setfaqs] = useState([
    {
      question: "How long should I wait for the results?",
      answer:
        "The maximum waiting period for the application results should be seven days. You can also periodically check the [results section](/results) of this website to see if your name shows up.\n\nIf you did not receive an email regarding the result of your application, please do not hesitate to follow up with us through [The Pool](/discord). ",
      tag: "results",
      open: false,
    },
    {
      question: "What happens after I get accepted?",
      answer:
        "The fun begins! Check out our [Org Culture page](/about/org-culture) to know more about the activities we do at TomasinoWeb 🥳",
      tag: "results",
      open: false,
    },
    {
      question: "Am I allowed to apply again if I don’t get accepted this year?",
      answer: "Of course!",
      tag: "results",
      open: false,
    },
    {
      question: "Can I shift to different department after I get accepted?",
      answer:
        "You can shift to different department after a semester, but you'll have to take and pass the its exam and interview.",
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
