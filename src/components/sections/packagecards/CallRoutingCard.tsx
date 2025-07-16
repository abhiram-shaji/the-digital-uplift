import { CardTitle, CardContent } from "@/components/ui/card";
import { Route, PhoneForwarded, Share2, FileText, MonitorSmartphone } from "lucide-react";

export default function CallRoutingCard() {
  return (
    <div className="relative rounded-xl border bg-white shadow-md pt-16 pb-4 px-4 text-center">
      {/* Top icon */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
        <Route className="w-10 h-10 text-muted-foreground" />
      </div>

      {/* Content */}
      <div className="bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
          Call Routing Engine – From 499 CAD
        </CardTitle>
        <CardContent className="space-y-3 text-muted-foreground text-sm p-0">
          <div className="flex items-center gap-2">
            <PhoneForwarded className="w-4 h-4" />
            <span>Smart flow logic (geo, time, priority)</span>
          </div>
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            <span>SIP/VoIP or REST API integration</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Call logging and fallback support</span>
          </div>
          <div className="flex items-center gap-2">
            <MonitorSmartphone className="w-4 h-4" />
            <span>Optional dashboard integration</span>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
