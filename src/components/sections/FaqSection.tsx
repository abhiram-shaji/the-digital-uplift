// components/FaqSection.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export function FaqSection() {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
            <AccordionContent>
              Most projects are completed in two to four weeks, depending on scope and complexity. We move fast without sacrificing quality.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Do you use templates or prebuilt themes?</AccordionTrigger>
            <AccordionContent>
              No. Every website or app is built from scratch to ensure maximum performance, flexibility, and scalability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I update my content after launch?</AccordionTrigger>
            <AccordionContent>
              Yes. We integrate user-friendly CMS solutions so you can easily manage your content without needing a developer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What tech stack do you use?</AccordionTrigger>
            <AccordionContent>
              We work with modern frameworks like Next.js, React, Tailwind, and headless CMS platforms — always chosen based on what's best for your project.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Do you offer support after launch?</AccordionTrigger>
            <AccordionContent>
              Yes. We provide post-launch support and can offer ongoing optimization or updates as needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

<div className="mt-10 text-center">
  <Button variant="outline" asChild>
    <Link href="/faq" className="inline-flex items-center gap-2">
      Want to see more?
      <MoveRight className="size-4" />
    </Link>
  </Button>
</div>
      </div>
    </section>
  )
}
