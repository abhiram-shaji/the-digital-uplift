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
      'Every business deserves a site that reflects its unique identity. We craft fully custom websites using the latest technologies, ensuring lightning-fast load times, exceptional user experience, and full control over features.',
    icon: <Hammer className="w-8 h-8 text-primary" />,
  },
  {
    title: 'E-Commerce Website Development',
    description:
      'Sell with speed and style. Our e-commerce builds are optimized for conversions and designed to scale. Secure checkout, product management, and analytics come built-in.',
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Headless CMS Integration',
    description:
      'Take control without sacrificing performance. We integrate modern headless CMSs that let you easily update your site while keeping it fast, secure, and SEO-friendly.',
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Landing Page Development',
    description:
      'Turn clicks into customers. We build high-converting landing pages optimized for lead capture, sales, and promotions—fast, focused, and effective.',
    icon: <MousePointerClick className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Website Redesign & Modernization',
    description:
      'If your current site feels outdated or underperforms, we’ll rebuild it with a focus on performance, usability, and polished design that reflects your brand.',
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Mobile App Development',
    description:
      'Expand your reach with custom iOS and Android apps. We build apps that match your brand and include features like chat, bookings, and push notifications.',
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
        <Rocket className="mx-auto mb-4 w-8 h-8 text-primary" />
        <h2 className="text-2xl font-semibold">Explore Our Services</h2>
        <p className="my-4 text-muted-foreground max-w-xl mx-auto">
          No matter the stage or size of your business, we are ready to help you grow with powerful digital tools.
          Reach out today to discuss how we can bring your vision to life.
        </p>
        <BookingModalTrigger />
      </div>
    </div>
  );
}
