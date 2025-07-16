import { CardTitle, CardContent } from "@/components/ui/card";
import { TimerReset, ArrowBigDownDash, Equal, UserCheck, Activity } from "lucide-react";

export default function RealTimeBiddingCard() {
  return (
    <div className="relative rounded-xl border bg-white shadow-md pt-16 pb-4 px-4 text-center">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
        <TimerReset className="w-10 h-10 text-muted-foreground" />
      </div>

      <div className="bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
          Real-Time Bidding – From 799 CAD
        </CardTitle>
        <CardContent className="space-y-3 text-muted-foreground text-sm p-0">
          <div className="flex items-center gap-2">
            <ArrowBigDownDash className="w-4 h-4" />
            <span>Sub-millisecond bid processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Equal className="w-4 h-4" />
            <span>Dynamic bid comparison logic</span>
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            <span>Buyer prioritization & failover</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span>Handles high-frequency traffic</span>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
