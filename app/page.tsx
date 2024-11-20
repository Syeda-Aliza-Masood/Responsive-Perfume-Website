import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import SaleSection from "./components/SaleSection";
export default function home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SaleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
