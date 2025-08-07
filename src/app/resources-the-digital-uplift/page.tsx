// app/helpful-resources/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ExternalLink,
  Lightbulb,
  Sparkles,
  MessageSquareQuote,
  Rocket,
} from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Helpful Resources | The Digital Uplift',
  description:
    'Explore all helpful resource pages including SEO tips, services, portfolio highlights, and answers to frequently asked questions.',
  alternates: {
    canonical: 'https://www.thedigitaluplift.ca/resources-the-digital-uplift',
  },
};

const pages = [
  {
    title: 'Real Client Success with Custom Optimized Web Builds',
    href: '/real-client-success-with-custom-optimized-web-builds',
    icon: <MessageSquareQuote className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Blazing Fast Websites that Outperform WordPress and Wix',
    href: '/blazing-fast-websites-that-outperform-wordpress-and-wix',
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Everything You Need to Know About High Performance Sites',
    href: '/everything-you-need-to-know-about-high-performance-sites',
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
];

export default function HelpfulResourcesPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Lightbulb className="w-12 h-12 text-primary" />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Helpful Resources</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore valuable resources on full-stack mobile and web app development, SEO, performance optimization,
            portfolio work, and more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pages.map(({ title, href, icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={`Go to ${title}`}
              className="hover:bg-muted/30 transition-colors rounded-lg"
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4 cursor-pointer group">
                  {icon}
                  <CardTitle className="text-xl group-hover:underline transition-all">{title}</CardTitle>
                  <ExternalLink className="ml-auto w-5 h-5 text-muted-foreground" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
