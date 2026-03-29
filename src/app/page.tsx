import Navbar from "@/components/layout/Navbar";
import ScrollObserver from "@/components/layout/ScrollObserver";
import HeroSection from "@/components/sections/HeroSection";
import HotTopicsSection from "@/components/sections/HotTopicsSection";
import AboutSection from "@/components/sections/AboutSection";
import InsightsSection from "@/components/sections/InsightsSection";

export default function HomePage() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main>
        <HeroSection />
        <HotTopicsSection />
        <AboutSection />
        <InsightsSection />
      </main>
    </>
  );
}
