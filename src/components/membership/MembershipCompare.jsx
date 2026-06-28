import "../../styles/membershipCompare.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const comparison = [
  {
    feature: "Networking Meetings",
    basic: true,
    premium: true,
    leader: true,
    partner: true,
  },
  {
    feature: "Business Directory Listing",
    basic: true,
    premium: true,
    leader: true,
    partner: true,
  },
  {
    feature: "Business Referrals",
    basic: true,
    premium: true,
    leader: true,
    partner: true,
  },
  {
    feature: "Business Promotion",
    basic: true,
    premium: true,
    leader: true,
    partner: true,
  },
  {
    feature: "Featured Business Listing",
    basic: false,
    premium: true,
    leader: true,
    partner: true,
  },
  {
    feature: "Lead Generation",
    basic: false,
    premium: false,
    leader: true,
    partner: true,
  },
  {
    feature: "Speaking Opportunity",
    basic: false,
    premium: false,
    leader: true,
    partner: true,
  },
  {
    feature: "Operate BBA Chapter",
    basic: false,
    premium: false,
    leader: false,
    partner: true,
  },
];

function MembershipCompare() {
  return (
    <section className="membership-compare">

      <div className="membership-compare-container">

        <div className="membership-compare-heading">

          <span>COMPARE PLANS</span>

          <h2>Compare Membership Plans</h2>

          <p>
            Compare all membership plans and choose the perfect one for
            your business.
          </p>

        </div>

        <div className="membership-table-wrapper">

          <table className="membership-table">

            <thead>

              <tr>
                <th>Features</th>
                <th>Basic</th>
                <th>Premium</th>
                <th>Leader</th>
                <th>City Partner</th>
              </tr>

            </thead>

            <tbody>

              {comparison.map((item, index) => (

                <tr key={index}>

                  <td>{item.feature}</td>

                  <td>
                    {item.basic ? <FaCheck /> : <FaTimes />}
                  </td>

                  <td>
                    {item.premium ? <FaCheck /> : <FaTimes />}
                  </td>

                  <td>
                    {item.leader ? <FaCheck /> : <FaTimes />}
                  </td>

                  <td>
                    {item.partner ? <FaCheck /> : <FaTimes />}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default MembershipCompare;