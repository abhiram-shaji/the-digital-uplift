// components/Hero.tsx

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full bg-[#f1f5f9] py-20 text-center px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Build Professional Website Starting at <span className="text-[#f9bc60]">$169 CAD</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Limited time launch offer! Book a free appointment now!
        </p>
        <a href="#book" className="inline-block">
          <Button className="text-lg px-6 py-3">Book Now</Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
