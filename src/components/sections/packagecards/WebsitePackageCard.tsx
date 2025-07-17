import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Smartphone,
  SearchCheck,
  BarChart2,
  ClipboardList,
  Server,
} from "lucide-react";

export default function WebsitePackageCard() {
  return (
    <Card className="relative text-left py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">

      <div className="absolute top-10 right-2 sm:top-4 sm:right-4 bg-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-md shadow-md z-20 max-w-[70%] sm:max-w-none text-center">
        Limited time offer!
      </div>

      {/* 👇 Header slightly more left-aligned */}
      <CardHeader className="pl-2">
        <CardTitle className="text-base">Website Package – From 299 CAD</CardTitle>
      </CardHeader>

      {/* 👇 Content with more left padding */}
      <CardContent className="space-y-3 text-muted-foreground text-sm pl-4">
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
      </CardContent>
    </Card>
  );
}
