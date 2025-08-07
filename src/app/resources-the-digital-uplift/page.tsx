// app/helpful-resources/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ExternalLink,
  Lightbulb,
  BookOpenCheck,
  CheckCircle2,
  Sparkles,
  Users,
  Boxes,
  Landmark,
  MousePointerClick,
  HelpCircle,
  MessageSquareQuote,
  CalendarCheck2,
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
    title: 'High-Impact Digital Services to Grow Your Business',
    href: '/high-impact-digital-services-to-grow-your-business',
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Trusted by Clients for Proven Results',
    href: '/trusted-by-clients-for-proven-results',
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Top Reasons to Choose Our Digital Services',
    href: '/top-reasons-to-choose-our-digital-services',
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    title: 'About Our Team and Why We Do What We Do',
    href: '/about-our-team-and-why-we-do-what-we-do',
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Our Digital Service Packages and Solutions',
    href: '/our-digital-service-packages-and-solutions',
    icon: <Boxes className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Client Success Stories and Case Studies',
    href: '/client-success-stories-and-case-studies',
    icon: <BookOpenCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Free Guide to Boost Your Online Presence',
    href: '/free-guide-to-boost-your-online-presence',
    icon: <Landmark className="w-6 h-6 text-primary" />,
  },
  {
    title: 'How Our Process Delivers Consistent Results',
    href: '/how-our-process-delivers-consistent-results',
    icon: <MousePointerClick className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Frequently Asked Questions About Our Services',
    href: '/frequently-asked-questions-about-our-services',
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Real Client Feedback and Community Proof',
    href: '/real-client-feedback-and-community-proof',
    icon: <MessageSquareQuote className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Book Your Free Strategy Session Now',
    href: '/book-your-free-strategy-session-now',
    icon: <CalendarCheck2 className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Ready to Grow Your Business? Start Here',
    href: '/ready-to-grow-your-business-start-here',
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
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
            <Link key={href} href={href} aria-label={`Go to ${title}`} className="hover:bg-muted/30 transition-colors rounded-lg">
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
