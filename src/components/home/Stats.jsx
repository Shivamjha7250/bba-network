import "../../styles/stats.css";
import {
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaGlobeAsia,
} from "react-icons/fa";

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-heading">
        <span>OUR ACHIEVEMENTS</span>

        <h2>
          Empowering Businesses Through <span>Trusted Referrals</span>
        </h2>

        <p>
          Bharat Business Alliance helps entrepreneurs, startups and
          professionals connect, collaborate and grow through quality
          business referrals.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stats-card">
          <FaUsers className="stats-icon" />
          <h3>24+</h3>
          <p>Active Members</p>
        </div>

        <div className="stats-card">
          <FaHandshake className="stats-icon" />
          <h3>100+</h3>
          <p>Business Referrals</p>
        </div>

        <div className="stats-card">
          <FaChartLine className="stats-icon" />
          <h3>₹2 Lakh+</h3>
          <p>Business Generated</p>
        </div>

        <div className="stats-card">
          <FaGlobeAsia className="stats-icon" />
          <h3>Pan India</h3>
          <p>Growing Network</p>
        </div>
      </div>
    </section>
  );
}