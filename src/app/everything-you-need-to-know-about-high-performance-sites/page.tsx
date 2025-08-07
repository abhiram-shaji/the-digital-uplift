import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import {
  Zap,
  Code2,
  Rocket,
  ImageIcon,
  FileStack,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Everything You Need to Know About High Performance Sites | The Digital Uplift',
  description:
    'Explore the full potential of high-performance web applications built with Next.js. Learn why it outperforms traditional React setups and how it delivers blazing speed, scalability, and modern architecture.',
  alternates: {
    canonical:
      'https://www.thedigitaluplift.ca/everything-you-need-to-know-about-high-performance-sites',
  },
}

export default function HighPerformanceSitesPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-6">
        <Rocket className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold leading-tight">
          Everything You Need to Know About High Performance Web Applications Built with Next JS
        </h1>
      </div>

      <Separator className="my-6" />

      <h2 className="text-2xl font-semibold mb-4">
        Next JS delivers next level performance when it is used the right way
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Zap className="mt-1 text-primary" />
          <div>
            <strong>Fast initial loading and search engine visibility</strong>
            <p className="text-muted-foreground text-sm">
              By pre-rendering pages on the server or at build time, Next JS delivers near-instant content
              and strong SEO performance.
              <br />
              <a
                href="https://www.raftlabs.com/blog/building-with-next-js-best-practices-and-benefits-for-performance-first-teams/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                View Source
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Code2 className="mt-1 text-primary" />
          <div>
            <strong>Automatic code splitting for lighter payloads</strong>
            <p className="text-muted-foreground text-sm">
              Next JS only loads the JavaScript needed per page—improving load time across large apps.
              <br />
              <a
                href="https://www.elpassion.com/blog/next.js-performance-optimization?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Elpassion
              </a>{' '}
              ·{' '}
              <a
                href="https://www.aalpha.net/articles/nextjs-advantages-and-disadvantages/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Aalpha
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ImageIcon className="mt-1 text-primary" />
          <div>
            <strong>Built in image optimization and lazy loading</strong>
            <p className="text-muted-foreground text-sm">
              Automatically optimizes image size and format. Lazy loading ensures visual speed and layout
              stability.
              <br />
              <a
                href="https://www.bindbee.dev/blog/why-we-choose-nextjs-a-developer-perspective?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Bindbee
              </a>{' '}
              ·{' '}
              <a
                href="https://www.freecodecamp.org/news/optimize-nextjs-web-apps-for-better-performance/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                FreeCodeCamp
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FileStack className="mt-1 text-primary" />
          <div>
            <strong>Flexible rendering strategies to match your content</strong>
            <p className="text-muted-foreground text-sm">
              Use static generation for stable content, SSR for dynamic, or ISR for quick post-deploy edits.
              <br />
              <a
                href="https://www.toptal.com/next-js/nextjs-rendering-types-page-speed-optimization?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Toptal
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sparkles className="mt-1 text-primary" />
          <div>
            <strong>Enhanced developer productivity and hot reload</strong>
            <p className="text-muted-foreground text-sm">
              Rust-based compiler + fast refresh = fast iterations while coding.
              <br />
              <a
                href="https://pagepro.co/blog/pros-and-cons-of-nextjs/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                PagePro
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <TerminalSquare className="mt-1 text-primary" />
          <div>
            <strong>Future-ready architecture with modern tooling</strong>
            <p className="text-muted-foreground text-sm">
              Features like middleware, app router, and server components enable scale, performance, and DX.
              <br />
              <a
                href="https://pagepro.co/blog/pros-and-cons-of-nextjs/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                PagePro
              </a>
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
      <p className="mb-4">
        Traditional React apps often suffer from over-delivered JavaScript, slow load times, and poor
        scalability. Next JS solves this with smart rendering, better bundling, and developer-friendly tools
        that produce leaner, faster, more scalable applications.
      </p>
    </section>
  )
}
