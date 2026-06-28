import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import OfficeHours from "../components/contact/OfficeHours";

import CTA from "../components/home/CTA";

function Contact() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with Bharat Business Alliance. We're here to help you grow your business through networking and collaboration."
      />

      <ContactInfo />

      <ContactForm />

      <OfficeHours />

      <CTA />

      <Footer />
    </>
  );
}

export default Contact;