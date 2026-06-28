import "../../styles/categories.css";
import {
  FaUserTie,
  FaBuilding,
  FaBalanceScale,
  FaStethoscope,
  FaHome,
  FaLaptopCode,
  FaGraduationCap,
  FaBullhorn,
  FaIndustry,
  FaShieldAlt,
  FaUniversity,
  FaStore,
} from "react-icons/fa";

const categories = [
  { icon: FaUserTie, name: "Chartered Accountant" },
  { icon: FaBalanceScale, name: "Advocate" },
  { icon: FaStethoscope, name: "Doctor" },
  { icon: FaHome, name: "Real Estate" },
  { icon: FaLaptopCode, name: "IT Services" },
  { icon: FaBullhorn, name: "Digital Marketing" },
  { icon: FaGraduationCap, name: "Education" },
  { icon: FaIndustry, name: "Manufacturing" },
  { icon: FaShieldAlt, name: "Insurance" },
  { icon: FaUniversity, name: "Finance" },
  { icon: FaBuilding, name: "Architect" },
  { icon: FaStore, name: "Retail Business" },
];

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="categories-container">

        <div className="section-title">
          <span>BUSINESS CATEGORIES</span>

          <h2>Who Can Join BBA?</h2>

          <p>
            Entrepreneurs, professionals and business owners from every
            industry are welcome to become a part of Bharat Business Alliance.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="category-card" key={index}>
                <div className="category-icon">
                  <Icon />
                </div>

                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}