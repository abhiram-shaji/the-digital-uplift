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
    <div className="relative rounded-xl border bg-white shadow-md py-4 px-4 text-center">
      {/* 🚩 Banner in top-right corner */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-md shadow-md z-20 max-w-[70%] sm:max-w-none text-center">
        Limited time offer! 
      </div>



      {/* 🔵 Main Content */}
      <div className="w-full bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
          Website Package – From 299 CAD
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
