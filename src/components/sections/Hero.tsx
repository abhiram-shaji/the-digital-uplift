export const dynamic = 'force-static';

import { BackgroundLines } from "@/components/ui/background-lines";
import BookingModalTrigger from "@/components/ui/BookingModalTrigger";
import { FlipWords } from "../ui/flip-words";

const Hero = () => {
  const words = [
    "Sleek and Modern",
    "High Converting",
    "Accessible and Usable",
    "Reliable at Scale",
    "React Powered",
    "Responsive and Polished",
    "Unique and Engaging",
    "SEO Ready",
    "Maintainable and Modular",
  ];

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen text-center">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
          <FlipWords words={words} /><br />
          Websites Built for Performance and Elegance
        </h1>
        <p className="text-2xl md:text-3xl dark:text-gray-100 text-gray-700 max-w-6xl mb-10">
          Book a free appointment and meet local developers in Victoria, BC, Canada
        </p>


      </header>
      <BookingModalTrigger />
    </BackgroundLines>
  );
};

export default Hero;
