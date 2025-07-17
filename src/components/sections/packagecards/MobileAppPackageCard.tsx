import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Smartphone,
  Paintbrush2,
  CalendarCheck2,
  MessageCircle,
  Bell,
  Gift,
} from "lucide-react";
import { ReadMoreModal } from "@/components/ui/ReadMoreModal";

const mobileAppContent = `
Our Mobile App Package offers you a tailored experience across both iOS and Android platforms. Designed with branding in mind, your app will reflect your unique identity and business objectives.

From in-app messaging and push notifications to loyalty programs and bookings, we integrate features that improve user engagement and retention. We handle the design, development, and deployment—all in one package.
`;

export default function MobileAppPackageCard() {
  return (
    <Card className="relative text-left py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">
      <CardHeader className="pl-2">
        <CardTitle className="text-base">Mobile App Package – From 999 CAD</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground text-sm pl-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            <span>Cross-platform (iOS + Android)</span>
          </div>
          <div className="flex items-center gap-2">
            <Paintbrush2 className="w-4 h-4" />
            <span>Branded design</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarCheck2 className="w-4 h-4" />
            <span>Appointment bookings</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>Customer chat</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            <span>Push notifications</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4" />
            <span>Loyalty or rewards system</span>
          </div>
        </div>
        <ReadMoreModal title="Mobile App Package" content={mobileAppContent} />
      </CardContent>
    </Card>
  );
}
