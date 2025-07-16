// components/sections/SampleWorksSection.tsx
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sampleworks } from "@/lib/data/sampleworks";

export default function SampleWorksSection() {
  return (
    <section id="works" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Sample Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleworks.map((work, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
  src={work.logo}
  alt={work.alt}
  width={800}
  height={600}
  className="w-full h-48 object-cover object-top"
/>
              <CardContent className="p-4 space-y-3">
                <CardTitle className="text-lg font-semibold">
                  {work.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {work.description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <Link
                    href={work.link}
                    target="_blank"
                    className="flex items-center gap-1 text-primary text-sm hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" /> {work.linkText}
                  </Link>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
