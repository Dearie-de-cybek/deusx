import ServicesHero from "../components/sections/services/ServicesHero";
import CoreServicesGrid from "../components/sections/services/CoreServicesGrid";
import FeatureBreakdown from "../components/sections/services/FeatureBreakdown";
import TechStackGrid from "../components/sections/services/TechStackGrid";
import ProcessMini from "../components/sections/services/ProcessMini";
import CTASection from "../components/sections/services/CTASection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ServicesPage() {
  return (
    <main className="relative bg-white">
        <Navbar />
      <ServicesHero />
      <CoreServicesGrid />
      <FeatureBreakdown />
      <TechStackGrid />
      <ProcessMini />
      <div className="pb-24">
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}