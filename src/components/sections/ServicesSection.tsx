import Link from "next/link";
import { GlowingEffectDemo } from "./GlowingEffect";

export default function ServicesSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">
        Services We Offer
      </h2>

      <GlowingEffectDemo />

      <div className="mt-8 flex justify-center">
        <Link
          href="/services-the-digital-uplift"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
        >
          Explore All Services
        </Link>
      </div>
    </section>
  );
}
