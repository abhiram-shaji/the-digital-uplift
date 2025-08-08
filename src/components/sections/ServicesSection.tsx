import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlowingEffectDemo } from "./GlowingEffect";
import WhyChooseReact from "./WhyChooseReact";

export default function ServicesSection() {
  return (
    <section id="services" className="py-12">
      <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">
        Services We Offer
      </h2>

      <GlowingEffectDemo />
              <WhyChooseReact />
      

      <div className="mt-8 flex justify-center">
        <Button asChild className="h-12 px-8">
  <Link href="/services-the-digital-uplift">
    Discover More About The Services We Offer
  </Link>
</Button>
      </div>
    </section>
  );
}
