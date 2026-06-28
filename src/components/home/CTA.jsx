import "../../styles/cta.css";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta-overlay"></div>

      <div className="cta-container">

        <span className="cta-tag">
          JOIN BHARAT BUSINESS ALLIANCE
        </span>

        <h2>
          Ready to Grow Your <span>Business?</span>
        </h2>

        <p>
          Become a part of India's trusted business networking community.
          Build valuable connections, receive quality referrals and grow
          your business with BBA.
        </p>

        <div className="cta-features">

          <div>
            <FaCheckCircle />
            <span>Weekly Business Meetings</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Trusted Referrals</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Professional Networking</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Business Growth</span>
          </div>

        </div>

        <div className="cta-buttons">

          <button className="cta-primary">
            Join Membership
            <FaArrowRight />
          </button>

          <button className="cta-secondary">
            <FaPhoneAlt />
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;