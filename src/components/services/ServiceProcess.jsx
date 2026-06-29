import "../../styles/serviceProcess.css";
import {
  FaUserPlus,
  FaUsers,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const process = [
  {
    icon: <FaUserPlus />,
    title: "Join BBA",
    description:
      "Become a member of Bharat Business Alliance and connect with a trusted business community.",
  },
  {
    icon: <FaUsers />,
    title: "Attend Networking Meetings",
    description:
      "Participate in regular networking sessions to build valuable business relationships.",
  },
  {
    icon: <FaHandshake />,
    title: "Receive Quality Referrals",
    description:
      "Get genuine business referrals and collaboration opportunities from fellow members.",
  },
  {
    icon: <FaChartLine />,
    title: "Grow Your Business",
    description:
      "Expand your network, increase business opportunities and achieve sustainable growth.",
  },
];

function ServiceProcess() {
  return (
    <section className="service-process">

      <div className="services-container">

        <div className="section-title">

          <span>HOW IT WORKS</span>

          <h2>Our Business Growth Process</h2>

          <p>
            A simple four-step journey to help entrepreneurs build
            meaningful connections and grow their businesses through
            Bharat Business Alliance.
          </p>

        </div>

        <div className="process-grid">

          {process.map((step, index) => (

            <div
              className="process-card"
              key={index}
            >

              <div className="process-number">
                {index + 1}
              </div>

              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServiceProcess;