import React, { useState } from "react";
import FAQ from "./FAQ";

function ApplicationGroup() {
  const [faqs, setfaqs] = useState([
    {
      question: "Am I eligible to apply?",
      answer:
        "You should be eligible to apply for TomasinoWeb if:\n \t1. You are not involved in any/all political parties; and \n\t2. You do not hold a position in a student council and/or part of an organization that has the same nature with TomasinoWeb and; \n\t3. You are a bonafide undergraduate student of the University of Santo Tomas enrolled in any program.",
      tag: "application",
      open: false,
    },
    {
      question: "What is the application process?",
      answer:
        "Fill out the [application form](/apply). You'll receive an email giving you access to the MeReserve platform where you can send your requirements.\n\nShould you qualify for an interview, the Human Resources department will notify you to schedule and confirm your slot. After the interview, wait for a few days to receive your application results. You can also check the [results page](/results) of the this website periodically.",
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
      question: "What is the MeReserve Platform?",
      answer:
        "MeReserve is a recruitment platform created by TomasinoWeb's Web Technologies Department to easily manage the requirements, exams, and interviews of its applicants.\n\n For help with MeReserve, you may contact the organization through join@tomasinoweb.org.",
      tag: "application",
      open: false,
    },
    {
      question: "To whom do we send our curriculum vitae and student registration form?",
      answer:
        "After filling out the application form, please wait for an email from our Human Resources department. You'll receive a link to the MeReserve platform where you can send your curriculum vitae and registration form.",
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

  const toggleFAQ = (index) => {
    setfaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        }
        return faq;
      })
    );
  };

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={faq.question}>
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        </div>
      ))}
    </div>
  );
}

export default ApplicationGroup;
