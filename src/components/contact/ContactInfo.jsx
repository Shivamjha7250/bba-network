import "../../styles/contactInfo.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <section className="contact-info">

      <div className="contact-info-container">

        <div className="contact-info-heading">

          <span>CONTACT INFORMATION</span>

          <h2>We're Here to Help You</h2>

          <p>
            Connect with Bharat Business Alliance for membership,
            business networking, partnerships, or any general inquiries.
          </p>

        </div>

        <div className="contact-info-grid">

          {/* Address */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <h3>Office Address</h3>

            <p>
              Bharat Business Alliance
              <br />
              Lucknow, Uttar Pradesh, India
            </p>

          </div>

          {/* Phone */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <h3>Phone Number</h3>

            <a href="tel:+919250245313">
              +91 92502 45313
            </a>

          </div>

          {/* Email */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <h3>Email Address</h3>

            <a href="mailto:bharatbusinessalliance@gmail.com">
  bharatbusinessalliance@gmail.com
</a>

          </div>

          {/* WhatsApp */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaWhatsapp />
            </div>

            <h3>WhatsApp</h3>

            <a
              href="https://wa.me/919250245313"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;