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
    <div className="relative rounded-xl border bg-white shadow-md pt-16 pb-4 px-4 text-center">
      {/* Icon at the top center, overlapping */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
        <Image
          src="/cms-icon.png"
          alt="CMS Icon"
          width={48}
          height={48}
        />
      </div>

      {/* Card content */}
      <div className="w-full bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
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
