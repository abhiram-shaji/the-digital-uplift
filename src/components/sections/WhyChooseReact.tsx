"use client";

import {
  Hammer,
  Zap,
  LayoutDashboard,
  BadgeCheck,
  Activity,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const points = [
  {
    icon: Hammer,
    title: "Unmatched Technical Quality",
    description:
      "Our builds consistently hit 100% scores in SEO, best practices, and accessibility. Something you won’t find with most site builders.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Load Times",
    description:
      "React sites load significantly faster than Wix or WordPress builders, helping reduce bounce rates and boost conversions by keeping visitors engaged.",
  },
  {
    icon: LayoutDashboard,
    title: "Better User Experience",
    description:
      "Clean navigation and design make it easier for customers to take action (like booking or buying).",
  },
  {
    icon: BadgeCheck,
    title: "More Credibility",
    description:
      "A polished, professional site builds trust and reflects your brand better than drag-and-drop builders.",
  },
  {
    icon: Activity,
    title: "SEO & Analytics Friendly",
    description:
      "Clean code means better Google ranking and easy integration with tools like Google Analytics.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Future-Ready",
    description:
      "Easily grow your site with advanced features as your business expands.",
  },
];

export default function WhyChooseReact() {
  return (
    <section className="mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Why Choose Us Over Wix or WordPress?
      </h2>

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible">
        {points.map(({ icon: Icon, title, description }, i) => (
          <Card
            key={i}
            className="text-left shadow-none border border-border bg-transparent sm:bg-background"
          >
            <CardContent className="p-4 sm:p-6 space-y-1">
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-[#f9bc60]" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    <PointerHighlight>
                      <span>{title}</span>
                    </PointerHighlight>
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
