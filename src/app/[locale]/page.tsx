"use client";

import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import MethodologySection from "../components/MethodologySection/MethodologySection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { useScrollContext } from "../contexts/ScrollContext";

const Home = (): React.ReactElement => {
  const { sectionRefs } = useScrollContext();

  return (
    <div className="flex w-3/4 flex-col mobile:w-screen mobile:gap-24 pt-32">
      <HeroSection />
      <AboutSection />
      <div ref={sectionRefs.method}>
        <MethodologySection />
      </div>
      <div ref={sectionRefs.services} className="h-fit">
        <ServicesSection />
      </div>
      <div ref={sectionRefs.contact}>
        {/* Aquí podrías tener un componente para Contact */}
        <h2>Contact Section</h2>
      </div>
    </div>
  );
};

export default Home;
