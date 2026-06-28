import "../../styles/aboutCompany.css";
import { FaCheckCircle } from "react-icons/fa";

function AboutCompany() {
  return (
    <section className="about-company">
      <div className="about-company-container">

        <div className="about-company-image">
          <img
            src="/images/about/company.png"
            alt="Bharat Business Alliance"
          />

          <div className="experience-box">
            <h2>25+</h2>
            <p>Trusted Business Members</p>
          </div>
        </div>

        <div className="about-company-content">

          <span className="section-tag">
            ABOUT BHARAT BUSINESS ALLIANCE
          </span>

          <h2>
            India's Trusted
            <span> Business Networking Platform</span>
          </h2>

          <p>
            Bharat Business Alliance (BBA) is a professional business
            networking organization dedicated to connecting entrepreneurs,
            startups, manufacturers, consultants and professionals through
            trusted referrals, collaboration and long-term business
            relationships.
          </p>

          <p>
            Our goal is to create an ecosystem where businesses support each
            other, exchange quality referrals and achieve sustainable growth
            through regular networking meetings and strategic partnerships.
          </p>

          <div className="about-list">

            <div>
              <FaCheckCircle />
              <span>Trusted Business Referral Network</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Professional Entrepreneurs Community</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Weekly Networking Meetings</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Business Growth Opportunities</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Strong Industry Connections</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Pan India Business Network</span>
            </div>

          </div>

          <div className="about-buttons">

            <button className="primary-btn">
              Become a Member
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutCompany;