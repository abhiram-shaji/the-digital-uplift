import Image from "next/image";
import {
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
    <div className="relative rounded-xl border bg-white shadow-md pt-16 pb-4 px-4 text-center">
      {/* Icon: bigger and half outside the top */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
        <Image
          src="/web-design-icon.png"
          alt="Website Icon"
          width={48}
          height={48}
        />
      </div>

      {/* Title and content */}
      <div className="w-full bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
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
