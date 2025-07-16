import { CardTitle, CardContent } from "@/components/ui/card";
import { Wallet2, CreditCard, FileBarChart, LayoutDashboard } from "lucide-react";

export default function BillingPaymentsCard() {
  return (
    <div className="relative rounded-xl border bg-white shadow-md pt-16 pb-4 px-4 text-center">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
        <Wallet2 className="w-10 h-10 text-muted-foreground" />
      </div>

      <div className="bg-white/85 backdrop-blur-sm rounded-lg p-4 mt-2">
        <CardTitle className="text-base mb-3">
          Billing & Payments – From 599 CAD
        </CardTitle>
        <CardContent className="space-y-3 text-muted-foreground text-sm p-0">
          <div className="flex items-center gap-2">
            <FileBarChart className="w-4 h-4" />
            <span>Metered usage billing</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            <span>Stripe / PayPal integration</span>
          </div>
          <div className="flex items-center gap-2">
            <Wallet2 className="w-4 h-4" />
            <span>Auto-invoicing & payment failures</span>
          </div>
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4" />
            <span>Billing history dashboard</span>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
