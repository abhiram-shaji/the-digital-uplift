import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import SampleWorksSection from "@/components/sections/SampleWorksSection";
import WhyChooseReact from "@/components/sections/WhyChooseReact";
import ArticleTilesSection from "@/components/sections/ArticleTilesSection";

export default function Home() {
  return (
    <>
      <Hero /> {/* NOT wrapped in <main>, so it doesn’t inherit max-width or padding */}
      <main className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <WhyChooseReact />
        <ServicesSection />
        <AboutSection />
        <SampleWorksSection />
        <ArticleTilesSection />
        
      </main>
    </>
  );
}
