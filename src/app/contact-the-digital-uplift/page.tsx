// app/contact-the-digital-uplift/page.tsx

import { Button } from "@/components/ui/button"
import { Globe, Linkedin, Mail, MoveRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us – The Digital Uplift",
  description:
    "Get in touch with The Digital Uplift for quotes, collaboration, or project discussions. Contact founder Abhiram directly or reach out via email or LinkedIn.",
  keywords: [
    "contact The Digital Uplift",
    "web development inquiries",
    "Victoria BC web agency",
    "mobile app consultation",
    "contact Abhiram Kace",
    "free strategy session",
    "custom website quote",
    "digital agency contact",
  ],
  openGraph: {
    title: "Contact – The Digital Uplift",
    description:
      "Connect with The Digital Uplift for custom builds, quotes, and collaboration. Reach our founder Abhiram directly.",
    url: "https://thedigitaluplift.ca/contact-the-digital-uplift",
    type: "website",
    locale: "en_CA",
    siteName: "The Digital Uplift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – The Digital Uplift",
    description:
      "Get in touch with our team or founder Abhiram Kace. Schedule a free strategy session or send a direct inquiry.",
    creator: "@thedigitaluplift",
  },
  alternates: {
    canonical: "https://thedigitaluplift.ca/contact-the-digital-uplift",
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      {/* Let’s Talk */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Let’s Talk</h2>
        <p className="text-muted-foreground text-lg">
          Whether you have a project in mind, need a quote, or simply want to explore how we can work together, we would love to hear from you.
          The Digital Uplift is open to new ideas, custom builds, and collaborative partnerships.
        </p>
        <p className="text-muted-foreground mt-4">
          We respond quickly, communicate clearly, and work with focus to deliver results that make a real difference.
        </p>
      </section>

      {/* General Inquiries */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">General Inquiries</h2>
        <p className="text-muted-foreground mb-2">Have questions or want to talk about your project?</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail className="size-4" />
            <a href="mailto:write4abhiram@gmail.com" className="underline">write4abhiram@gmail.com</a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="size-4" />
            <a href="https://www.linkedin.com/company/the-digital-uplift" target="_blank" rel="noopener noreferrer" className="underline">
              The Digital Uplift on LinkedIn
            </a>
          </li>
        </ul>
      </section>

      {/* Founder Contact */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Connect with the Founder</h2>
        <p className="text-muted-foreground mb-2">
          Abhiram is the founder and lead developer behind The Digital Uplift. For consulting, collaboration, or quotes, connect directly:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail className="size-4" />
            <a href="mailto:write4abhiram@gmail.com" className="underline">write4abhiram@gmail.com</a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="size-4" />
            <a href="https://www.linkedin.com/in/abhiram-kace" target="_blank" rel="noopener noreferrer" className="underline">
              Abhiram Kace
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="size-4" />
            <a href="https://www.worksofabhiram.com/" target="_blank" rel="noopener noreferrer" className="underline">
              www.worksofabhiram.com
            </a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-lg font-medium mb-4">Ready to Start</p>
        <p className="text-muted-foreground mb-6">
          If you already know what you need, or just want to move fast, we’re ready when you are.
          Tell us about your project and we’ll help you launch it with precision, speed, and care.
        </p>
        <Button asChild variant="outline">
          <Link href="mailto:write4abhiram@gmail.com" className="inline-flex items-center gap-2">
            Book a Free Strategy Session
            <MoveRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
