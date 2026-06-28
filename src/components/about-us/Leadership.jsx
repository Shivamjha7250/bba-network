import "../../styles/leadership.css";
import {
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function Leadership() {
  const leaders = [
    
   
    {
      name: "Ashish Shukla",
      position: "Founder & President",
      image: "/images/about/founder.jpg",
      description:
        "Leading Bharat Business Alliance with a vision to connect entrepreneurs, professionals and businesses across India.",
    },
    
  ];

  return (
    <section className="leadership">

      <div className="leadership-container">

        <div className="section-title">

          <span>OUR LEADERSHIP</span>

          <h2>Meet Our Leadership Team</h2>

          <p>
            Our experienced leadership team is dedicated to helping
            entrepreneurs and professionals grow through trusted
            business networking.
          </p>

        </div>

        <div className="leadership-grid">

          {leaders.map((leader, index) => (

            <div className="leader-card" key={index}>

              <img
                src={leader.image}
                alt={leader.name}
                className="leader-image"
              />

              <div className="leader-content">

                <h3>{leader.name}</h3>

                <h4>{leader.position}</h4>

                <p>{leader.description}</p>

                <div className="leader-social">

                  <a href="#">
                    <FaLinkedinIn />
                  </a>

                  <a href="#">
                    <FaEnvelope />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Leadership;