export const dynamic = 'force-static';

import { BackgroundLines } from "@/components/ui/background-lines";
import BookingModalTrigger from "@/components/ui/BookingModalTrigger";
import { FlipWords } from "../ui/flip-words";

const Hero = () => {
const words = [
  "Craft Sleek",
  "Create Converting",
  "Build Elegant",
  "Design Scalable",
  "Launch React",
  "Craft Responsive",
  "Create Unique",
  "Build Fast",
  "Design Modern"
];

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen text-center">
      <header>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight">
          <FlipWords words={words} /> Websites<br/>
          Built for Performance and Elegance
        </h1>
        <p className="text-2xl md:text-3xl dark:text-gray-100 text-gray-700 max-w-6xl mb-10">
          Book a free appointment now and discover how we craft blazing-fast, elegant, and scalable websites that elevate your brand and convert better.
        </p>
      </header>
      <BookingModalTrigger />
    </BackgroundLines>
  );
};

export default Hero;


