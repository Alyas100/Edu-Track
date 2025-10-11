import Navbar from "../../components/landing_page/Navbar";
import Hero from "../../components/landing_page/Hero";
import Features from "../../components/landing_page/Features";
import HowItWorks from "../../components/landing_page/HowItWorks";
import Testimonials from "../../components/landing_page/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}
