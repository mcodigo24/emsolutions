// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import TechnicalService from "./technical-service";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import Contact from "./contact";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <TechnicalService />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
