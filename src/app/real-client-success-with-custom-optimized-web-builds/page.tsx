import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { ThumbsUp } from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Real Client Success with Custom Optimized Web Builds | The Digital Uplift',
  description:
    'Discover real-world success stories from businesses who achieved higher speed, better conversions, and scalable growth through custom optimized web development.',
  alternates: {
    canonical:
      'https://www.thedigitaluplift.ca/real-client-success-with-custom-optimized-web-builds',
  },
}

export default function ClientSuccessPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-6">
        <ThumbsUp className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold leading-tight">
          Real Client Success Stories
        </h1>
      </div>

      <Separator className="my-6" />

      <h2 className="text-2xl font-semibold mb-4">Tangible Gains from Custom Web Design</h2>
      <p className="mb-4">
        <strong>Marketeam</strong> shares how custom-fit websites do more than look good—they drive leads,
        boost engagement, and streamline workflows.
        <br />
        <a
          href="https://marketeam.com.au/resources/articles/web-design/the-benefits-of-a-custom-web-design-real-life-client-success-stories?utm_source=chatgpt.com"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Critical Rendering Path Optimization Pays Off</h2>
      <p className="mb-4">
        <strong>MoldStud</strong> demonstrates how streamlining the critical rendering path improved both
        speed and user experience.
        <br />
        <a
          href="https://moldstud.com/articles/p-real-life-success-stories-optimizing-the-critical-rendering-path-for-enhanced-web-performance?utm_source=chatgpt.com"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Performance Improvements Driving Engagement</h2>
      <p className="mb-4">
        Another <strong>MoldStud</strong> story shows how optimizing site speed led to a 70 % boost in user
        engagement by maintaining sub-3-second load times.
        <br />
        <a
          href="https://moldstud.com/articles/p-the-impact-of-front-end-development-real-client-testimonials-that-showcase-success?utm_source=chatgpt.com"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Webflow Enables Rapid Transformation and Growth</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Waste Connections:</strong> Unified 300+ brand sites into one scalable platform.
        </li>
        <li>
          <strong>Typeform:</strong> Boosted technical SEO score by 98 %.
        </li>
        <li>
          <strong>DocuSign:</strong> Saw 1,170 % traffic growth year-over-year.
        </li>
      </ul>
      <a
        href="https://webflow.com/customers?utm_source=chatgpt.com"
        className="text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source
      </a>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Landing Page Optimization That Converts</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>A one-word change delivered a 104 % increase in conversions.</li>
        <li>Another brand slashed CPA and increased conversions by 60 % through A/B testing.</li>
      </ul>
      <a
        href="https://unbounce.com/landing-page-optimization/case-studies/?utm_source=chatgpt.com"
        className="text-primary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source
      </a>

      <Separator className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">Why These Stories Matter</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>Measurable performance gains:</strong> Faster sites improve Core Web Vitals, SEO, and UX.
        </li>
        <li>
          <strong>Strategic business outcomes:</strong> Custom builds align design with real business goals.
        </li>
        <li>
          <strong>Scalable, future-ready infrastructure:</strong> Platforms like Webflow allow agility,
          performance, and control.
        </li>
      </ul>

      <Separator className="my-8" />

      <h2 className="text-2xl font-semibold mb-4">How We Can Apply This</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-border text-sm md:text-base">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-3 font-semibold">Strategy</th>
              <th className="p-3 font-semibold">Outcome Highlight</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="p-3">Optimize rendering & load time</td>
              <td className="p-3">Faster performance, better engagement</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-3">Tailor design to goals</td>
              <td className="p-3">Better UX, improved SEO, higher conversions</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-3">Leverage custom platforms</td>
              <td className="p-3">Unified brand architecture, scalable systems, traffic growth</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
