import "../../styles/servicesGrid.css";
import {
  FaHandshake,
  FaBullhorn,
  FaUsers,
  FaChalkboardTeacher,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHandshake />,
    title: "Business Networking",
    description:
      "Build meaningful relationships with entrepreneurs and professionals through structured networking meetings.",
  },
  {
    icon: <FaBullhorn />,
    title: "Business Promotion",
    description:
      "Promote your products and services within the trusted BBA business community.",
  },
  {
    icon: <FaUsers />,
    title: "Referral Generation",
    description:
      "Receive quality referrals from verified members to expand your business opportunities.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Training & Workshops",
    description:
      "Attend expert-led sessions on sales, leadership, marketing and business development.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth",
    description:
      "Grow your business through collaboration, partnerships and continuous networking support.",
  },
  {
    icon: <FaGlobe />,
    title: "Digital Branding",
    description:
      "Increase your business visibility with online promotion and professional branding support.",
  },
];

function ServicesGrid() {
  return (
    <section className="services-grid-section">

      <div className="services-container">

        <div className="section-title">

          <span>OUR SERVICES</span>

          <h2>Helping Businesses Connect & Grow</h2>

          <p>
            Bharat Business Alliance provides professional networking,
            business promotion and growth opportunities designed to help
            entrepreneurs achieve long-term success.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesGrid;