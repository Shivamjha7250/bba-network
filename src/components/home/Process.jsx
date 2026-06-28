import "../../styles/process.css";
import {
  FaUserPlus,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    number: "01",
    title: "Join BBA",
    text: "Complete your membership and become part of India's trusted business referral network.",
  },
  {
    icon: <FaUsers />,
    number: "02",
    title: "Attend Weekly Meetings",
    text: "Meet entrepreneurs, professionals and business owners every week.",
  },
  {
    icon: <FaHandshake />,
    number: "03",
    title: "Build Business Network",
    text: "Create meaningful relationships and exchange quality referrals.",
  },
  {
    icon: <FaChartLine />,
    number: "04",
    title: "Grow Your Business",
    text: "Generate new business opportunities through trusted referrals.",
  },
  {
    icon: <FaTrophy />,
    number: "05",
    title: "Achieve Success",
    text: "Expand your business, increase revenue and build long-term partnerships.",
  },
];

function Process() {
  return (
    <section className="process" id="process">

      <div className="process-container">

        <div className="process-heading">

          <span>HOW BBA WORKS</span>

          <h2>
            Your Journey Towards
            <span> Business Success</span>
          </h2>

          <p>
            Bharat Business Alliance follows a simple and effective process
            that helps members connect, collaborate and grow together.
          </p>

        </div>

        <div className="process-grid">

          {steps.map((step, index) => (

            <div className="process-card" key={index}>

              <div className="process-number">
                {step.number}
              </div>

              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;