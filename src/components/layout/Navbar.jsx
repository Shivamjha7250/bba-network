import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "../../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="/images/logo/logo.png"
            alt="Bharat Business Alliance"
            className="logo-img"
          />

          <div className="logo-text">
            <h2>Bharat Business Alliance</h2>
            <p>Together We Connect • Together We Grow</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <Link to="/membership" onClick={() => setMenuOpen(false)}>
            Membership
          </Link>

          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="nav-right">

          <a href="tel:+919250245313" className="icon-btn">
            <FaPhoneAlt />
          </a>

          <a
            href="https://wa.me/919250245313"
            className="icon-btn whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

          <Link
            to="/membership"
            className="join-btn"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </Link>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;