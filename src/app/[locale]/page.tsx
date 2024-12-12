import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import MethodologySection from "../components/MethodologySection/MethodologySection";

export default function Home() {
  return (
    <div className="flex w-3/4 flex-col gap-40">
      <HeroSection />
      <AboutSection />
      <MethodologySection />
    </div>
  );
}
