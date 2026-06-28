import "../../styles/contactForm.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";

function ContactForm() {
  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        {/* Left Content */}

        <div className="contact-form-content">

          <span>GET IN TOUCH</span>

          <h2>Let's Start a Conversation</h2>

          <p>
            We'd love to hear from you. Whether you're interested in
            membership, partnerships, networking opportunities, or have
            any questions, our team is ready to assist you.
          </p>

          <div className="contact-features">

            <div>✓ Fast Response</div>

            <div>✓ Professional Support</div>

            <div>✓ Business Consultation</div>

            <div>✓ Networking Guidance</div>

            <div>✓ Membership Assistance</div>

            <div>✓ Dedicated Team Support</div>

          </div>

        </div>

        {/* Right Form */}

        <div className="contact-form-box">

          <form>

            <div className="contact-input-grid">

              <div className="contact-input">

                <FaUser />

                <input
                  type="text"
                  placeholder="Full Name"
                />

              </div>

              <div className="contact-input">

                <FaBuilding />

                <input
                  type="text"
                  placeholder="Business Name"
                />

              </div>

              <div className="contact-input">

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className="contact-input">

                <FaPhoneAlt />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                />

              </div>

              <div className="contact-input">

                <FaMapMarkerAlt />

                <input
                  type="text"
                  placeholder="City"
                />

              </div>

              <div className="contact-input">

                <FaTag />

                <input
                  type="text"
                  placeholder="Subject"
                />

              </div>

            </div>

            <textarea
              className="contact-textarea"
              rows="6"
              placeholder="Write your message here..."
            ></textarea>

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;