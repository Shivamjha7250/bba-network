import "../../styles/journey.css";
import {
  FaUserPlus,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

function Journey() {
  const steps = [
    {
      icon: <FaUserPlus />,
      number: "01",
      title: "Join BBA",
      desc: "Become a member of Bharat Business Alliance.",
    },
    {
      icon: <FaUsers />,
      number: "02",
      title: "Attend Meetings",
      desc: "Connect with entrepreneurs every week.",
    },
    {
      icon: <FaHandshake />,
      number: "03",
      title: "Build Referrals",
      desc: "Exchange trusted business referrals.",
    },
    {
      icon: <FaChartLine />,
      number: "04",
      title: "Grow Business",
      desc: "Increase clients through networking.",
    },
    {
      icon: <FaTrophy />,
      number: "05",
      title: "Achieve Success",
      desc: "Create long-term business partnerships.",
    },
  ];

  return (
    <section className="journey">
      <div className="journey-container">

        <div className="section-title">
          <span>OUR JOURNEY</span>
          <h2>Your Journey Towards Business Success</h2>
          <p>
            Follow these simple steps to become part of India's trusted
            business networking community.
          </p>
        </div>

        <div className="journey-grid">
          {steps.map((step, index) => (
            <div className="journey-card" key={index}>

              <div className="journey-number">
                {step.number}
              </div>

              <div className="journey-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Journey;