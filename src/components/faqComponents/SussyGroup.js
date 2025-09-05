import React, { useState } from "react";
import FAQ from "./FAQ";

function SussyGroup() {
  const [faqs, setfaqs] = useState([
    {
      question: "Did some members of the org ever get attached to a hardboiled egg?",
      answer: "Yes, we did. So much that we immortalized TomWegg to become the official mascot of Lamona! 🥚",
      tag: "sussybaka",
      open: false,
    },
    {
      question: "Do you all even sleep?",
      answer: "Uh, next question!",
      tag: "sussybaka",
      open: false,
    },
    {
      question: "Is it Tomasino Web, TomasinoWeb, or Tomasinoweb?",
      answer: "TomasinoWeb.",
      tag: "sussybaka",
      open: false,
    },
    {
      question: "Will I finally meet the “one”?",
      answer: "TWinder happened. Sort of. Apply now and find it out yourself!",
      tag: "sussybaka",
      open: false,
    },
    {
      question: "Where should I contact you if I have more questions?",
      answer: "You may contact us using our Discord server (The Pool) or through join@tomasinoweb.org.",
      tag: "sussybaka",
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

export default SussyGroup;
