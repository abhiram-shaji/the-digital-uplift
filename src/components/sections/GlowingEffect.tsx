import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 my-6">
      <GridItem
  area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
  icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="Headless CMS Integration"
  description="Take control of your content with a modern, headless CMS. Easily update your site without sacrificing performance, SEO, or flexibility. Perfect for growing teams and dynamic content needs."
/>

<GridItem
  area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
  icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="E-Commerce Website Development"
  description="Optimized for speed and conversions. Secure checkout, product tools, and growth-ready."
/>

<GridItem
  area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
  icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="Custom Website Development"
description="We build high performance scalable websites tailored to your business needs. Every site is crafted from scratch with no templates no shortcuts and no limits. Designed for speed usability and future growth with guaranteed performance our websites deliver a seamless user experience that helps convert visitors into loyal customers."
/>

<GridItem
  area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
  icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="Mobile App Development"
  description="We design and build high-quality, cross-platform mobile apps for iOS and Android. Tailored for performance and user engagement, our apps keep your audience connected wherever they go."
/>

<GridItem
  area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
  icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
  title="Website Redesign & Modernization"
  description="Transform your outdated website into a sleek, high-performing digital experience. We modernize design, improve speed, and align it with today’s UX standards, making your brand look and feel current."
/>



    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
