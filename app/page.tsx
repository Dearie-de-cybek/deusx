import Navbar from "../app/components/layout/Navbar";
import Hero from "../app/components/sections/Hero";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <main className="relative bg-brand-bg">
      <Navbar />
      <Hero />
      <Services />
      {/* Future sections (Work, Services) go here */}
      <div className="h-screen" /> {/* Spacer for scroll testing */}
    </main>
  );
}