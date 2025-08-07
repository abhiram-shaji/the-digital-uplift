import {
  RocketIcon,
  TimerIcon,
  TrendingUpIcon,
  ZapIcon,
  SmartphoneIcon,
  ShoppingCartIcon,
  Code2Icon,
  LayoutTemplateIcon,
  FileTextIcon,
  RefreshCcwIcon,
  ArrowRightIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <section className="bg-background text-foreground px-6 md:px-10 lg:px-20 py-20 max-w-7xl mx-auto space-y-24">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          We Don’t Build Websites. We Build Engines.
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We are not a traditional agency. We are a focused team that builds high-performance
          websites and mobile apps designed to grow with your business. No templates. No bloated
          platforms. Only clean, purpose-built digital infrastructure made for speed and scale.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Why We Exist</h2>
          <p className="text-muted-foreground">
            Most digital builds are slow, overloaded, and held together by unnecessary tools or shortcuts.
            We started this company to offer something better. We create custom digital products that
            prioritize speed, stability, and real results.
          </p>
          <p className="text-muted-foreground">
            We use modern frameworks and best practices to ensure performance, accessibility, and SEO
            are not afterthoughts. If something is not fast, scalable, and user-friendly, we do not build it.
          </p>
        </div>
        <RocketIcon className="w-full h-32 text-primary" />
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <TimerIcon className="w-6 h-6 text-primary" />
            <h3 className="font-medium">Speed Comes First</h3>
            <p className="text-sm text-muted-foreground">
              From page load times to project delivery, we move fast and build even faster.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <TrendingUpIcon className="w-6 h-6 text-primary" />
            <h3 className="font-medium">Built for Growth</h3>
            <p className="text-sm text-muted-foreground">
              Every build is structured to scale with your business. You won’t need a redesign in 6 months.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <ZapIcon className="w-6 h-6 text-primary" />
            <h3 className="font-medium">No Bloat Allowed</h3>
            <p className="text-sm text-muted-foreground">
              We avoid plugins, templates, and dependencies. Every line of code is intentional.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Code2Icon className="w-6 h-6 text-primary" />
            <h3 className="font-medium">Performance-Driven</h3>
            <p className="text-sm text-muted-foreground">
              We build based on performance, usability, and long-term maintainability.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
          <div className="flex items-center gap-3">
            <Code2Icon className="w-5 h-5 text-primary" />
            <span>Custom Website Development</span>
          </div>
          <div className="flex items-center gap-3">
            <ShoppingCartIcon className="w-5 h-5 text-primary" />
            <span>E-Commerce Website Development</span>
          </div>
          <div className="flex items-center gap-3">
            <SmartphoneIcon className="w-5 h-5 text-primary" />
            <span>Mobile App Development</span>
          </div>
          <div className="flex items-center gap-3">
            <LayoutTemplateIcon className="w-5 h-5 text-primary" />
            <span>Headless CMS Integration</span>
          </div>
          <div className="flex items-center gap-3">
            <FileTextIcon className="w-5 h-5 text-primary" />
            <span>Landing Page Development</span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCcwIcon className="w-5 h-5 text-primary" />
            <span>Website Redesign & Modernization</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Our Process</h2>
        <div className="space-y-4 max-w-3xl mx-auto text-muted-foreground">
          <p><strong>Step One – Strategy and Planning:</strong> We work with you to define the scope and goals clearly.</p>
          <p><strong>Step Two – Design and Structure:</strong> We plan clean, scalable architecture with thoughtful design.</p>
          <p><strong>Step Three – Build and Optimize:</strong> We develop your product with speed, precision, and performance in mind.</p>
          <p><strong>Step Four – Launch and Support:</strong> We deploy efficiently and remain available for ongoing support and growth.</p>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Let’s Build Something Better</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          If you are tired of slow timelines, bloated platforms, and websites that do not scale, we can help.
          We build fast, we build smart, and we build for the future.
        </p>
        <Button size="lg" className="mt-2">
          Book a Free Strategy Session <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
