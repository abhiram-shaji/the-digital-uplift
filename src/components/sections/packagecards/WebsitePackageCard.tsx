import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import {
  Smartphone,
  SearchCheck,
  BarChart2,
  ClipboardList,
  Server,
  Star
} from "lucide-react";

export default function WebsitePackageCard() {
  return (
    <div className="relative min-h-[420px] rounded-xl overflow-hidden">

      {/* Full background image */}
      <Image
        src="/web-design-bg.png"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Text panel at the bottom with blur + opacity */}
      <div className="absolute bottom-0 w-full bg-white/75 backdrop-blur-md z-10 p-4">
        <CardTitle className="text-base mb-2">
          Website Package – From 169 CAD
        </CardTitle>
        <CardContent className="space-y-3 text-muted-foreground text-sm p-0">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            <span>Sleek, responsive design</span>
          </div>
          <div className="flex items-center gap-2">
            <SearchCheck className="w-4 h-4" />
            <span>100% SEO score guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4" />
            <span>Google Analytics integration</span>
          </div>
          <div className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4" />
            <span>Contact or booking form</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            <span>Hosting included</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>Great for portfolios, local businesses, services, events</span>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
