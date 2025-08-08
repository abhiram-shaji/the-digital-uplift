import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ExternalLink, Gauge } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Perfect Lighthouse 100 for Canadian Small Businesses | The Digital Uplift",
  description:
    "Proven Lighthouse 100 across Performance Accessibility Best Practices and SEO. Research backed rarity plus live PageSpeed proof. Serving Victoria BC and Canada wide.",
  keywords: [
    "lighthouse 100 canada",
    "pagespeed insights 100 developer",
    "core web vitals optimization canada",
    "victoria bc web developer",
    "react nextjs tailwind shadcn",
    "canadian small business websites fast seo friendly",
  ],
  alternates: {
    canonical: "https://www.thedigitaluplift.ca/pagespeed-insights-100-canadian-web-development",
  },
  openGraph: {
    title: "Perfect Lighthouse 100 | Research backed proof for small business websites",
    description:
      "Independent research shows perfect 100 is extremely rare. See our live PageSpeed report and what it proves about our engineering.",
    url: "https://www.thedigitaluplift.ca/pagespeed-insights-100-canadian-web-development",
    siteName: "The Digital Uplift",
    images: [
      {
        url: "/pagespeed-insights-100.png",
        width: 1200,
        height: 630,
        alt: "PageSpeed Insights 100 performance report screenshot",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main className="mt-20">
      {/* JSON-LD for SEO */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "The Digital Uplift",
            url: "https://www.thedigitaluplift.ca/",
            areaServed: "CA",
            sameAs: ["https://www.thedigitaluplift.ca/"],
            description:
              "Canadian small business web development in React with perfect Lighthouse 100 and Core Web Vitals optimization.",
            brand: { "@type": "Brand", name: "The Digital Uplift" },
            serviceType:
              "High performance React website development and Core Web Vitals optimization for Canadian small businesses",
            knowsAbout: [
              "Lighthouse 10",
              "PageSpeed Insights",
              "Core Web Vitals",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Accessibility WCAG",
              "SEO technical"
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Badge className="mb-4">PageSpeed Insights 100 Proof</Badge>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Canadian small business web development with a proven PageSpeed Insights 100 score
            </h1>
            <p className="mt-4 text-muted-foreground">
              We engineer React and Tailwind websites that load fast rank higher and convert better. Built with accessibility best practices and Core Web Vitals at the center.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="https://pagespeed.web.dev/analysis/https-www-thedigitaluplift-ca/h94yt52522?form_factor=desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button aria-label="View the desktop PageSpeed Insights report">
                  View the desktop PageSpeed Insights report
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                Perfect 100 in Performance Accessibility Best Practices and SEO
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                Clean semantic code and Core Web Vitals optimization
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                Analytics booking and integrations without slowing your site
              </li>
            </ul>
          </div>

          <Card className="overflow-hidden shadow-lg" aria-label="PageSpeed Insights report screenshot card">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Gauge className="h-5 w-5" /> PageSpeed Insights report screenshot
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src="/pagespeed-insights-100.png"
                alt="Screenshot of The Digital Uplift website achieving 100 in PageSpeed Insights across categories"
                width={1200}
                height={800}
                className="h-auto w-full"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Research backed case study */}
      <section id="lighthouse-case-study" className="mx-auto max-w-6xl px-6 py-14">
        <Badge className="mb-3">Research backed</Badge>
        <h2 className="text-2xl font-semibold">How rare is a perfect Lighthouse score</h2>

        <div className="mt-6 space-y-6 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">Most sites score far below 100</p>
            <p className="mt-2">
              An analysis of 6.8 million websites via HTTP Archive shows only the top 10 percent score above 80 in Performance. A perfect 100 is extraordinarily uncommon.
            </p>
            <p className="mt-2">
              <Link
                href="https://www.tunetheweb.com/blog/what-do-lighthouse-scores-look-like-across-the-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Read the study
              </Link>
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Google does not expect perfection</p>
            <p className="mt-2">
              Google documentation states a perfect 100 across categories is extremely challenging to achieve and not expected. The last point from 99 to 100 often requires as much effort as larger early gains.
            </p>
            <p className="mt-2">
              <Link
                href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                See Google guidance
              </Link>
            </p>
          </div>

          <div>
            <p className="font-medium text-foreground">Complex retail sites rarely reach it</p>
            <p className="mt-2">
              A review of 70 leading retailers reported an average performance score of 22 out of 100 showing how hard perfect scores are for real feature rich sites.
            </p>
            <p className="mt-2">
              <Link
                href="https://www.practicalecommerce.com/70-leading-retailers-lighthouse-scores-revealed"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View the data
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Why this matters</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
            <li>Statistically exceptional top fraction of a percent</li>
            <li>Against the odds even Google does not expect perfect scores</li>
            <li>Impressive for complexity perfect 100 on a real site signals elite engineering and attention to detail</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://pagespeed.web.dev/analysis/https-www-thedigitaluplift-ca/h94yt52522?form_factor=desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
            </Link>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Proof and explanation */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                Why PageSpeed Insights 100 matters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              A perfect score signals tight engineering discipline. It reflects minimized JavaScript optimized images semantic HTML and accessible UI that search engines and users can trust.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Built for Canadian small businesses</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We serve local companies across Canada with sites that load quickly on real devices and real networks helping you capture more traffic and convert more leads.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Future ready stack</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              React Next.js Tailwind and shadcn UI deliver scalability maintainability and a refined user experience without the bloat of page builders.
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="q1">
              <AccordionTrigger>What does a perfect PageSpeed Insights 100 score include</AccordionTrigger>
              <AccordionContent>
                All four categories Performance Accessibility Best Practices and SEO are evaluated. Each one scores 100 in our desktop audit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Will third party scripts lower my score later</AccordionTrigger>
              <AccordionContent>
                We plan ahead with script loading strategies code splitting and performance budgets to preserve speed as features are added.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Can this help rankings for local search in Canada</AccordionTrigger>
              <AccordionContent>
                Fast accessible pages with clean semantics and strong Core Web Vitals support higher visibility and better engagement for local business queries.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
