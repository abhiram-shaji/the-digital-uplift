import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  TrendingUp,
  Clock,
  Users,
  BarChart2,
} from "lucide-react";
import { ReadMoreModal } from "@/components/ui/ReadMoreModal";

const googleAdsContent = `
Our Google Ads Campaign service is perfect for businesses aiming to get noticed quickly and grow their customer base. We use smart bidding strategies, high-intent keyword targeting, and precise audience segmentation to make the most of your ad budget.

Campaigns are monitored and optimized continuously with A/B testing and real-time performance tracking through Google Analytics. Whether you are a local service provider or an e-commerce business, we tailor the strategy to match your unique goals.

You only pay after your campaign is fully delivered and you are satisfied with the outcome. This service is designed to empower small businesses to compete effectively without wasting money on trial and error. Every campaign is managed directly by a developer who understands your vision.
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
