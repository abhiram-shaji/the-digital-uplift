import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlowingEffectDemo } from "./GlowingEffect";

export default function ServicesSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">
        Services We Offer
      </h2>

      <GlowingEffectDemo />

      <div className="mt-8 flex justify-center">
        <Button asChild className="h-12 px-8 text-base">
  <Link href="/services-the-digital-uplift">
    Explore All Services
  </Link>
</Button>
      </div>
    </section>
  );
}
