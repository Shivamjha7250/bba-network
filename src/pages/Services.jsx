import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import ServicesGrid from "../components/services/ServicesGrid";
import WhyChooseServices from "../components/services/WhyChooseServices";
import ServiceProcess from "../components/services/ServiceProcess";

import CTA from "../components/home/CTA";

function Services() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Services"
        subtitle="Professional business networking and growth solutions designed to help entrepreneurs, professionals and business owners succeed."
      />

      <ServicesGrid />

      <WhyChooseServices />

      <ServiceProcess />

      <CTA />

      <Footer />
    </>
  );
}

export default Services;