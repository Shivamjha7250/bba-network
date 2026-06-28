import "../../styles/footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <img
            src="/images/logo.png"
            alt="Bharat Business Alliance"
            className="footer-logo"
          />

          <h3>Bharat Business Alliance</h3>

          <p>
            Bharat Business Alliance (BBA) is India's trusted business
            referral network connecting entrepreneurs, startups and
            professionals to grow through quality referrals.
          </p>

          <div className="social-icons">

            <a href="https://www.facebook.com/share/1CXbqXJw8g/"><FaFacebookF /></a>

            <a href="https://www.instagram.com/bharatbusinessalliance"><FaInstagram /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a
  href="https://wa.me/919250245313"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
  <FaWhatsapp />
</a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h4>Quick Links</h4>

          <a href="#">Home</a>

          <a href="#about">About Us</a>

          <a href="#membership">Membership</a>

          <a href="#">Events</a>

          <a href="#">Gallery</a>

          <a href="#contact">Contact</a>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>

        </div>

        {/* Categories */}

        <div className="footer-box">

          <h4>Who Can Join?</h4>

          <a href="#">Business Owners</a>

          <a href="#">Startups</a>

          <a href="#">Chartered Accountants</a>

          <a href="#">Architects</a>

          <a href="#">Digital Marketing</a>

          <a href="#">Insurance</a>

          <a href="#">Real Estate</a>

          <a href="#">Manufacturers</a>

          <a href="#">Consultants</a>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h4>Contact Information</h4>

          <p><FaPhoneAlt />+91 92502 45313</p>

          <p><FaEnvelope />bharatbusinessalliance@gmail.com</p>

          <p><FaMapMarkerAlt /> Lucknow, Uttar Pradesh, India</p>

          <h4 className="hours">Business Hours</h4>

          <p><FaClock /> Monday - Saturday</p>

          <p>10:00 AM - 7:00 PM</p>

          <button className="footer-btn">
            Join BBA Today
          </button>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Bharat Business Alliance.
        All Rights Reserved. | Designed & Developed by
        <strong> JhaTech Solution</strong>

      </div>

    </footer>
  );
}

export default Footer;