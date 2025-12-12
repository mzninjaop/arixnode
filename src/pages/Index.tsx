import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Rewards from "@/components/Rewards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Rewards />
      <Footer />
    </div>
  );
};

export default Index;
