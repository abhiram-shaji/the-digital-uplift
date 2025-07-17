import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Target,
  TrendingUp,
  Clock,
  Users,
  BarChart2,
} from "lucide-react";

export default function GoogleAdsCard() {
  return (
    <Card className="relative text-left py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">
      <CardHeader className="pl-2">
        <CardTitle className="text-base mb-3">
          Google Ads Campaign Setup – 149 CAD
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-muted-foreground text-sm pl-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          <p className="m-0">Targeted advertising.</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <p className="m-0">Quick setup.</p>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <p className="m-0">Attract customers.</p>
        </div>
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4" />
          <p className="m-0">Performance insights.</p>
        </div>
      </CardContent>
    </Card>
  );
}
