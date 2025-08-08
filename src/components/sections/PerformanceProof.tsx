import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gauge } from "lucide-react";

export default function PerformanceProof() {
  return (
    <section className="mx-auto max-w-6xl ">
      <div className="grid gap-10 md:grid-cols-2 pt-8 items-center border-t border-gray-200">
        {/* Left: Story */}
        <div>
          <Badge className="mb-4">Proof Over Promises</Badge>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Unmatched Speed Test Results
          </h2>
          <p className="mt-4 text-muted-foreground">
            PageSpeed Insights doesn’t lie. Achieving a perfect 100 across
            Performance, Accessibility, Best Practices, and SEO is rare,
            especially on real business websites with live integrations.
            We’ve done it, and we can do it for you.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pagespeed-insights-100-canadian-web-development">
              <Button>Learn more about performance</Button>
            </Link>
            <Link
              href="https://pagespeed.web.dev/analysis/https-www-thedigitaluplift-ca/h94yt52522?form_factor=desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                View public test <Gauge className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Report image (no Card) */}
        <div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/pagespeed-insights-100.png"
              alt="Perfect 100 PageSpeed Insights score for The Digital Uplift"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
