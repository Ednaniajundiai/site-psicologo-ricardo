import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Methodology from "@/components/Methodology";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Methodology />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}