// app/locations-the-digital-uplift/page.tsx

import { Metadata } from "next"
import { Building2, MapPin, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Locations We Serve – The Digital Uplift | Canada & North America",
  description:
    "The Digital Uplift is based in Victoria, BC and proudly serves clients across all major cities in Canada and North America. We build websites, apps, and digital solutions no matter where you're located.",
  keywords: [
    "Victoria web development",
    "Canada web development",
    "North America digital agency",
    "Toronto web design",
    "New York app development",
    "Los Angeles web agency",
    "remote web development",
    "cross-border web services",
    "digital uplift locations",
  ],
  openGraph: {
    title: "Locations We Serve – The Digital Uplift",
    description:
      "Proudly serving businesses across Victoria BC, Canada, and all of North America. Discover if we serve your city.",
    url: "https://thedigitaluplift.com/locations-the-digital-uplift",
    type: "website",
    locale: "en_CA",
    siteName: "The Digital Uplift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations – The Digital Uplift",
    description:
      "Based in Victoria, BC and serving all of Canada and North America with premium web and mobile development.",
    creator: "@thedigitaluplift",
  },
  alternates: {
    canonical: "https://thedigitaluplift.com/locations-the-digital-uplift",
  },
}

export default function LocationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="flex items-center gap-3 mb-2 text-muted-foreground">
        <MapPin className="size-5" />
        <span>We’re based in Victoria, BC</span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Locations We Serve</h1>
      <p className="text-lg mb-10 text-muted-foreground">
        The Digital Uplift proudly serves clients across <strong>Canada</strong> and the <strong>United States</strong>. While we call Victoria, BC our home, we work with businesses and entrepreneurs across all major North American cities — fully remote, always responsive.
      </p>

      {/* Canada */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Building2 className="size-5" />
          Major Canadian Cities
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-muted-foreground">
          <li>Victoria, BC</li>
          <li>Vancouver, BC</li>
          <li>Calgary, AB</li>
          <li>Edmonton, AB</li>
          <li>Regina, SK</li>
          <li>Winnipeg, MB</li>
          <li>Toronto, ON</li>
          <li>Ottawa, ON</li>
          <li>Mississauga, ON</li>
          <li>Montreal, QC</li>
          <li>Quebec City, QC</li>
          <li>Halifax, NS</li>
          <li>Fredericton, NB</li>
          <li>St. John’s, NL</li>
        </ul>
      </div>

      {/* North America */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Building2 className="size-5" />
          Major North American Cities
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-muted-foreground">
          <li>New York City, NY</li>
          <li>Los Angeles, CA</li>
          <li>San Francisco, CA</li>
          <li>Chicago, IL</li>
          <li>Austin, TX</li>
          <li>Dallas, TX</li>
          <li>Houston, TX</li>
          <li>Seattle, WA</li>
          <li>Boston, MA</li>
          <li>Atlanta, GA</li>
          <li>Miami, FL</li>
          <li>Denver, CO</li>
          <li>Phoenix, AZ</li>
          <li>Las Vegas, NV</li>
          <li>Washington, DC</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-lg font-medium mb-4">
          Not seeing your city? We still likely serve your area.
        </p>
        <Button asChild variant="outline">
          <Link href="/contact" className="inline-flex items-center gap-2">
            Let’s talk about your location
            <MoveRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
