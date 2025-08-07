import Image from "next/image";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Briefcase, Globe, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About – The Digital Uplift",
  description:
    "Explore the story, mission, and craft behind The Digital Uplift's high-performance websites for Canadian businesses.",
  openGraph: {
    title: "About – The Digital Uplift",
    description:
      "Learn how The Digital Uplift builds fast, future-ready digital experiences for Canadian businesses.",
    url: "https://www.thedigitaluplift.ca/about-the-digital-uplift",
    siteName: "The Digital Uplift",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "High-performance web design for Canadian businesses",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About – The Digital Uplift",
    description:
      "Get to know our mission and approach to crafting ultra-fast, accessible websites.",
    images: [
      {
        url: "/hero-bg.png",
        alt: "High-performance web design for Canadian businesses",
      },
    ],
  },
};

const sections = [
  {
    title: "The Beginning",
    text: `The Digital Uplift began with a simple goal. Give small businesses access to the kind of clean, high-performance websites usually reserved for big brands. Abhiram Shaji started this as a personal mission after seeing too many local businesses struggle with slow, clunky templates or overpriced agency solutions. What began as a solo desk setup turned into a business focused on quality, clarity, and results.`,
    image: "/hero-bg.png",
  },
  {
    title: "The Mission",
    text: `We exist to help local brands grow through thoughtful design and smart development. Our mission is to build tools that work hard for your business. Every project is rooted in your goals and built for performance, not fluff. That means lightning-fast load times, clean navigation, and designs that help people trust your brand and take action quickly.`,
    image: "/mission.jpg",
    imageCredits: {
      text: "Photo by Julia Volk on Pexels",
      href: "https://www.pexels.com/photo/5273463/",
    },
  },
  {
    title: "The Craft",
    text: `We craft every site and app with modern tools like React, Tailwind, and Shadcn UI. The difference shows in the details. Perfect Lighthouse scores, smooth mobile experiences, and code that is fully optimized for Google. This is not drag-and-drop building. It is development done right, with technical quality that puts you ahead.`,
    image: "/craft.jpg",
    imageCredits: {
      text: "Photo by Google DeepMind on Pexels",
      href: "https://www.pexels.com/photo/18069694/",
    },
  },
  {
    title: "The People",
    text: `You work directly with the person building your site. Abhiram brings design sense, business logic, and hands-on development into every project. No agencies. No middle layers. Just clear communication, real timelines, and a final product that feels personal and polished.`,
    image: "/people.jpg",
    imageCredits: {
      text: "Photo by fauxels on Pexels",
      href: "https://www.pexels.com/photo/3184418/",
    },
  },
  {
    title: "The Results",
    text: `Our results speak through the success of our clients. Sites that load instantly. Booking systems that work seamlessly. SEO that drives traffic and conversions. When your digital presence is built to perform, you spend less time worrying and more time growing your business.`,
    image: "/results.jpg",
    imageCredits: {
      text: "Photo by Lukas on Pexels",
      href: "https://www.pexels.com/photo/590041/",
    },
  },
  {
    title: "The Future",
    text: `We build every site and app with the future in mind. Your digital platform grows with you, ready to scale and expand as your needs change. Whether it is a new feature, an app, or ongoing updates, we stay with you long after launch to keep things sharp, secure, and working smoothly.`,
    image: "/future.jpg",
    imageCredits: {
      text: "Photo by Pixabay on Pexels",
      href: "https://www.pexels.com/photo/414860/",
    },
  },
];

export default function AboutTheDigitalUpliftPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 mt-20 space-y-24">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className={cn(
            "flex flex-col md:flex-row items-center gap-12",
            index % 2 === 1 && "md:flex-row-reverse"
          )}
        >
          {/* Text */}
          <div className="flex-1 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">
              {section.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {section.text}
            </p>
            {section.imageCredits && (
              <p className="text-sm text-muted-foreground italic">
                <a
                  href={section.imageCredits.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={section.imageCredits.href}
                  className="underline"
                >
                  {section.imageCredits.text}
                </a>
              </p>
            )}
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      ))}

      {/* Founder Card at end */}
      <Card className="p-5 space-y-6">

        <div className="p-5 flex flex-col items-center text-center gap-4">
          <Image
            src="/abhiram.webp"
            alt="Abhiram Shaji"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <h3 className="text-2xl font-semibold">Abhiram Shaji</h3>

          <div className="dark:text-white max-w-xl space-y-2">
            <p className="inline-flex items-center gap-2">
              <Briefcase size={18} />
              Founder @ The Digital Uplift
            </p>
            <p>
              A conversion-minded builder and product-focused founder with sharp
              design sense, business acumen, and strong technical execution.
            </p>
          </div>

          <div className="flex gap-6 pt-2">
            <a
              href="https://www.worksofabhiram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="Portfolio"
            >
              <Globe size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhiram-kace/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </Card>
    </main>
  );
}
