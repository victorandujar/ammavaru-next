import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import MethodologySection from "../components/MethodologySection/MethodologySection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

const Home = (): React.ReactElement => {
  return (
    <div className="flex w-3/4 flex-col gap-40">
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
