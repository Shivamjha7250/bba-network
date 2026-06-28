import { useEffect, useState } from "react";
import "../../styles/hero.css";

const banners = [
  "/images/hero/banner1.png",
  "/images/hero/banner2.png",
  "/images/hero/banner3.png",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      <div className="slider">

        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Bharat Business Alliance Banner ${index + 1}`}
            className={`slide ${index === current ? "active" : ""}`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}

      </div>

      <div className="dots">

        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;