import React, { useState } from "react";
import FAQ from "./FAQ";

function SussyGroup() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "Did some members of the org ever get attached to a hardboiled egg?",
      answer: "Yes, we did. Its name was TomWegg. (RIP TomWegg 🥚🙏)",
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
      answer: "TWinder happened. Sort of. Apply now and find it out yourself! ",
      tag: "sussybaka",
      open: false,
    },
    {
      question: "Where should I contact you if I have more questions?",
      answer:
        "You may contact us using our Discord server or through join.tomweb15@gmail.com.",
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
