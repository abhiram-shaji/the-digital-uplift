import { CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Database, User2, Eye } from "lucide-react";

export default function AnalyticsCard() {
  return (
    <div className="relative rounded-xl border bg-white shadow-md pt-16 pb-4 px-4 text-center">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
        <LineChart className="w-10 h-10 text-muted-foreground" />
      </div>

      <div className="bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
          Data Tracking & Analytics – From 399 CAD
        </CardTitle>
        <CardContent className="space-y-3 text-muted-foreground text-sm p-0">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            <span>Real-time event tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <LineChart className="w-4 h-4" />
            <span>Custom analytics dashboards</span>
          </div>
          <div className="flex items-center gap-2">
            <User2 className="w-4 h-4" />
            <span>Detailed user/session logs</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>Audit trails and monitoring</span>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
