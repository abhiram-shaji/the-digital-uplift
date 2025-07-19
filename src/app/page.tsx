import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import SampleWorksSection from "@/components/sections/SampleWorksSection";
import WhyChooseReact from "@/components/sections/WhyChooseReact";

export default function Home() {
  return (
    <main>
      <WhyChooseReact />
      <ServicesSection />
      <AboutSection />
      <SampleWorksSection />
    </main>
  );
}
