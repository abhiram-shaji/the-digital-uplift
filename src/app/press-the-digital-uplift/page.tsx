// app/press-the-digital-uplift/page.tsx

import { Metadata } from "next"
import { Megaphone, Mail, FileDown, User2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Press & Media – The Digital Uplift",
  description:
    "Press and media resources for The Digital Uplift. Learn more about our mission, services, and how to request interviews, logos, or brand assets.",
  keywords: [
    "press kit",
    "media resources",
    "The Digital Uplift",
    "web development studio Canada",
    "mobile app development",
    "interview requests",
    "brand assets",
    "founder info",
    "logos",
  ],
  openGraph: {
    title: "Press & Media – The Digital Uplift",
    description:
      "Access press kits, quick facts, brand assets, and media contact for The Digital Uplift, a fast-moving digital studio based in Canada.",
    url: "https://thedigitaluplift.ca/press-the-digital-uplift",
    type: "website",
    locale: "en_CA",
    siteName: "The Digital Uplift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press – The Digital Uplift",
    description:
      "Learn about The Digital Uplift and access our press kit, brand resources, and founder information.",
    creator: "@thedigitaluplift",
  },
  alternates: {
    canonical: "https://thedigitaluplift.ca/press-the-digital-uplift",
  },
}

export default function PressPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Press and Media</h1>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">About The Digital Uplift</h2>
        <p className="text-muted-foreground text-lg">
          The Digital Uplift is a performance-focused digital development studio that builds high-speed, scalable websites and mobile applications.
          We create fully custom digital products that consistently score top marks in SEO, accessibility, and best practices.
          We deliver faster than traditional agencies while maintaining the highest quality.
        </p>
        <p className="text-muted-foreground mt-4">
          We believe in lean, modern builds that give businesses the speed and flexibility they need to grow. Everything we ship is crafted for long-term success and built with clean, intentional architecture.
        </p>
      </section>

      {/* Media Inquiries */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Mail className="size-5" />
          Media Inquiries
        </h2>
        <p className="text-muted-foreground">
          For interviews, quotes, collaborations, or speaking requests, please reach out to:
        </p>
        <p className="mt-2 text-lg font-medium">Email: <a href="mailto:write4abhiram@gmail.com" className="underline">write4abhiram@gmail.com</a></p>
        <p className="text-muted-foreground text-sm">Typical response time: Within twenty-four hours</p>
      </section>

      {/* Quick Facts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <User2 className="size-5" />
          Quick Facts
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Founded: [Year You Started]</li>
          <li>Founder: [Your Name]</li>
          <li>Location: Remote, based in [City, Province or Country]</li>
          <li>Core Services:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Custom website development</li>
              <li>E-commerce frontend builds</li>
              <li>Mobile application development</li>
              <li>Headless content management integration</li>
              <li>Landing page design and delivery</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Press Kit */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <FileDown className="size-5" />
          Press Resources
        </h2>
        <p className="text-muted-foreground mb-4">
          You can download official logos, screenshots, and other press-ready visuals here.
        </p>
        <Button variant="outline" asChild>
          <Link href="https://drive.google.com/file/d/12-8buNmKPz5vvIu-TMpgntEZA_92Boiu/view?usp=sharing" download>
            Download Press Kit
          </Link>
        </Button>
      </section>

      {/* Recent Mentions */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Megaphone className="size-5" />
          Recent Mentions
        </h2>
        <p className="text-muted-foreground">
          We are actively building. Press features and interviews will be added here as they go live.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-lg font-medium mb-4">Want to Connect?</p>
        <p className="text-muted-foreground mb-6">
          We are available for insight, commentary, and interviews about web development, mobile apps, and building digital products with speed and clarity.
        </p>
        <Button asChild variant="outline">
          <Link href="mailto:write4abhiram@gmail.com" className="inline-flex items-center gap-2">
            Contact Us
            <Mail className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
