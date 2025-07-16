import Image from "next/image";
import { CardTitle, CardContent } from "@/components/ui/card";
import {
  LayoutDashboard,
  Code2,
  BookOpenCheck,
  Notebook
} from "lucide-react";

export default function CmsIntegrationCard() {
  return (
    <div className="relative min-h-[420px] rounded-xl overflow-hidden">
      {/* Full background image */}
      <Image
        src="/cms-bg.png"
        alt="CMS Background"
        fill
        className="object-cover"
      />

      {/* Bottom blur panel */}
      <div className="absolute bottom-0 w-full bg-white/85 backdrop-blur-md z-10 p-4">
        <CardTitle className="text-base mb-2">
          CMS Integration – From 199 CAD
        </CardTitle>
        <CardContent className="space-y-3 text-muted-foreground text-sm p-0">
          <p>
            Keep your website fresh and up to date{" "}
            <strong>without needing a developer.</strong>
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>Update your content easily with an admin dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpenCheck className="w-4 h-4" />
              <span>Includes a step-by-step CMS training document</span>
            </div>
            <div className="flex items-center gap-2">
              <Notebook className="w-4 h-4" />
              <span>Perfect for blogs, service-based sites, or portfolios</span>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
