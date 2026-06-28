import "../../styles/achievements.css";
import {
  FaUsers,
  FaHandshake,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";

function Achievements() {
  const data = [
    {
      icon: <FaUsers />,
      number: "500+",
      title: "Active Members",
    },
    {
      icon: <FaHandshake />,
      number: "1000+",
      title: "Business Referrals",
    },
    {
      icon: <FaBriefcase />,
      number: "100+",
      title: "Networking Events",
    },
    {
      icon: <FaTrophy />,
      number: "50+",
      title: "Success Stories",
    },
  ];

  return (
    <section className="achievements">
      <div className="achievements-container">

        <div className="section-title">
          <span>OUR ACHIEVEMENTS</span>
          <h2>Growing Businesses Together</h2>
          <p>
            Bharat Business Alliance continues to build one of India's
            fastest-growing business networking communities.
          </p>
        </div>

        <div className="achievement-grid">
          {data.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;