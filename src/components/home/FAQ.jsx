import { useState } from "react";
import "../../styles/faq.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is Bharat Business Alliance (BBA)?",
    answer:
      "Bharat Business Alliance is a professional business networking platform where entrepreneurs and professionals connect to generate business referrals.",
  },
  {
    question: "Who can join BBA?",
    answer:
      "Business owners, startups, freelancers, professionals and entrepreneurs from every industry can join BBA.",
  },
  {
    question: "How often are meetings conducted?",
    answer:
      "BBA conducts weekly networking meetings, business seminars and referral sessions.",
  },
  {
    question: "How can I become a member?",
    answer:
      "Click the Join Membership button and complete the registration process.",
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Quality referrals, networking opportunities, business promotion and long-term partnerships.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq" id="faq">

      <div className="faq-container">

        <div className="faq-heading">

          <span>FREQUENTLY ASKED QUESTIONS</span>

          <h2>
            Got Questions?
            <span> We've Got Answers.</span>
          </h2>

          <p>
            Find answers to the most common questions about Bharat Business Alliance.
          </p>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{faq.question}</span>

                {openIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}

              </button>

              <div
                className={
                  openIndex === index
                    ? "faq-answer active"
                    : "faq-answer"
                }
              >
                <p>{faq.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}