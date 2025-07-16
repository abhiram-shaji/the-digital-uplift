import Image from "next/image";
import { CardTitle, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Clock, Users, BarChart2 } from "lucide-react";

export default function GoogleAdsCard() {
  return (
    <div className="relative min-h-[420px] rounded-xl overflow-hidden">
      {/* Full background image */}
      <Image
        src="/google-ads-bg.png"
        alt="Google Ads Background"
        fill
        className="object-cover"
      />

      {/* Frosted content panel at the bottom */}
      <div className="absolute bottom-0 w-full bg-white/85 backdrop-blur-md z-10 p-4">
        <CardTitle className="text-base mb-2">
          Google Ads Campaign Setup – 149 CAD
        </CardTitle>
        <CardContent className="space-y-3 text-muted-foreground text-sm p-0">
          <p>Want your business to show up right when someone’s searching for your service?</p>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            <p className="m-0">Be Seen by the Right People, at the Right Time.</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <p className="m-0">Google Ads gets you to the top of search results, fast.</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <p className="m-0">Quick setup, start getting clicks in hours, not weeks.</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <p className="m-0">Attract local, ready-to-buy customers.</p>
          </div>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4" />
            <p className="m-0">Performance insights to track what’s working.</p>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
