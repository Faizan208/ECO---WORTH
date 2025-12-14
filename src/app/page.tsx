import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import MarketplacePreview from "@/components/landing/MarketplacePreview";
import Pricing from "@/components/landing/Pricing";
import TechStack from "@/components/landing/TechStack";
import Roadmap from "@/components/landing/Roadmap";
import Team from "@/components/landing/Team";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <MarketplacePreview />
        <Pricing />
        <TechStack />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
