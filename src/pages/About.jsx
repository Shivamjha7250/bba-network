import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import AboutCompany from "../components/about-us/AboutCompany";
import MissionVision from "../components/about-us/MissionVision";
import Journey from "../components/about-us/Journey";
import Leadership from "../components/about-us/Leadership";
import Achievements from "../components/about-us/Achievements";
import CTA from "../components/home/CTA";

function About() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="About Us"
        subtitle="Learn more about Bharat Business Alliance and our mission to connect businesses across India."
      />

      <AboutCompany />
      <MissionVision />
      <Journey />
      <Leadership />
      <Achievements />
      <CTA />

      <Footer />
    </>
  );
}

export default About;