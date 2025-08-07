// app/pricing-the-digital-uplift/page.tsx

import { Metadata } from "next"
import { DollarSign, ListChecks, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing – The Digital Uplift | Transparent Rates & Project Quotes",
  description:
    "Our pricing is based on the average React developer rate in BC. We offer hourly rates and structured project-based pricing with clear deliverables, timelines, and fixed estimates.",
  keywords: [
    "React developer hourly rate Canada",
    "web development pricing",
    "Victoria BC development rates",
    "project-based pricing",
    "custom website quote",
    "fixed cost web development",
    "transparent web pricing",
    "digital agency BC",
  ],
  openGraph: {
    title: "Pricing – The Digital Uplift",
    description:
      "See how we price web and mobile app projects. Based in Victoria, BC, we offer clear hourly rates and project-based pricing with deliverables, timelines, and fixed quotes.",
    url: "https://thedigitaluplift.ca/pricing-the-digital-uplift",
    type: "website",
    locale: "en_CA",
    siteName: "The Digital Uplift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing – The Digital Uplift",
    description:
      "Get a quote for your next web or app project. Transparent hourly rates and project-based pricing from Victoria-based developers.",
    creator: "@thedigitaluplift", // change if needed
  },
  alternates: {
    canonical: "https://thedigitaluplift.ca/pricing-the-digital-uplift",
  },
}

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>

      {/* Hourly */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <DollarSign className="size-5" />
          Hourly Rate (Baseline)
        </h2>
        <p className="text-muted-foreground text-lg">
          Our standard rate is based on the average hourly pay for a React Developer in British Columbia, which is approximately <strong>52$ per hour</strong>. This gives you a transparent starting point for budgeting your project. <br />
          <span className="text-sm text-muted-foreground">(Source: ziprecruiter.com)</span>
        </p>
      </div>

      {/* Project Based */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <ListChecks className="size-5" />
          Project Based Pricing
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          For larger or more complex projects, we offer structured project pricing. This allows us to define the scope clearly, streamline delivery, and maximize value for your budget.
        </p>
        <p className="font-medium mb-2">Every proposal includes:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Clear project objectives and defined deliverables</li>
          <li>A timeline that fits your business goals</li>
          <li>A fixed price estimate designed for efficiency and quality</li>
        </ul>
      </div>

      {/* Why This Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why This Works for You</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>
            <strong>Faster Delivery with Lower Cost:</strong> We prioritize speed and accuracy to reduce the time needed without sacrificing quality.
          </li>
          <li>
            <strong>High Quality Results:</strong> All builds are crafted with a focus on performance, scalability, and industry best practices.
          </li>
          <li>
            <strong>Flexible Budget Options:</strong> Whether you have a set budget or want to scale over time, we will create a plan that maximizes your return on investment.
          </li>
        </ul>
      </div>

      {/* How to Get a Quote */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How to Get a Quote</h2>
        <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
          <li>Contact us with your project goals or fill out our quick briefing form</li>
          <li>We will provide a detailed estimate or hourly breakdown tailored to your needs</li>
          <li>Together, we will align on scope, timeline, and final cost</li>
        </ol>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-lg font-medium mb-4">Let’s Build Something Better</p>
        <p className="text-muted-foreground mb-6">
          Ready to launch something fast, scalable, and built with precision?
          Book a free quote or send us your project outline, we’ll take care of the rest.
        </p>
        <Button asChild variant="outline">
          <Link href="/contact-the-digital-uplift" className="inline-flex items-center gap-2">
            Get a Free Quote
            <MoveRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
