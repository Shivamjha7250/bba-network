import "../../styles/membershipBenefits.css";
import {
  FaHandshake,
  FaUsers,
  FaBullhorn,
  FaChartLine,
  FaAward,
  FaGraduationCap,
  FaGlobeAsia,
  FaBriefcase,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaHandshake />,
    title: "Trusted Referrals",
    description:
      "Receive genuine business referrals from trusted BBA members.",
  },
  {
    icon: <FaUsers />,
    title: "Professional Networking",
    description:
      "Connect with entrepreneurs, professionals and industry leaders.",
  },
  {
    icon: <FaBullhorn />,
    title: "Business Promotion",
    description:
      "Promote your business through meetings, events and social media.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth",
    description:
      "Increase visibility and generate more business opportunities.",
  },
  {
    icon: <FaAward />,
    title: "Recognition",
    description:
      "Earn awards and recognition for your achievements.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Training Programs",
    description:
      "Attend business workshops and skill development sessions.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Pan India Network",
    description:
      "Expand your network across multiple cities in India.",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Collaboration",
    description:
      "Build long-term partnerships with verified businesses.",
  },
];

function MembershipBenefits() {
  return (
    <section className="membership-benefits">

      <div className="membership-benefits-container">

        <div className="membership-benefits-heading">

          <span>WHY JOIN BBA</span>

          <h2>Membership Benefits</h2>

          <p>
            Every membership gives you access to powerful networking,
            quality referrals and business growth opportunities.
          </p>

        </div>

        <div className="membership-benefits-grid">

          {benefits.map((item, index) => (

            <div
              className="membership-benefit-card"
              key={index}
            >

              <div className="membership-benefit-icon">
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

export default MembershipBenefits;