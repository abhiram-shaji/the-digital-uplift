import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const words = `Your business deserves smart tools, clean design, and the visibility to reach more customers online without overpriced agencies or middlemen.`;

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="max-w-7xl mx-auto">
        <Card className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          {/* Text Left */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">About Us</h2>
            <p className="dark:text-white text-lg text-muted-foreground leading-relaxed">
              We are based in Victoria, British Columbia and our mission is to help Canadian small businesses grow with a strong digital presence. At The Digital Uplift, you work directly with the designers and developers who bring your vision to life.
            </p>
            <TextGenerateEffect words={words} />
            <p className="text-sm text-muted-foreground italic">
              <a
                href="https://www.pexels.com/photo/facade-of-a-parliament-building-in-british-columbia-4157284/"
                target="_blank"
                rel="noopener noreferrer"
                title="https://www.pexels.com/photo/facade-of-a-parliament-building-in-british-columbia-4157284/"
                className="underline"
              >
                Photo by Keelan Clemens from Pexels
              </a>
            </p>
            <Link href="/about-the-digital-uplift">
              <Button className="mt-4">Read More</Button>
            </Link>
          </div>

          {/* Image Right */}
          <div className="flex-1">
            <Image
              src="/victoria-bc.jpg"
              alt="Image of Victoria BC"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto shadow-md"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
