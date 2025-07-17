"use client";

import { motion } from "framer-motion";
import BookingModal from "@/components/ui/BookingModal";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Vibrant Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(270deg, #0f0c29, #302b63, #24243e, #0f172a)",
          backgroundSize: "800% 800%",
        }}
      />

      {/* Optional animated gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-6 md:px-12">
        <div className="bg-white rounded-2xl p-10 sm:p-16 text-center max-w-5xl shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Build Professional Website Starting at{" "}
            <span className="text-[#f9bc60]">$299 CAD</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-10">
            Limited time launch offer! Book a free appointment now!
          </p>
          <BookingModal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
