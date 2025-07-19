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
The Website Package is ideal for small businesses aiming to make a powerful first impression online. Every website is built using modern technologies like React, Tailwind CSS, and Shadcn UI to deliver a clean, responsive, and mobile-optimized experience.

Your site will be fully optimized for search engines, including essential meta tags, semantic HTML structure, and fast load performance. We handle everything from Google Analytics setup, secure hosting, Canadian domain registration, SSL integration, and launch-readiness so you do not have to worry about technical details.

Training is provided so you can manage your site with confidence, and post-launch support ensures you are never left on your own. Payment is only needed once the project is complete and you are fully satisfied with the final result. This is a complete, ownership-guaranteed package crafted by Abhiram Shaji, a developer committed to helping local businesses thrive at an affordable price.
`;


export default function WebsitePackageCard() {
  return (
    <Card className="relative text-left py-4 px-4 shadow-md border rounded-xl">
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
