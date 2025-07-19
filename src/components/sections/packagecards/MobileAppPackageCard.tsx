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
Our Mobile App Package is crafted for local businesses looking to expand their reach through custom iOS and Android apps. Every app reflects your brand identity and goals, with a thoughtful user experience designed using best industry practices.

Apps can include messaging, push notifications, loyalty programs, booking features, and more, all tailored to boost engagement and retention. We oversee every step, from initial design to final deployment on app stores, ensuring a smooth process and a product that serves your business.

Payment is only needed once everything is fully delivered and you are completely satisfied with your app. Developed personally by Abhiram Shaji, with a focus on quality and affordability for small business owners who deserve enterprise-grade tools without the agency markup.
`;


export default function MobileAppPackageCard() {
  return (
    <Card className="relative text-left py-4 px-4 shadow-md border rounded-xl">
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
