import { useEffect, useState } from "react";
import "../../styles/testimonials.css";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Consultant",
    image: "/images/testimonials/user1.jpg",
    review:
      "Joining Bharat Business Alliance transformed my business. I received quality referrals and genuine business connections.",
  },
  {
    name: "Priya Verma",
    role: "Digital Marketing Expert",
    image: "/images/testimonials/user2.jpg",
    review:
      "Weekly networking meetings helped me build strong relationships and generate new business opportunities.",
  },
  {
    name: "Rahul Gupta",
    role: "Real Estate Consultant",
    image: "/images/testimonials/user3.jpg",
    review:
      "Professional networking, trusted referrals and excellent support. Highly recommended for entrepreneurs.",
  },
  {
    name: "Neha Singh",
    role: "Chartered Accountant",
    image: "/images/testimonials/user4.jpg",
    review:
      "Excellent business community where members genuinely support each other's business growth.",
  },
  {
    name: "Vikas Patel",
    role: "Manufacturer",
    image: "/images/testimonials/user5.jpg",
    review:
      "BBA expanded my business network and increased quality referrals consistently.",
  },
  {
    name: "Rohit Jain",
    role: "Insurance Advisor",
    image: "/images/testimonials/user6.jpg",
    review:
      "One of the best networking communities for professionals and business owners.",
  },
];

export default function Testimonials() {

  const getCards = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
  };

  const [cards, setCards] = useState(getCards());
  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const resize = () => {
      setCards(getCards());
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % testimonials.length
      );

    }, 4000);

    return () => clearInterval(timer);

  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const visible = [];

  for (let i = 0; i < cards; i++) {
    visible.push(
      testimonials[(current + i) % testimonials.length]
    );
  }

  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonial-container">

        <span className="section-tag">
          MEMBER TESTIMONIALS
        </span>

        <h2>What Our Members Say About BBA</h2>

        <p className="section-desc">
          Hear from entrepreneurs and professionals who have
          grown through Bharat Business Alliance.
        </p>

        <div className="testimonial-slider">

          <button
            className="slider-arrow left"
            onClick={prev}
          >
            <FaChevronLeft />
          </button>

          <div className="testimonial-row">

            {visible.map((item, index) => (

              <div
                className="testimonial-card"
                key={index}
              >

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="review">
                  {item.review}
                </p>

                <div className="client">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>{item.name}</h3>

                    <span>{item.role}</span>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <button
            className="slider-arrow right"
            onClick={next}
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="testimonial-dots">

          {testimonials.map((_, i) => (

            <button
              key={i}
              className={
                current === i
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrent(i)}
            />

          ))}

        </div>

        <button className="testimonial-btn">
          Explore All Testimonials
        </button>

      </div>

    </section>
  );
}