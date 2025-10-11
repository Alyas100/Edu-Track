import Features from "../../components/landing-page/Features";
import Hero from "../../components/landing-page/Hero";
import HowItWorks from "../../components/landing-page/HowItWorks";
import Navbar from "../../components/landing-page/Navbar";
import Testimonials from "../../components/landing-page/Testimonials";

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
