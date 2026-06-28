import "../../styles/about.css";
import {
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Image */}

        <div className="about-image">
          <img
             src="/images/about/about.png"
            alt="About Bharat Business Alliance"
          />

          <div className="experience-card">
            <h2>25+</h2>
            <p>Active Business Members</p>
          </div>
        </div>

        {/* Right Content */}

        <div className="about-content">

          <span className="section-tag">
            ABOUT BHARAT BUSINESS ALLIANCE
          </span>

          <h2>
            Connecting Businesses,
            <span> Creating Opportunities.</span>
          </h2>

          <p>
            Bharat Business Alliance (BBA) is a professional business
            networking platform where entrepreneurs, startups,
            manufacturers, consultants and service providers connect
            to generate trusted referrals, meaningful partnerships
            and sustainable business growth.
          </p>

          <div className="about-grid">

            <div className="about-card">
              <FaHandshake className="about-icon" />
              <h3>Trusted Referrals</h3>
              <p>
                Quality business referrals that help your business grow.
              </p>
            </div>

            <div className="about-card">
              <FaUsers className="about-icon" />
              <h3>Professional Network</h3>
              <p>
                Connect with verified entrepreneurs and professionals.
              </p>
            </div>

            <div className="about-card">
              <FaChartLine className="about-icon" />
              <h3>Business Growth</h3>
              <p>
                Increase opportunities through strategic partnerships.
              </p>
            </div>

            <div className="about-card">
              <FaBriefcase className="about-icon" />
              <h3>Weekly Meetings</h3>
              <p>
                Expand your network through regular business meetings.
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="about-buttons">

            <Link to="/membership" className="about-link">
              <button className="about-btn">
                Become a Member
              </button>
            </Link>

            <Link to="/about" className="about-link">
              <button className="about-btn outline-btn">
                Know More
              </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;