import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import SampleWorksSection from "@/components/sections/SampleWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedigitaluplift.ca"),
  title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
  description:
    "Discover The Digital Uplift — your partner for blazing-fast, elegantly designed, and fully scalable React websites built for Canadian small businesses. From custom development to mobile-friendly design, SEO optimization, and clear calls to action, we craft digital experiences that load instantly, engage visitors, and drive measurable growth.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Legacy fallback
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
    title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
    description:
      "Partner with The Digital Uplift for blazing-fast, elegantly designed, and scalable React websites tailored to Canadian small businesses. Optimized for SEO, conversions, and growth, our sites deliver speed, style, and results.",
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
      "Blazing-fast, elegant, and scalable React websites for Canadian small businesses - designed for performance, usability, and measurable growth.",
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
        <AboutSection />
        <SampleWorksSection />
        <FaqSection />
      </main>
    </>
  );
}
