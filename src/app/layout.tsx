import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { BookingModalProvider } from "@/components/ui/BookingModalContext";
import BookingModal from "@/components/ui/BookingModal";
import ClientProviders from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedigitaluplift.ca"),
  title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
  description:
    "The Digital Uplift builds blazing-fast, elegant, and scalable React websites for Canadian small businesses. Optimized for SEO, conversions, and credibility.",
  manifest: "/manifest.json",
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
  alternates: { canonical: "https://www.thedigitaluplift.ca" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-006TGEC1M4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-006TGEC1M4');
          `}
        </Script>
      </head>
      <body
        className={`min-h-screen flex flex-col bg-background text-foreground antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* 👇 wrap everything in ClientProviders so Botpress mounts once per page */}
        <ClientProviders>
          <BookingModalProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BookingModal />
          </BookingModalProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
