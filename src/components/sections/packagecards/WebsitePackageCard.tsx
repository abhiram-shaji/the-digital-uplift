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
import { ReadMoreModal } from "@/components/ui/ReadMoreModal";

const websiteContent = `
The Website Package is perfect for businesses looking to make a professional impact online. Every website is crafted to be responsive, fast, and optimized for mobile-first users.

We ensure your site achieves 100% SEO score, includes booking/contact forms, integrates Google Analytics, and comes with hosting and domain setup. No technical hassle—just launch-ready.
`;

export default function WebsitePackageCard() {
  return (
    <Card className="relative text-left py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">
      <div className="absolute top-10 right-2 sm:top-4 sm:right-4 bg-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-md shadow-md z-20 max-w-[70%] sm:max-w-none text-center">
        Limited time offer!
      </div>
      <CardHeader className="pl-2">
        <CardTitle className="text-base">Website Package – From 299 CAD</CardTitle>
      </CardHeader>
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
        <ReadMoreModal title="Website Package" content={websiteContent} />
      </CardContent>
    </Card>
  );
}
