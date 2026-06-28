import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WhyChoose from "../components/home/WhyChoose";
import WhyBecomeMember from "../components/home/WhyBecomeMember";
import Categories from "../components/home/Categories";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <WhyChoose />

      <WhyBecomeMember />

      <Categories />

      <Process />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}

export default Home;