import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import SampleWorksSection from "@/components/sections/SampleWorksSection";
import WhyChooseReact from "@/components/sections/WhyChooseReact";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
  description:
    "Blazing-fast, elegantly crafted React websites for Canadian small businesses. SEO optimized, mobile responsive, and designed to convert.",
  openGraph: {
    title: "React Websites Built for Speed and Elegance | The Digital Uplift",
    description:
      "Build a polished, high-performance online presence. Clean design, SEO-ready code, and faster load times with The Digital Uplift.",
    url: "https://www.thedigitaluplift.ca",
    siteName: "The Digital Uplift",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "High-performance web design for Canadian businesses",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
    description:
      "Custom React websites for Canadian small businesses. Speed, elegance, and results without the agency markup.",
    images: [
      {
        url: "/hero-bg.png",
        alt: "High-performance web design for Canadian businesses",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <main className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <ServicesSection />
        <WhyChooseReact />
        <AboutSection />
        <SampleWorksSection />
        <FaqSection />
      </main>
    </>
  );
}
