import Navbar from "../app/components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./landing/HomePage";


export default function Home() {
  return (
    <main className="relative bg-brand-bg">
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}