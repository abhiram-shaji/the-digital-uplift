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
      'We specialize in crafting fully bespoke websites designed structured and coded from scratch for optimal performance Every site features semantic accessible code that search engines love and that humans enjoy Expect responsive layouts that adapt seamlessly to desktops tablets and mobile devices while still offering pixel perfect visual fidelity and usability Performance is a cornerstone we aggressively optimize assets leverage modern image formats implement smart caching strategies and ensure critical CSS is inlined so load times stay blazing fast That is zero reliance on generic themes or cookie cutter templates every design element is uniquely tailored to reflect your brand tone colors and visual identity Beyond aesthetics our custom builds ensure future scalability modular component architecture lets your site grow as your business does whether you add new services product pages or dynamic features your site remains stable fast and easy to update',
    icon: <Hammer className="w-8 h-8 text-primary" />,
  },
  {
    title: 'E-Commerce Website Development',
    description:
      'We build e-commerce platforms that perform beautifully on both elegance and efficiency Expect frictionless product browsing experiences fast loading product listings intuitive filters quick view modals and smooth pagination that keeps customers engaged Secure one page checkout flows are optimized for conversions and equipped with HTTPS payment gateway integration and built in fraud prevention hooks Inventory and order management are streamlined real time stock tracking automated alerts for low inventory and seamless syncing with fulfillment or shipping services Go to market adjustments like price changes featured product promos or seasonal campaigns are instant and straightforward Every store comes pre integrated with analytics and customer engagement systems Built from the ground up for scalability your store is prepared to handle growing traffic expanding catalogs and new product categories without compromising speed or stability',
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Headless CMS Integration',
    description:
      'We seamlessly integrate your frontend with powerful headless Content Management Systems giving you a dedicated backend to manage content without slowing down your site Your team gets intuitive editing interfaces content models rich text editors media libraries while your site pulls only what it needs via fast secure APIs This decoupling boosts performance your frontend stays lean focused solely on rendering while content updates happen instantly through webhook triggered rebuilds or live preview SEO is preserved through headless friendly features metadata controls per page automated sitemap and robot directives generation and smart rendering for structured data outputs all aligned with best practices Flexibility is baked in whether you introduce new section types blog formats or microsites your content layer adapts without bloating the frontend This structure offers future proof scaling supporting multilingual content global CDN delivery role based editing workflows and content versioning all without touching the performance of your deployed site',
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Landing Page Development',
    description:
      'When it comes to landing pages campaign specific pages product launches or event promos we build them around conversion first principles That means minimal distractions strong visual hierarchy compelling headlines clear calls to action and persuasive copywriting designed to get your visitors to act Every landing page features aesthetical clarity fast loading visuals streamlined content flow mobile first layouts and interactive elements like anchor scrolling fixed headers or sticky CTAs to guide users seamlessly through the narrative to conversion A B testing compatibility is built in create variants with alternate headlines imagery or form placements so you can optimize engagement over time On the performance side we employ compressed assets lazy loading SVG icons and inlined CSS above the fold so even high traffic campaigns deliver consistent speed For integration we offer compatibility with email capture tools analytics tracking retargeting pixels and appointment booking widgets Everything is modular so you can spin up new pages for successive campaigns quickly and without sacrificing quality',
    icon: <MousePointerClick className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Website Redesign and Modernization',
    description:
      'A tired site drags your brand down That is why we offer complete redesigns fresh visuals intuitive UX and restructured information architecture to reconnect you with today users We start with UX audits performance benchmarking heatmap and user behavior analysis funnel breakdowns and competitor evaluations Design phases include moodboard style rebranding accessibility color and contrast audits prototyping in Figma or Sketch and user testing iterations Then we execute using modern maintainable tech React or similar frameworks Tailwind CSS for clean styling and best practices for semantic HTML lazy loading and responsive design Post launch you get consistent performance the site will hit one hundred percent on Lighthouse Performance SEO Best Practices and Accessibility metrics Clean code makes it easy to update whether you want to add blog posts new services or pages We provide training so you can self manage content going forward Support continues post launch so you are never left behind as your brand evolves',
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Mobile App Development',
    description:
      'Take your business mobile with custom built iOS and Android apps styled to reflect your visual identity and user experience goals We deliver intuitive native or cross platform apps with smooth onboarding flows fast launch times and offline support where needed Functional features can include real time in app booking built in messaging or customer chat loyalty or rewards systems with automated point accrual and redemption and personalised push notifications based on user behavior or calendar triggers Apps are backed by analytics tracking user sessions drop off points feature usage so you can refine experiences and drive retention We integrate securely with existing web services or APIs handle iOS App Store or Google Play deployments and provide post launch maintenance Your users benefit from an app that feels native responsive and purpose built to grow your connection with them',
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
]

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">What We Offer</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-6xl mx-auto">
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
              <p className="text-muted-foreground text-sm whitespace-pre-line">{service.description}</p>
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
