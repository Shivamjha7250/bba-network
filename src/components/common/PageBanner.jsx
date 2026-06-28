import "../../styles/pageBanner.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function PageBanner({
  title,
  subtitle,
  image = "/images/banner/page-banner.png",
}) {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,28,58,.82), rgba(8,28,58,.82)),
          url(${image})
        `,
      }}
    >
      <div className="page-banner-content">

        

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

      <div className="breadcrumb-box">

        <Link to="/">
          <FaHome />
          <span>Home</span>
        </Link>

        <span className="breadcrumb-separator">›</span>

        <span className="breadcrumb-current">
          {title}
        </span>

      </div>

    </section>
  );
}

export default PageBanner;