import React, { useState } from "react";
import FAQ from "./FAQ";

function OrgGroup() {
  const [faqs, setfaqs] = useState([
    {
      question: "What is TomasinoWeb?",
      answer:
        "TomasinoWeb is the premier digital media organization of the University of Santo Tomas joined by students immensely interested in multimedia journalism. Its primary goal as student publication is to deliver relevant information to the Thomasian community through online media.",
      tag: "the org",
      open: false,
    },
    {
      question: "When was TomasinoWeb founded?",
      answer:
        "TomasinoWeb was founded in 2007 by student volunteers mainly from the Faculty of Arts and Letters and Faculty of Engineering under the guidance of the Santo Tomas e-Service Providers (STePS).",
      tag: "the org",
      open: false,
    },
    {
      question: "Are there students from different colleges in TomasinoWeb?",
      answer:
        "Yes! We’re a diverse bunch in the organization. Make friends with those who belong from another college. You might eventually learn a thing or two.",
      tag: "the org",
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

export default OrgGroup;
