import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Our Sites Score 100 in SEO and Accessibility – The Digital Uplift",
  description:
    "Discover the practices that help our builds earn perfect SEO and accessibility scores, from semantic HTML to blazing-fast performance.",
  openGraph: {
    title: "Why Our Sites Score 100 in SEO and Accessibility",
    description:
      "Learn how The Digital Uplift delivers websites that achieve perfect SEO and accessibility marks for Canadian businesses.",
    url: "https://www.thedigitaluplift.ca/why-our-sites-score-100-in-seo-and-accessibility",
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
    title: "Why Our Sites Score 100 in SEO and Accessibility",
    description:
      "See the development choices that power our perfect SEO and accessibility scores.",
    images: [
      {
        url: "/hero-bg.png",
        alt: "High-performance web design for Canadian businesses",
      },
    ],
  },
};

export default function Page() {
  return <div>why our sites score 100 in seo and accessibility</div>;
}
