import Image from "next/image";
import BookingModal from "@/components/ui/BookingModal";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-6 md:px-12">
        <div className="bg-white rounded-2xl p-10 sm:p-16 text-center max-w-5xl shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Build Professional Website Starting at{" "}
            <span className="text-[#f9bc60]">$169 CAD</span>
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
