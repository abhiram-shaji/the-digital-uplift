import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/ui/Footer";
import { BookingModalProvider } from "@/components/ui/BookingModalContext";
import BookingModal from "@/components/ui/BookingModal";

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
  title: "Affordable Web Design Canada | Custom Websites for $299 – The Digital Uplift",
  description:
    "Get a stunning custom website for just $299 CAD. The Digital Uplift helps Canadian small businesses build elegant, affordable websites with no fluff, just results.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // fallback for Apple devices, optional
  },
  openGraph: {
    title:
      "Design Custom React Websites starting at $299 | The Digital Uplift Canada",
    description:
      "Get an elegent custom website starting at $299 CAD. The Digital Uplift helps Canadian small businesses build elegant, affordable websites with no fluff, just results.",
    url: "https://www.thedigitaluplift.ca",
    siteName: "The Digital Uplift",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Affordable web design for Canadian small businesses",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Affordable Web Design Canada | Custom Websites for $299 – The Digital Uplift",
    description:
      "Get an elegent custom website starting at $299 CAD. The Digital Uplift helps Canadian small businesses build elegant, affordable websites with no fluff, just results.",
    images: [
      {
        url: "/hero-bg.png",
        alt: "Affordable web design for Canadian small businesses",
      },
    ],
  },
  alternates: {
    canonical: "https://www.thedigitaluplift.ca",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      
      <head>
        {/* Favicon */}
  <link rel="icon" href="/favicon.ico" type="image/png" />

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
        <BookingModalProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <BookingModal />
        </BookingModalProvider>
      </body>
    </html>
  );
}
