// app/faq-the-digital-uplift/page.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ – The Digital Uplift | Frequently Asked Questions",
  description:
    "Answers to the most common questions about our web and mobile development process, timelines, CMS integration, SEO, and post-launch support.",
  keywords: [
    "FAQ",
    "The Digital Uplift",
    "web development",
    "mobile app development",
    "Next.js",
    "headless CMS",
    "custom websites",
    "ecommerce",
    "SEO support",
    "post launch support",
    "frontend",
    "backend",
  ],
  openGraph: {
    title: "FAQ – The Digital Uplift",
    description:
      "Learn about our development process, tools, timeline, support, and more at The Digital Uplift.",
    url: "https://thedigitaluplift.com/faq-the-digital-uplift",
    type: "website",
    locale: "en_CA",
    siteName: "The Digital Uplift",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ – The Digital Uplift",
    description:
      "Answers to common questions about our development services, tech stack, CMS, and post-launch support.",
    creator: "@thedigitaluplift", // Change if you have a real handle
  },
  alternates: {
    canonical: "https://thedigitaluplift.ca/faq-the-digital-uplift",
  },
}

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-10 text-lg">
        We understand that hiring a web developer or digital product team comes with important questions.
        Below are answers to the most common topics our clients ask about before we begin working together.
      </p>

      {/* GENERAL */}
      <h2 className="text-2xl font-semibold mb-4 mt-10">General</h2>
      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="general-1">
          <AccordionTrigger>How do we get started?</AccordionTrigger>
          <AccordionContent>
            You can begin by booking a free strategy session. We will talk about your goals, outline your needs, and give you a clear understanding of the process, timeline, and cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="general-2">
          <AccordionTrigger>Do you work with clients internationally?</AccordionTrigger>
          <AccordionContent>
            Yes. We work with clients from all over the world and adjust our communication and scheduling based on your time zone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="general-3">
          <AccordionTrigger>Can I hire you for a small project or a single landing page?</AccordionTrigger>
          <AccordionContent>
            Yes. We accept projects of all sizes, including quick-turnaround landing pages, small-scale builds, and minimum viable products.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* DEVELOPMENT */}
      <h2 className="text-2xl font-semibold mb-4 mt-10">Development</h2>
      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="dev-1">
          <AccordionTrigger>Do you use templates or WordPress?</AccordionTrigger>
          <AccordionContent>
            No. We build everything from the ground up using modern tools like Next.js and React. This gives you better performance, more flexibility, and full control.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="dev-2">
          <AccordionTrigger>How long does development usually take?</AccordionTrigger>
          <AccordionContent>
            Most projects are completed within two to four weeks. Simpler websites can be finished sooner, and larger or more complex builds may take longer. We always give you a clear and realistic timeline at the start.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="dev-3">
          <AccordionTrigger>What makes your websites load and launch so fast?</AccordionTrigger>
          <AccordionContent>
            We use clean code, minimal dependencies, and a performance-first approach. This allows for both faster development and lightning-fast site performance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* FEATURES */}
      <h2 className="text-2xl font-semibold mb-4 mt-10">Features and Functionality</h2>
      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="feat-1">
          <AccordionTrigger>Can I update content myself after launch?</AccordionTrigger>
          <AccordionContent>
            Yes. We set up headless content management systems such as Sanity, Contentful, or Strapi. These give you an easy way to manage content without needing a developer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="feat-2">
          <AccordionTrigger>Do you offer mobile app development?</AccordionTrigger>
          <AccordionContent>
            Yes. We build cross-platform mobile apps designed to be fast, user-friendly, and built for long-term growth.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="feat-3">
          <AccordionTrigger>Can I sell products through the website you build?</AccordionTrigger>
          <AccordionContent>
            Yes. We develop custom online stores with fast-loading product pages, easy-to-use shopping carts, and secure checkout experiences.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* POST LAUNCH */}
      <h2 className="text-2xl font-semibold mb-4 mt-10">Post Launch</h2>
      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="post-1">
          <AccordionTrigger>Do you offer ongoing support or maintenance?</AccordionTrigger>
          <AccordionContent>
            Yes. We offer support after launch to help with fixes, updates, or improvements. We also provide longer-term support plans if you need them.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="post-2">
          <AccordionTrigger>Can you help with SEO and performance tuning?</AccordionTrigger>
          <AccordionContent>
            Absolutely. All our projects are optimized for search engines and speed by default. If you need extra help with SEO or analytics, we can provide that too.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="post-3">
          <AccordionTrigger>What if I need changes later on?</AccordionTrigger>
          <AccordionContent>
            You can always reach out for updates, upgrades, or new features. We are available for continued work after launch.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-lg font-medium mb-4">Still have questions?</p>
        <Button asChild variant="outline">
          <Link href="/contact" className="inline-flex items-center gap-2">
            Book a free strategy session
            <MoveRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
