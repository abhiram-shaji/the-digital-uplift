import Image from "next/image";
import { CardTitle, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Paintbrush2,
  CalendarCheck2,
  MessageCircle,
  Bell,
  Gift
} from "lucide-react";

export default function MobileAppPackageCard() {
  return (
    <div className="relative rounded-xl border bg-white shadow-md py-4 px-4 text-center">


      {/* Title and content */}
      <div className="w-full bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
          Mobile App Package – From 999 CAD
        </CardTitle>
        <CardContent className="space-y-4 text-muted-foreground text-sm p-0">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>Cross-platform (iOS + Android)</span>
            </div>
            <div className="flex items-center gap-2">
              <Paintbrush2 className="w-4 h-4" />
              <span>Branded design to match your website</span>
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
        </CardContent>
      </div>
    </div>
  );
}
