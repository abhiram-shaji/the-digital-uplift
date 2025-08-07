// app/(your-path)/why-lighthouse-scores-and-high-performance-matter/page.tsx
import { Metadata } from 'next';
import { CheckCircle, GaugeCircle, ShieldCheck, Search, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Lighthouse Scores and High Performance Matter | The Digital Uplift',
  description:
    'Understand how Google Lighthouse scores in Performance, Accessibility, Best Practices, and SEO affect your site’s success—and why perfect scores should be your baseline.',
  alternates: {
    canonical:
      'https://www.thedigitaluplift.ca/why-lighthouse-scores-and-high-performance-matter',
  },
};

export default function LighthouseScoresPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold tracking-tight">Why Lighthouse Scores and High Performance Matter</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <GaugeCircle className="w-6 h-6 text-primary" />
            1. It’s Your Site’s Performance Report Card
          </h2>
          <p>
            Lighthouse, a free tool from Google, audits websites across four critical areas:
            Performance, Accessibility, Best Practices, and SEO—delivering a clear, measurable
            gauge of how your site performs and what to improve.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            2. Speed and Performance Drive Real Results
          </h2>
          <p>
            Fast loading and smooth interaction directly impact user behavior—lowering abandonment,
            improving engagement, and increasing conversions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            3. Accessibility Expands Your Audience and Reduces Legal Risk
          </h2>
          <p>
            A perfect Accessibility score means your site is usable by everyone—including those relying
            on screen readers or keyboard navigation—and complies with laws like the EU Accessibility Act.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            4. Best Practices Reflect a Secure, Modern Site
          </h2>
          <p>
            This checks for things like HTTPS, proper image handling, and safe code. A high score here
            signals that your site is secure and responsibly built.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Search className="w-6 h-6 text-primary" />
            5. SEO Score Ensures Visibility
          </h2>
          <p>
            Lighthouse’s SEO score ensures your site has mobile-friendly design, correct meta tags,
            and other technical basics that help it rank on search engines.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            6. Good Developers Deliver Perfect Scores
          </h2>
          <p>
            100/100 in Accessibility, Best Practices, and SEO is not a bonus—it’s the baseline. Any
            modern developer worth hiring should deliver this without compromise.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <GaugeCircle className="w-6 h-6 text-primary" />
            7. Real-Time Testing Still Matters
          </h2>
          <p>
            Lighthouse scores are lab-based. To monitor real-world performance, also use tools like Google
            Search Console, PageSpeed Insights (field data), or Chrome UX Report (CrUX).
          </p>
        </div>
      </div>

      <div className="mt-10 border rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Why It Matters</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            <tr>
              <td className="p-4">Performance</td>
              <td className="p-4">Faster load times improve user retention and conversion</td>
            </tr>
            <tr>
              <td className="p-4">Accessibility</td>
              <td className="p-4">Inclusive design expands audience and aligns with legal standards</td>
            </tr>
            <tr>
              <td className="p-4">Best Practices</td>
              <td className="p-4">Ensures security, modernity, and maintainability</td>
            </tr>
            <tr>
              <td className="p-4">SEO</td>
              <td className="p-4">Sets the foundation for search engine discoverability and traffic</td>
            </tr>
            <tr>
              <td className="p-4">Full Lighthouse Scores</td>
              <td className="p-4">Indicates developer skill and commitment to quality</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-lg font-semibold">
        Bottom line: If your developer can’t deliver 100s in Lighthouse, you may be hiring the wrong one.
        This should be the **minimum** standard—not the goal.
      </div>
    </section>
  );
}
