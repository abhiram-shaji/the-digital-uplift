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

const points = [
    {
        icon: Hammer,
        title: "Unmatched Technical Qualitys",
        description: "Our builds consistently hit 100% scores in SEO, best practices, and accessibility. Something you won’t find with most site builders.",
    },
    {
        icon: Zap,
        title: "Lightning-Fast Load Times",
        description: "React sites load significantly faster than Wix or WordPress builders, helping reduce bounce rates and boost conversions by keeping visitors engaged.",
    },
    {
        icon: LayoutDashboard,
        title: "Better User Experience",
        description: "Clean navigation and design make it easier for customers to take action (like booking or buying).",
    },
    {
        icon: BadgeCheck,
        title: "More Credibility",
        description: "A polished, professional site builds trust and reflects your brand better than drag-and-drop builders.",
    },
    {
        icon: Activity,
        title: "SEO & Analytics Friendly",
        description: "Clean code means better Google ranking and easy integration with tools like Google Analytics.",
    },
    {
        icon: TrendingUp,
        title: "Scalable & Future-Ready",
        description: "Easily grow your site with advanced features as your business expands.",
    },
];

export default function WhyChooseReact() {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Why Choose Us Over Wix or WordPress?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {points.map(({ icon: Icon, title, description }, i) => (
                    <Card key={i} className="text-left">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <Icon className="w-6 h-6 mt-1 text-[#f9bc60]" />
                                <div>
                                    <h3 className="font-semibold text-lg">{title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{description}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
