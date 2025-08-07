import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import {
  Rocket,
  Search,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users,
} from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Ready for a Website That Leaves Competitors in the Dust | The Digital Uplift',
  description:
    'Discover how blazing-fast websites boost SEO, conversions, and user trust. Learn why performance is the new competitive advantage in the digital world.',
  alternates: {
    canonical:
      'https://www.thedigitaluplift.ca/ready-for-a-website-that-leaves-competitors-in-the-dust',
  },
}

export default function ReadyForSpeedPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-6">
        <Rocket className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold leading-tight">
          Are You Ready for a Website That Leaves Competitors in the Dust
        </h1>
      </div>

      <Separator className="my-6" />

      <p className="text-muted-foreground text-lg mb-6">
        How fast can you build trust and win loyal visitors? In today’s digital world, every millisecond
        matters.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <TrendingUp className="mt-1 text-primary" />
          <div>
            <strong>Speed gives you a clear competitive edge</strong>
            <p className="text-muted-foreground text-sm">
              Fast websites convert better, bounce less, and earn trust faster. Consumers expect instant
              results—speed is your first impression.
              <br />
              <a
                href="https://nix-united.com/blog/website-speed-and-performance-optimization-best-practices/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Nix United
              </a>{' '}
              ·{' '}
              <a
                href="https://www.strikingly.com/blog/posts/importance-website-performance-optimization-business?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Strikingly
              </a>{' '}
              ·{' '}
              <a
                href="https://www.blissdrive.com/people-also-asked/what-are-the-benefits-of-faster-site-speed/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Bliss Drive
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Search className="mt-1 text-primary" />
          <div>
            <strong>Speed drives visibility and SEO performance</strong>
            <p className="text-muted-foreground text-sm">
              Google prioritizes fast sites—especially on mobile. Better speed improves your search rankings
              and discovery.
              <br />
              <a
                href="https://www.strikingly.com/blog/posts/importance-website-performance-optimization-business?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Strikingly
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 text-primary" />
          <div>
            <strong>Speed is trust in motion</strong>
            <p className="text-muted-foreground text-sm">
              Users perceive fast sites as more professional and trustworthy. Slow load times erode confidence
              before your brand even speaks.
              <br />
              <a
                href="https://vercel.com/resources/why-site-performance-matters?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Vercel
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="mt-1 text-primary" />
          <div>
            <strong>Fast builds save time, money, and frustration</strong>
            <p className="text-muted-foreground text-sm">
              Clients report significant ROI from performance upgrades—fewer issues, lower costs, and faster
              results.
              <br />
              <a
                href="https://nitropack.io/blog/post/site-speed-importance?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                NitroPack
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Users className="mt-1 text-primary" />
          <div>
            <strong>Performance sets the stage for engagement and loyalty</strong>
            <p className="text-muted-foreground text-sm">
              In 2025, three seconds is too slow. Pages that load in under a second foster retention and
              repeated visits.
              <br />
              <a
                href="https://www.newtarget.com/web-insights-blog/website-speed-4/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                New Target
              </a>
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <p className="text-muted-foreground text-sm">
        Sources: Nix United, Strikingly, Bliss Drive, Vercel, NitroPack, New Target
      </p>
    </section>
  )
}
