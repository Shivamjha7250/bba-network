import "../../styles/officeHours.css";
import {
  FaClock,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const officeHours = [
  {
    day: "Monday",
    time: "10:00 AM - 6:00 PM",
  },
  {
    day: "Tuesday",
    time: "10:00 AM - 6:00 PM",
  },
  {
    day: "Wednesday",
    time: "10:00 AM - 6:00 PM",
  },
  {
    day: "Thursday",
    time: "10:00 AM - 6:00 PM",
  },
  {
    day: "Friday",
    time: "10:00 AM - 6:00 PM",
  },
  {
    day: "Saturday",
    time: "10:00 AM - 4:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

function OfficeHours() {
  return (
    <section className="office-hours">

      <div className="office-hours-container">

        {/* Left Content */}

        <div className="office-hours-content">

          <span>BUSINESS HOURS</span>

          <h2>We're Available to Help You</h2>

          <p>
            Our team is available during business hours to assist you with
            membership, networking opportunities, partnerships and general
            business inquiries.
          </p>

          <div className="office-contact-list">

            <div className="office-contact-item">

              <FaPhoneAlt />

              <div>

                <h4>Phone</h4>

                <p>+91 92502 45313</p>

              </div>

            </div>

            <div className="office-contact-item">

              <FaEnvelope />

              <div>

                <h4>Email</h4>

                <p>info@bharatbusinessalliance.com</p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Card */}

        <div className="office-hours-card">

          <div className="office-hours-title">

            <FaClock />

            <h3>Office Timing</h3>

          </div>

          <div className="office-hours-list">

            {officeHours.map((item, index) => (

              <div
                className="office-hour-row"
                key={index}
              >

                <div className="office-day">

                  <FaCalendarAlt />

                  <span>{item.day}</span>

                </div>

                <strong>{item.time}</strong>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default OfficeHours;