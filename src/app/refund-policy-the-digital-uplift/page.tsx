// app/refund-policy-the-digital-uplift/page.tsx

import { Metadata } from "next"
import { Handshake, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Refund Policy – The Digital Uplift",
  description:
    "Review our refund policy for custom web and mobile development services. We’re committed to fairness, clear communication, and resolving issues when they arise.",
  keywords: [
    "refund policy",
    "custom development refund",
    "service based refund",
    "The Digital Uplift terms",
    "web development policy",
    "project cancellation",
    "fair service guarantee",
    "Victoria BC web agency refund",
  ],
  openGraph: {
    title: "Refund Policy – The Digital Uplift",
    description:
      "Learn about our refund policy. The Digital Uplift focuses on fairness and transparency in every custom project we build.",
    url: "https://thedigitaluplift.ca/refund-policy-the-digital-uplift",
    type: "website",
    locale: "en_CA",
    siteName: "The Digital Uplift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy – The Digital Uplift",
    description:
      "We’re committed to fairness. See when partial or full refunds apply and how to reach us if you have concerns.",
    creator: "@thedigitaluplift",
  },
  alternates: {
    canonical: "https://thedigitaluplift.ca/refund-policy-the-digital-uplift",
  },
}

export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>

      {/* Services Over Products */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Services Over Products</h2>
        <p className="text-muted-foreground text-lg">
          At The Digital Uplift, we provide custom development services. We do not sell off-the-shelf products or templates.
          Each project is unique and requires time, planning, and skill to deliver based on the client’s specific needs.
        </p>
      </section>

      {/* Refund Approach */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Approach to Refunds</h2>
        <p className="text-muted-foreground text-lg mb-4">
          Because our work is service based, refunds are not typically part of our process once work has been delivered. However, we always aim to be fair and transparent. If there is ever a concern about what was delivered or how time was used, we are open to reviewing the situation.
        </p>
        <p className="font-medium mb-2">We may issue partial or full refunds in the following cases:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Work was not delivered at all</li>
          <li>There was a clear misalignment between what was promised and what was provided</li>
          <li>You cancel before any work has begun</li>
        </ul>
      </section>

      {/* Our Commitment */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Handshake className="size-5" />
          Our Commitment
        </h2>
        <p className="text-muted-foreground mb-4">
          We always:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Provide clear scope and pricing before work begins</li>
          <li>Keep you informed throughout the process</li>
          <li>Do our best to meet expectations and deliver quality work on time</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          If you feel something is off or not going as expected, talk to us. We will listen and work toward a fair resolution.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-lg font-medium mb-2">Get in Touch</p>
        <p className="text-muted-foreground mb-6">
          If you have questions about a payment or a project, please reach out directly:
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
