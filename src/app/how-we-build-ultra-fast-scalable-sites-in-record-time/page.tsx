import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import {
  Rocket,
  Code,
  Bolt,
  Layers,
  Component,
  FileCode2,
  Brush,
} from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'How We Build Ultra Fast Scalable Sites in Record Time | The Digital Uplift',
  description:
    'Explore how we use Next.js, TypeScript, Shadcn UI, and modular rendering to build ultra-fast, scalable web platforms with performance, stability, and style.',
  alternates: {
    canonical:
      'https://www.thedigitaluplift.ca/how-we-build-ultra-fast-scalable-sites-in-record-time',
  },
}

export default function BuildFastSitesPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-6">
        <Rocket className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold leading-tight">
          How We Build Ultra Fast Scalable Digital Platforms
        </h1>
      </div>

      <p className="text-muted-foreground text-lg mb-8">
        We deliver unparalleled speed and scalability with deliberate tool choices – strictly typed code,
        performance-optimized architecture, and clean UI foundations.
      </p>

      <Separator className="my-6" />

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Code className="mt-1 text-primary" />
          <div>
            <strong>Strictly Type Safe Code</strong>
            <p className="text-muted-foreground text-sm">
              TypeScript ensures predictable behavior, easier maintenance, and faster debugging across
              components and pages.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Bolt className="mt-1 text-primary" />
          <div>
            <strong>Full Next JS Performance Tooling</strong>
            <p className="text-muted-foreground text-sm">
              Server rendering, static site generation, and automatic code splitting deliver instant loads and
              dynamic precision.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Component className="mt-1 text-primary" />
          <div>
            <strong>Lean, Bloat Free UI with Shadcn UI</strong>
            <p className="text-muted-foreground text-sm">
              Only the components we use—no theme bundles, no extra code. Clean, purposeful UI.
              <br />
              <a
                href="https://www.reddit.com/r/nextjs/comments/198rhx2/so_i_am_building_a_project_with_nextjs_shadcn_ui/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Reddit
              </a>{' '}
              ·{' '}
              <a
                href="https://www.reddit.com/r/nextjs/comments/1co5iyy/is_nextui_better_than_shadcn/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Reddit
              </a>{' '}
              ·{' '}
              <a
                href="https://dev.to/hitesh_developer/using-shadcn-in-a-production-ready-nextjs-application-2g97?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                DEV
              </a>{' '}
              ·{' '}
              <a
                href="https://blog.logrocket.com/shadcn-ui-adoption-guide/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                LogRocket
              </a>{' '}
              ·{' '}
              <a
                href="https://cubettech.com/resources/blog/benefits-of-using-shadcn-over-material-ui/?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Cubet
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Layers className="mt-1 text-primary" />
          <div>
            <strong>Modular Rendering for Speed at Scale</strong>
            <p className="text-muted-foreground text-sm">
              Adaptive hydration loads UI sections as needed, improving first input delay and page experience.
              <br />
              <a
                href="https://arxiv.org/abs/2504.03884?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                arXiv Study
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Brush className="mt-1 text-primary" />
          <div>
            <strong>Tailwind Driven Styles for Efficiency</strong>
            <p className="text-muted-foreground text-sm">
              Utility-first styling compiles to lean CSS with no bloat—fast, responsive, and minimal.
              <br />
              <a
                href="https://insight.akarinti.tech/best-practices-for-using-shadcn-ui-in-next-js-2134108553ae?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Akar Inti
              </a>{' '}
              ·{' '}
              <a
                href="https://medium.com/zestgeek/how-to-integrate-shadcn-into-next-js-14-a-step-by-step-guide-917bb1946cba?utm_source=chatgpt.com"
                className="text-primary underline"
                target="_blank"
              >
                Medium
              </a>
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <h2 className="text-2xl font-semibold mb-4">What It Means for Your Business</h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>
          <strong>Lightning Fast Loads:</strong> Every page serves only what your users need, when they need it.
        </li>
        <li>
          <strong>Uncompromised User Experience:</strong> Speed, accessibility, and usability score high every time.
        </li>
        <li>
          <strong>Built to Last:</strong> Scale and extend with clean architecture and no performance bottlenecks.
        </li>
      </ul>
    </section>
  )
}
