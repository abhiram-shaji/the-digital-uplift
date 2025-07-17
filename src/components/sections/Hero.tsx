"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import BookingModalTrigger from "@/components/ui/BookingModalTrigger"; // ✅ Use the shared trigger

const Hero = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen text-center">
      <header>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
          Build Professional Website Starting at{" "}
          <span className="text-[#f9bc60]">$299 CAD</span>
        </h1>
        <p className="text-2xl md:text-3xl dark:text-gray-100 text-gray-700 mb-10">
          Limited time launch offer! Book a free appointment now!
        </p>
      </header>
      <BookingModalTrigger /> {/* 🔁 Replaces inline <BookingModal /> */}
    </BackgroundLines>
  );
};

export default Hero;
