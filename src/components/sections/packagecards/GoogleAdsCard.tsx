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
import { ReadMoreModal } from "@/components/ui/ReadMoreModal";

const googleAdsContent = `
Our Google Ads Campaign service is designed to maximize your ROI by targeting the most relevant customers. We employ smart bidding strategies, keyword optimization, and precise audience targeting to ensure your ad budget is spent effectively.

With detailed performance analytics and constant A/B testing, we optimize your campaigns continuously. Whether you want to promote a local service or scale your e-commerce platform, we adapt our strategy to fit your goals.
`;

export default function GoogleAdsCard() {
  return (
    <Card className="relative text-left py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">
      <CardHeader className="pl-2">
        <CardTitle className="text-base">
          Google Ads Campaign – 149 CAD
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
        <ReadMoreModal title="Google Ads Campaign" content={googleAdsContent} />
      </CardContent>
    </Card>
  );
}
