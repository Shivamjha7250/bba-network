import "../../styles/whyChoose.css";
import {
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaUserTie,
  FaGlobeAsia,
  FaBusinessTime,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why" id="why">

      <div className="why-container">

        <div className="why-heading">

          <span>WHY CHOOSE BBA</span>

          <h2>
            Grow Faster With India's Trusted
            <span> Business Referral Network</span>
          </h2>

          <p>
            Bharat Business Alliance helps entrepreneurs, startups,
            professionals and business owners build trusted
            relationships, generate referrals and create long-term
            business opportunities.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">
            <FaHandshake className="why-icon" />
            <h3>Trusted Referrals</h3>
            <p>
              Receive genuine business referrals from verified members.
            </p>
          </div>

          <div className="why-card">
            <FaUsers className="why-icon" />
            <h3>Strong Networking</h3>
            <p>
              Connect with entrepreneurs across multiple industries.
            </p>
          </div>

          <div className="why-card">
            <FaChartLine className="why-icon" />
            <h3>Business Growth</h3>
            <p>
              Increase revenue through strategic partnerships.
            </p>
          </div>

          <div className="why-card">
            <FaUserTie className="why-icon" />
            <h3>Professional Community</h3>
            <p>
              Join a trusted community of business professionals.
            </p>
          </div>

          <div className="why-card">
            <FaBusinessTime className="why-icon" />
            <h3>Weekly Meetings</h3>
            <p>
              Attend regular networking meetings and business sessions.
            </p>
          </div>

          <div className="why-card">
            <FaGlobeAsia className="why-icon" />
            <h3>Business Opportunities</h3>
            <p>
              Expand your reach with collaboration opportunities.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;