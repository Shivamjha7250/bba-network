import "../../styles/membershipForm.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

function MembershipForm() {
  return (
    <section className="membership-form-section">

      <div className="membership-form-container">

        {/* Left */}

        <div className="membership-form-content">

          <span>JOIN BHARAT BUSINESS ALLIANCE</span>

          <h2>Apply For Membership</h2>

          <p>
            Become a part of India's trusted business networking
            community. Fill in your details and our team will contact
            you shortly.
          </p>

          <div className="membership-points">

            <div>✓ Business Networking</div>

            <div>✓ Quality Referrals</div>

            <div>✓ Business Promotion</div>

            <div>✓ Training Programs</div>

            <div>✓ Leadership Opportunities</div>

            <div>✓ Pan India Network</div>

          </div>

        </div>

        {/* Right */}

        <div className="membership-form-box">

          <form>

            <div className="membership-input-grid">

              <div className="membership-input">

                <FaUser />

                <input
                  type="text"
                  placeholder="Full Name"
                />

              </div>

              <div className="membership-input">

                <FaBuilding />

                <input
                  type="text"
                  placeholder="Business Name"
                />

              </div>

              <div className="membership-input">

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className="membership-input">

                <FaPhoneAlt />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                />

              </div>

              <div className="membership-input full-width">

                <FaMapMarkerAlt />

                <input
                  type="text"
                  placeholder="City"
                />

              </div>

            </div>

            <select className="membership-select">

              <option>Select Membership Plan</option>

              <option>Basic Member</option>

              <option>Premium Member</option>

              <option>Business Leader</option>

              <option>City Partner</option>

            </select>

            <textarea
              className="membership-textarea"
              rows="5"
              placeholder="Tell us about your business..."
            ></textarea>

            <button
              type="submit"
              className="membership-submit-btn"
            >
              Apply For Membership
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default MembershipForm;