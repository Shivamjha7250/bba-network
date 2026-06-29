import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/membership" element={<Membership />} />

      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default App;