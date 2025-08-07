import { Metadata } from 'next'
import {
  Hammer,
  ShoppingCart,
  LayoutDashboard,
  MousePointerClick,
  RefreshCw,
  Smartphone,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import BookingModalTrigger from '@/components/ui/BookingModalTrigger'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'What We Offer | The Digital Uplift',
  description:
    'Explore our custom development services including website builds, e-commerce, mobile apps, CMS integration, and redesigns—all tailored to grow your business.',
  alternates: {
    canonical: 'https://www.thedigitaluplift.ca/services',
  },
}

const services = [
  {
    title: 'Custom Website Development',
    description:
      'In a market where too many small businesses are sold slow, overcomplicated, or overpriced websites, we build something better. Every site we create is carefully planned, written, and coded from the ground up to be fast, accessible, and easy to use. We focus on clean, human friendly design that adapts naturally to any device, and code that search engines respect. There are no cookie cutter templates or hidden compromises, only a site that feels like it was made for you because it was. We see it as more than development; it is giving your business a foundation you can trust and grow on without unnecessary costs or technical headaches.',
    icon: <Hammer className="w-8 h-8 text-primary" />,
  },
  {
    title: 'E-Commerce Website Development',
    description:
      'Selling online should not feel like a battle against clunky systems and high fees. We build online stores that put both you and your customers first with clear navigation, fast product browsing, and simple, secure checkouts. You will have the tools to update prices, run promotions, and track orders without being locked into complicated processes or expensive add ons. We design with care so that your store is fast, stable, and ready to grow without losing the human touch that keeps customers coming back. Every choice we make is about helping you sell more with less stress.',
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Headless CMS Integration',
    description:
      'We believe managing your content should be effortless without slowing your site down. A headless CMS gives you a clean, secure way to add, edit, and organize your content while keeping the front end lightning fast. You will be able to update pages, publish blog posts, and swap images without waiting on a developer and without risking broken layouts. We handle the technical work so you can focus on the words, images, and ideas that matter to your audience. It is about giving you control and peace of mind in a setup that will serve you for years to come.',
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Landing Page Development',
    description:
      'When you need to share a message, launch a product, or promote an event, the page that carries that message should work as hard as you do. We build landing pages that speak clearly, load quickly, and guide people toward taking action without feeling pushed. The layout, visuals, and copy are all shaped around your audience so every click feels natural. We make sure these pages are easy to test, refine, and reuse so each campaign builds on the last, and you always get the most value from your investment.',
    icon: <MousePointerClick className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Website Redesign and Modernization',
    description:
      'If your site feels outdated, you are not alone because many good businesses are held back by websites that no longer reflect who they are. We approach redesigns with respect for the work you have already put in, combining it with honest analysis of what is slowing you down. From clearer navigation to improved accessibility and faster load times, we rebuild with the goal of making your site a joy to use for both you and your visitors. This is not just about looking modern, it is about creating a site that works better for you now and will not need rescuing again anytime soon.',
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Mobile App Development',
    description:
      'Your customers live on their phones, and meeting them there should feel personal, not forced. We create mobile apps that are smooth, intuitive, and built to strengthen the connection between you and the people you serve. Whether it is booking, messaging, loyalty rewards, or something unique to your business, we make sure it works reliably and feels right in your users’ hands. We handle everything from launch to updates so you are free to focus on running your business while your app quietly does its job in the background.',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
];


export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">What We Offer</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-6xl mx-auto">
          We specialize in building high performance scalable websites tailored to your business From fully custom web development to optimized e commerce builds we deliver fast reliable and future proof solutions with no templates and no limits
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {services.map((service) => (
          <Card key={service.title} className="w-full">
            <CardHeader className="flex items-center gap-3">
              {service.icon}
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg whitespace-pre-line">
                {service.description}
              </p>
            </CardContent>

          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Card className="mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground text-sm">
              Let us help you build something powerful Whether you need a new website mobile app or a full redesign we are ready to bring your vision to life Book a free consultation today
            </p>
            <BookingModalTrigger />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
