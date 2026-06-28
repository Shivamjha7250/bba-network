import { useState } from "react";
import "../../styles/membershipFAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Who can become a BBA member?",
    answer:
      "Entrepreneurs, startups, business owners, professionals, consultants, manufacturers, traders and service providers can join Bharat Business Alliance.",
  },
  {
    question: "How do I apply for membership?",
    answer:
      "Select your preferred membership plan, complete the application form and our team will contact you for verification and onboarding.",
  },
  {
    question: "Can I upgrade my membership later?",
    answer:
      "Yes. You can upgrade your membership at any time by paying the applicable membership difference.",
  },
  {
    question: "How long is the membership valid?",
    answer:
      "Basic, Premium and Business Leader memberships are valid for one year. City Partner membership follows BBA partnership terms.",
  },
  {
    question: "Will I receive a membership certificate?",
    answer:
      "Yes. Every approved member receives an official BBA Membership Certificate and a Digital Member ID.",
  },
  {
    question: "Do members get business referrals?",
    answer:
      "Yes. One of the major benefits of joining BBA is referral-based business growth through trusted networking.",
  },
];

function MembershipFAQ() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="membership-faq-section">

      <div className="membership-faq-container">

        <div className="membership-faq-heading">

          <span>MEMBERSHIP FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to the most common questions about becoming a
            Bharat Business Alliance member.
          </p>

        </div>

        <div className="membership-faq-list">

          {faqData.map((item, index) => (

            <div
              className={`membership-faq-item ${
                active === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="membership-faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{item.question}</span>

                {active === index ? <FaMinus /> : <FaPlus />}

              </button>

              {active === index && (

                <div className="membership-faq-answer">

                  <p>{item.answer}</p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default MembershipFAQ;