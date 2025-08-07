// app/services/page.tsx
import { Metadata } from 'next';
import {
  Hammer,
  ShoppingCart,
  LayoutDashboard,
  MousePointerClick,
  RefreshCw,
  Smartphone,
  Rocket,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import BookingModalTrigger from '@/components/ui/BookingModalTrigger';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'What We Offer | The Digital Uplift',
  description:
    'Explore our custom development services including website builds, e-commerce, mobile apps, CMS integration, and redesigns—all tailored to grow your business.',
  alternates: {
    canonical: 'https://www.thedigitaluplift.ca/services',
  },
};

const services = [
  {
    title: 'Custom Website Development',
    description:
      'We create handcrafted websites built from the ground up with clean code, responsive layouts, and lightning-fast load times. Each build is completely tailored to your brand and goals, delivering a unique and professional online presence. No themes or templates, just clean, scalable performance.',
    icon: <Hammer className="w-8 h-8 text-primary" />,
  },
  {
    title: 'E-Commerce Website Development',
    description:
      'Launch a store that converts with speed and style. Our e-commerce builds feature seamless product browsing, secure checkout, inventory control, and full integration with analytics and customer engagement tools. Scalable from day one, ready to grow with your business.',
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Headless CMS Integration',
    description:
      'We connect your site to a modern content system that gives you full control without compromising speed or SEO. Easily manage content while keeping your frontend fast, secure, and flexible with headless CMS setups that scale as you grow.',
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Landing Page Development',
    description:
      'Whether launching a product or running a campaign, our landing pages are engineered for results. Clean layouts, fast performance, and strategic user flows drive signups, bookings, and conversions without distractions.',
    icon: <MousePointerClick className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Website Redesign and Modernization',
    description:
      'If your site is outdated, underperforming, or hard to update, we can rebuild it from scratch with a fresh design and modern tech stack. Better speed, better UX, and full mobile optimization come standard, helping your brand stand out online.',
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Mobile App Development',
    description:
      'Bring your business to phones with custom apps for iOS and Android. Designed to match your brand, our apps can include bookings, chat, loyalty programs, and push notifications to keep your audience engaged wherever they go.',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">What We Offer</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We specialize in building high-performance, scalable websites tailored to your business. From fully custom
          web development to optimized e-commerce builds, we deliver fast, reliable, and future-proof solutions with no
          templates and no limits.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="h-full hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center gap-3">
              {service.icon}
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
  <Card className="mx-auto">
    <CardHeader>
      <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-6 text-muted-foreground text-sm">
        Let us help you build something powerful. Whether you need a new website, mobile app, or a full redesign, we are ready to bring your vision to life. Book a free consultation today.
      </p>
      <BookingModalTrigger />
    </CardContent>
  </Card>
</div>

    </div>
  );
}
