"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Briefcase, Globe, Linkedin } from "lucide-react";

const words = `Your business deserves smart tools, clean design, and the visibility to reach more customers online without overpriced agencies or middlemen.`;

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto text-center space-y-12">

        {/* Mission Card */}
        <Card className="p-5">
          <h2 className="text-[#f9bc60] text-4xl font-bold">About Us</h2>

          {/* Founder Card */}
          <div className="p-5 flex flex-col items-center text-center gap-3">
            <Image
              src="/abhiram.webp"
              alt="Abhiram Shaji"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <h3 className="text-2xl font-semibold text-[#f9bc60]">Abhiram Shaji</h3>
            <p className="text-white max-w-xl">
              <span className="inline-flex items-center gap-2">
                <Briefcase size={18} />
                Founder @ The Digital Uplift
              </span>
              

              <span className="inline-flex items-center gap-2">
                A conversion-minded builder and product-focused founder with sharp design sense, business acumen, and strong technical execution.
              </span>

            </p>
            <div className="flex gap-6 pt-2">
  <a
    href="https://www.worksofabhiram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#f9bc60] hover:opacity-80 transition"
    aria-label="Portfolio"
  >
    <Globe size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/abhiram-kace/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#f9bc60] hover:opacity-80 transition"
    aria-label="LinkedIn"
  >
    <Linkedin size={24} />
  </a>
</div>

          </div>

          <div className="dark:text-white text-xl leading-snug tracking-wide">
            We are based in Victoria, British Columbia and our mission is to help Canadian small businesses grow with a strong digital presence. At The Digital Uplift, you work directly with the designers and developers who bring your vision to life.
          </div>

          <TextGenerateEffect words={words} />
        </Card>



      </div>
    </section>
  );
}
