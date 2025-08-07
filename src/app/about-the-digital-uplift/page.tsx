import {
  RocketIcon,
  TimerIcon,
  TrendingUpIcon,
  ZapIcon,
  Code2Icon,
  ArrowRightIcon,
  Briefcase,
  Globe,
  Linkedin
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-background text-foreground px-6 md:px-10 lg:px-20 py-10 mt-20 max-w-7xl mx-auto space-y-24">
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
          <Card className="text-center">
            <CardHeader className="flex flex-col items-center gap-2">
              <TimerIcon className="w-6 h-6 text-primary" />
              <CardTitle className="text-base font-medium">Speed Comes First</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              From page load times to project delivery, we move fast and build even faster.
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="flex flex-col items-center gap-2">
              <TrendingUpIcon className="w-6 h-6 text-primary" />
              <CardTitle className="text-base font-medium">Built for Growth</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Every build is structured to scale with your business. You won’t need a redesign in 6 months.
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="flex flex-col items-center gap-2">
              <ZapIcon className="w-6 h-6 text-primary" />
              <CardTitle className="text-base font-medium">No Bloat Allowed</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We avoid plugins, templates, and dependencies. Every line of code is intentional.
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="flex flex-col items-center gap-2">
              <Code2Icon className="w-6 h-6 text-primary" />
              <CardTitle className="text-base font-medium">Performance-Driven</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We build based on performance, usability, and long-term maintainability.
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="p-5 max-w-md mx-auto">
        <Card className="text-center">
          <CardHeader className="flex flex-col items-center gap-3">
            <Image
              src="/abhiram.webp"
              alt="Abhiram Shaji"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <CardTitle className="text-2xl font-semibold">Abhiram Shaji</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Briefcase size={16} /> Founder @ The Digital Uplift
              </span>
              <br />
              <span>
                A conversion-minded builder and product-focused founder with sharp design sense,
                business acumen, and strong technical execution.
              </span>
            </p>
            <div className="flex justify-center gap-6 pt-2">
              <a
                href="https://www.worksofabhiram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Portfolio"
              >
                <Globe size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhiram-kace/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </CardContent>
        </Card>
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
