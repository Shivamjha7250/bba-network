import "../../styles/missionVision.css";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaGlobeAsia,
} from "react-icons/fa";

function MissionVision() {
  return (
    <section className="mission-vision">

      <div className="mission-container">

        <div className="section-title">

          <span>MISSION & VISION</span>

          <h2>Building India's Strongest Business Network</h2>

          <p>
            Bharat Business Alliance is committed to creating meaningful
            business relationships that empower entrepreneurs,
            professionals and organizations across India.
          </p>

        </div>

        <div className="mission-grid">

          {/* Mission */}

          <div className="mission-card">

            <div className="mission-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To create a trusted business networking platform where
              entrepreneurs, startups and professionals connect,
              collaborate and grow through quality referrals,
              partnerships and long-term business relationships.
            </p>

          </div>

          {/* Vision */}

          <div className="mission-card">

            <div className="mission-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become India's most trusted and influential business
              networking community, empowering businesses through
              innovation, collaboration and sustainable growth.
            </p>

          </div>

        </div>

        {/* Core Values */}

        <div className="values-grid">

          <div className="value-card">

            <FaHandshake className="value-icon" />

            <h4>Trust</h4>

            <p>
              We believe trust is the foundation of every successful
              business relationship.
            </p>

          </div>

          <div className="value-card">

            <FaUsers className="value-icon" />

            <h4>Networking</h4>

            <p>
              Building meaningful professional connections that create
              long-term opportunities.
            </p>

          </div>

          <div className="value-card">

            <FaChartLine className="value-icon" />

            <h4>Growth</h4>

            <p>
              Helping members achieve measurable business growth through
              referrals and collaboration.
            </p>

          </div>

          <div className="value-card">

            <FaGlobeAsia className="value-icon" />

            <h4>Community</h4>

            <p>
              Creating a strong nationwide business community that
              supports each other's success.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;