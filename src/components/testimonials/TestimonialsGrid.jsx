import "../../styles/testimonialsGrid.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Consultant",
    image: "/images/testimonials/user.jpg",
    review:
      "Joining Bharat Business Alliance transformed my business. I received quality referrals and genuine business connections.",
  },
  {
    name: "Priya Verma",
    role: "Digital Marketing Expert",
    image: "/images/testimonials/user.jpg",
    review:
      "Weekly networking meetings helped me build strong relationships and generate new business opportunities.",
  },
  {
    name: "Rahul Gupta",
    role: "Real Estate Consultant",
    image: "/images/testimonials/user.jpg",
    review:
      "Professional networking, trusted referrals and excellent support. Highly recommended for entrepreneurs.",
  },
  {
    name: "Neha Singh",
    role: "Chartered Accountant",
    image: "/images/testimonials/user.jpg",
    review:
      "Excellent business community where members genuinely support each other's business growth.",
  },
  {
    name: "Vikas Patel",
    role: "Manufacturer",
    image: "/images/testimonials/user.jpg",
    review:
      "BBA expanded my business network and increased quality referrals consistently.",
  },
  {
    name: "Rohit Jain",
    role: "Insurance Advisor",
    image: "/images/testimonials/user.jpg",
    review:
      "One of the best networking communities for professionals and business owners.",
  },
  {
    name: "Ankit Verma",
    role: "Entrepreneur",
    image: "/images/testimonials/user.jpg",
    review:
      "The weekly meetings are well organized and generate quality business opportunities.",
  },
  {
    name: "Sneha Gupta",
    role: "Interior Designer",
    image: "/images/testimonials/user.jpg",
    review:
      "BBA gave me a platform to promote my business and connect with trusted professionals.",
  },
];

function TestimonialsGrid() {
  return (
    <section className="testimonials-grid-section">

      <div className="testimonials-grid-container">

        <div className="testimonials-grid-heading">

          <span>MEMBER TESTIMONIALS</span>

          <h2>What Our Members Say</h2>

          <p>
            Read genuine experiences shared by our members who have
            grown their businesses through Bharat Business Alliance.
          </p>

        </div>

        <div className="testimonials-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <img
                src={item.image}
                alt={item.name}
                className="testimonial-image"
              />

              <div className="testimonial-stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="testimonial-review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TestimonialsGrid;