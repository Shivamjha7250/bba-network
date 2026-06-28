import "../../styles/membershipPlans.css";
import {
  FaCheckCircle,
  FaStar,
  FaCrown,
  FaBuilding,
} from "react-icons/fa";

const plans = [
  {
    id: 1,
    title: "BBA Basic Member",
    price: "₹1,499",
    duration: "Per Year",
    button: "Join Basic",
    featured: false,
    icon: <FaCheckCircle />,
    features: [
      "Membership Certificate",
      "Networking Meetings",
      "Business Directory Listing",
      "Referral Opportunities",
      "WhatsApp Promotion",
      "Business Growth Sessions",
      "Access to BBA Events",
      "Digital Member ID",
    ],
  },

  {
    id: 2,
    title: "BBA Premium Member",
    price: "₹5,999",
    duration: "Per Year",
    button: "Join Premium",
    featured: true,
    icon: <FaStar />,
    features: [
      "Everything in Basic",
      "Priority Promotion",
      "Featured Business Listing",
      "Business Presentation",
      "Social Media Promotion",
      "Exclusive Networking",
      "Workshop Discounts",
      "Premium Certificate",
    ],
  },

  {
    id: 3,
    title: "BBA Business Leader",
    price: "₹11,999",
    duration: "Per Year",
    button: "Become Leader",
    featured: false,
    icon: <FaCrown />,
    features: [
      "Everything in Premium",
      "Business Spotlight",
      "Lead Generation",
      "Priority Referrals",
      "Business Consultation",
      "Speaking Opportunity",
      "Leadership Recognition",
      "VIP Support",
    ],
  },

  {
    id: 4,
    title: "BBA City Partner",
    price: "₹9,999",
    duration: "One Time",
    button: "Become Partner",
    featured: false,
    icon: <FaBuilding />,
    features: [
      "Operate BBA in One City",
      "Manage Local Chapter",
      "Membership Revenue",
      "Official Meetings",
      "Marketing Support",
      "Operations Manual",
      "Training Support",
      "Partner Certificate",
    ],
  },
];

function MembershipPlans() {
  return (
    <section className="membership-plans">

      <div className="membership-container">

        <div className="membership-heading">

          <span>MEMBERSHIP PLANS</span>

          <h2>Choose Your Membership</h2>

          <p>
            Select the perfect membership plan and become part of India's
            fastest growing business networking community.
          </p>

        </div>

        <div className="membership-grid">

          {plans.map((plan) => (

            <div
              key={plan.id}
              className={`membership-card ${
                plan.featured ? "featured" : ""
              }`}
            >

              {plan.featured && (
                <div className="featured-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="membership-icon">
                {plan.icon}
              </div>

              <h3>{plan.title}</h3>

              <div className="membership-price">

                <h2>{plan.price}</h2>

                <span>{plan.duration}</span>

              </div>

              <ul>

                {plan.features.map((item, index) => (

                  <li key={index}>

                    <FaCheckCircle />

                    <span>{item}</span>

                  </li>

                ))}

              </ul>

              <button className="membership-btn">
                {plan.button}
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default MembershipPlans;