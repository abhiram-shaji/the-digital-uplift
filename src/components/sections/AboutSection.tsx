"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Card} from "@/components/ui/card";

const words = `We are based in Victoria, British Columbia and our mission is to help Canadian small businesses grow with a strong digital presence. At The Digital Uplift, you work directly with the designers and developers who bring your vision to life. We believe every business deserves smart tools, clean design, and the visibility to reach more customers online without overpriced agencies or middlemen.`;

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto text-center space-y-12">



        {/* Mission Card */}
        <Card className="p-5">
          <h2 className="text-[#f9bc60] text-4xl font-bold">About Us</h2>

          <TextGenerateEffect words={words} />

        </Card>
      </div>
    </section>
  );
}
