import {
  ArrowRight,
  Code2,
  ShoppingCart,
  LayoutTemplate,
  FileText,
  RefreshCcw,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  { title: "Custom Website Development", icon: Code2 },
  { title: "E-Commerce Website Development", icon: ShoppingCart },
  { title: "Headless CMS Integration", icon: LayoutTemplate },
  { title: "Landing Page Development", icon: FileText },
  { title: "Website Redesign & Modernization", icon: RefreshCcw },
  { title: "Mobile App Development", icon: Smartphone },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">What We Do</h2>
        <p className="text-lg text-muted-foreground">
          We specialize in building high-performance, scalable websites tailored to your business.
          From fully custom web development to optimized e-commerce builds, we deliver fast,
          reliable, and future-proof solutions, no templates, no limits.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="flex flex-row items-center justify-center sm:justify-start gap-3"
          >
            <Icon className="w-6 h-6 text-primary shrink-0" />
            <span className="text-base font-medium">{title}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/services">
          <Button variant="default" size="lg">
            Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
