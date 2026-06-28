import "../../styles/whyBecomeMember.css";
import {
  FaUsers,
  FaHandshake,
  FaBullhorn,
  FaChartLine,
  FaCalendarCheck,
  FaBriefcase,
} from "react-icons/fa";

function WhyBecomeMember() {
  return (
    <section className="why-member" id="membership">

      <div className="why-member-container">

        <div className="why-member-heading">

          <span>MEMBERSHIP BENEFITS</span>

          <h2>
            Why Become a
            <span> BBA Member?</span>
          </h2>

          <p>
            Join a trusted business community where entrepreneurs,
            professionals and business owners help each other grow
            through quality referrals and long-term partnerships.
          </p>

        </div>

        <div className="why-member-grid">

          <div className="why-member-card">

            <FaHandshake className="why-member-icon" />

            <h3>Trusted Referrals</h3>

            <p>
              Receive genuine referrals from verified members.
            </p>

          </div>

          <div className="why-member-card">

            <FaUsers className="why-member-icon" />

            <h3>Business Networking</h3>

            <p>
              Build relationships with professionals from different
              industries.
            </p>

          </div>

          <div className="why-member-card">

            <FaBullhorn className="why-member-icon" />

            <h3>Business Promotion</h3>

            <p>
              Promote your products and services every week.
            </p>

          </div>

          <div className="why-member-card">

            <FaChartLine className="why-member-icon" />

            <h3>Business Growth</h3>

            <p>
              Increase sales through strategic partnerships.
            </p>

          </div>

          <div className="why-member-card">

            <FaCalendarCheck className="why-member-icon" />

            <h3>Weekly Meetings</h3>

            <p>
              Attend networking meetings and business discussions.
            </p>

          </div>

          <div className="why-member-card">

            <FaBriefcase className="why-member-icon" />

            <h3>Professional Community</h3>

            <p>
              Become part of India's growing business alliance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyBecomeMember;