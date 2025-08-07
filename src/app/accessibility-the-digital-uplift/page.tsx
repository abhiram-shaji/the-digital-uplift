import { MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Accessibility | The Digital Uplift",
  description:
    "Learn about our accessibility practices and how we're committed to inclusive digital experiences that meet WCAG 2.2 AA standards.",
  keywords: [
    "Accessibility",
    "Inclusive Design",
    "WCAG 2.2",
    "Web Accessibility",
    "Digital Inclusion",
    "Screen Reader Friendly",
    "Accessible UX",
    "Keyboard Navigation",
    "Color Contrast",
    "Alt Text",
    "ARIA Roles",
    "Responsive Web Design",
    "The Digital Uplift"
  ],
  openGraph: {
    title: "Accessibility | The Digital Uplift",
    description:
      "We build accessible websites and apps that prioritize usability, clarity, and compliance with accessibility standards.",
    url: "https://www.thedigitaluplift.com/accessibility",
    siteName: "The Digital Uplift",
    type: "website",
    locale: "en_CA"
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility | The Digital Uplift",
    description:
      "Read our commitment to inclusive design and accessibility standards for all users.",
    creator: "@abhiramkace"
  },
  metadataBase: new URL("https://www.thedigitaluplift.com")
};

export default function AccessibilityPage() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-20 max-w-4xl mx-auto text-foreground bg-background space-y-12">
      {/* Intro */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Accessibility</h1>
        <p className="text-lg text-muted-foreground">
          Everyone deserves equal access to information. This site is built with inclusive design
          principles so that people of all abilities can browse with ease.
        </p>
      </div>

      {/* Standards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Inclusive by Design</h2>
        <p className="text-muted-foreground">
          This website adheres to WCAG 2.2 Level AA standards, helping ensure access for users with
          visual, motor, auditory, and cognitive challenges. From the code to the content,
          accessibility is not a feature—it's a foundation.
        </p>
      </div>

      {/* Accessibility Features */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Accessibility Features</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Structured HTML5 for screen reader compatibility</li>
          <li>Descriptive alt attributes for all key visuals</li>
          <li>Keyboard-friendly navigation throughout the interface</li>
          <li>Color palette optimized for clarity and contrast</li>
          <li>Flexible layouts that adapt to different devices and zoom levels</li>
          <li>Clear landmarks, roles, and ARIA tags to enhance usability</li>
          <li>Routine audits with Lighthouse and manual screen reader checks</li>
        </ul>
      </div>

      {/* Ongoing Commitment */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Continual Improvements</h2>
        <p className="text-muted-foreground">
          Accessibility is a living part of this site’s development cycle. I review features
          regularly, refine experiences based on user feedback, and keep up with evolving best
          practices.
        </p>
      </div>

      {/* Contact */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Let Me Know How I Can Help</h2>
        <p className="text-muted-foreground">
          Need a different format? Encounter an issue? I’m happy to help. Reach out and I’ll get
          back to you with solutions that work for you.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <MailIcon className="w-4 h-4 text-primary" />
            <span><strong>Email:</strong> write4abhiram@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-primary" />
            <span><strong>Based in:</strong> Victoria, BC, Canada</span>
          </li>
          <li className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-primary" />
            <span><strong>Available:</strong> Mon–Fri, 9AM–5PM PT</span>
          </li>
        </ul>
      </div>

      <Separator className="mt-10" />
    </section>
  );
}
