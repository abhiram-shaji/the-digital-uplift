import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import SampleWorksSection from "@/components/sections/SampleWorksSection";
import WhyChooseReact from "@/components/sections/WhyChooseReact";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedigitaluplift.ca"),
  title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
  description:
    "The Digital Uplift builds blazing-fast, elegant, and scalable React websites for Canadian small businesses. Optimized for SEO, conversions, and credibility.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Fallback for legacy browsers
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "React Websites Built for Speed and Elegance | The Digital Uplift",
    description:
      "Launch a custom website built for speed, elegance, and scalability. The Digital Uplift empowers Canadian businesses with clean design and top-tier performance.",
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
      "Build your brand online with a high-performance, elegantly designed React site. Scalable, SEO-optimized, and lightning fast.",
    images: [
      {
        url: "/hero-bg.png",
        alt: "High-performance web design for Canadian businesses",
      },
    ],
  },
  alternates: {
    canonical: "https://www.thedigitaluplift.ca",
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
