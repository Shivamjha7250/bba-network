import "../../styles/whyChooseServices.css";
import {
  FaCheckCircle,
  FaUsers,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

function WhyChooseServices() {
  const benefits = [
    {
      icon: <FaUsers />,
      title: "Trusted Business Community",
      description:
        "Connect with verified entrepreneurs, professionals and business owners across India.",
    },
    {
      icon: <FaHandshake />,
      title: "Quality Business Referrals",
      description:
        "Receive genuine referrals that help you build long-term business relationships.",
    },
    {
      icon: <FaChartLine />,
      title: "Business Growth",
      description:
        "Increase your visibility, expand your network and grow your business with BBA.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Professional Support",
      description:
        "Get continuous guidance, networking opportunities and business development support.",
    },
  ];

  return (
    <section className="why-services">
      <div className="services-container">

        <div className="section-title">
          <span>WHY CHOOSE BBA</span>

          <h2>Why Businesses Choose Our Services</h2>

          <p>
            We create opportunities for entrepreneurs and professionals
            through trusted networking, referrals and business collaboration.
          </p>
        </div>

        <div className="why-services-grid">
          {benefits.map((item, index) => (
            <div className="why-service-card" key={index}>

              <div className="why-service-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseServices;