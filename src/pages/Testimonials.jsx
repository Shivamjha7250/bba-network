import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";

import CTA from "../components/home/CTA";

function Testimonials() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Testimonials"
        subtitle="Read what our members say about Bharat Business Alliance."
      />

      <TestimonialsGrid />

      <CTA />

      <Footer />
    </>
  );
}

export default Testimonials;