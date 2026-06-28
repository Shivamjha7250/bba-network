import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import AboutCompany from "../components/about/AboutCompany";

function About() {
  return (
    <>

      <Navbar />

      <PageBanner
        title="About Us"
        subtitle="Learn more about Bharat Business Alliance and our mission to connect, support and grow businesses across India."
      />

      <AboutCompany />

      <Footer />

    </>
  );
}

export default About;