import Image from "next/image";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Target, TrendingUp, Clock, Users, BarChart2 } from "lucide-react";

export default function GoogleAdsCard() {
  return (
    <Card className="relative text-center py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">
      <CardHeader>
        <CardTitle className="text-base mb-3">
          Google Ads Campaign Setup – 149 CAD
        </CardTitle>
      </CardHeader>

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
    </Card>
  );
}
