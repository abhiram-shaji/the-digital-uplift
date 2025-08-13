import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import Navbar from "@/components/ui/Navbar";
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
  title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
  description:
    "The Digital Uplift builds blazing-fast, elegant, and scalable React websites for Canadian small businesses. Optimized for SEO, conversions, and credibility.",

  // 👇 Add/replace this block
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/android-icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      // If you ship 512x512 for PWA splash/icons
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },

  // PWA/manifest
  manifest: "/manifest.json",

  // Windows tiles (meta tags)
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },

  openGraph: {
    title: "React Websites Built for Speed and Elegance | The Digital Uplift",
    description:
      "Launch a custom website built for speed, elegance, and scalability. The Digital Uplift empowers Canadian businesses with clean design and top-tier performance.",
    url: "https://www.thedigitaluplift.ca",
    siteName: "The Digital Uplift",
    images: [{ url: "/hero-bg.png", width: 1200, height: 630, alt: "High-performance web design for Canadian businesses" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegant High-Performance Web Design Canada | The Digital Uplift",
    description:
      "Build your brand online with a high-performance, elegantly designed React site. Scalable, SEO-optimized, and lightning fast.",
    images: [{ url: "/hero-bg.png", alt: "High-performance web design for Canadian businesses" }],
  },
  alternates: { canonical: "https://www.thedigitaluplift.ca" },
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

        {/* Botpress Webchat */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
          strategy="afterInteractive"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #webchat .bpWebchat {
                position: unset;
                width: 100%;
                height: 100%;
                max-height: 100%;
                max-width: 100%;
              }

              #webchat .bpFab {
                display: none;
              }
            `,
          }}
        />
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
        <div id="webchat" style={{ width: "500px", height: "500px" }} />
        <Script id="botpress-init" strategy="afterInteractive">
          {`
            window.botpress.on("webchat:ready", () => {
              window.botpress.open();
            });
            window.botpress.init({
              "botId": "26b654a9-e4a4-47df-8a68-245f0712f142",
              "configuration": {
                "version": "v1",
                "botName": "Digital Uplift Assistant",
                "botAvatar": "https://files.bpcontent.cloud/2025/08/13/04/20250813040535-V0RE6LT2.png",
                "botDescription": "I can assist you with information about The Digital Uplift's web design services, company details, and general inquiries.",
                "website": {
                  "title": "Website",
                  "link": "https://www.thedigitaluplift.ca"
                },
                "email": {},
                "phone": {},
                "termsOfService": {},
                "privacyPolicy": {},
                "color": "#3B82F6",
                "variant": "solid",
                "headerVariant": "glass",
                "themeMode": "dark",
                "fontFamily": "inter",
                "radius": 3,
                "feedbackEnabled": true,
                "footer": "[⚡ by Botpress](https://botpress.com/?from=webchat)"
              },
              "clientId": "bbd2623c-885d-43ea-be09-3622056ccc0c",
              "selector": "#webchat"
            });
          `}
        </Script>
      </body>
    </html>
  );
}
