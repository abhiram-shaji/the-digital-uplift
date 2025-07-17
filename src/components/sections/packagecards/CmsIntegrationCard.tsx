
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  Code2,
  BookOpenCheck,
  Notebook,
} from "lucide-react";

export default function CmsIntegrationCard() {
  return (
    <Card className="relative text-left py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">
      <CardHeader className="pl-2">
        <CardTitle className="text-base">
          CMS Integration – From 199 CAD
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-muted-foreground text-sm pl-4">

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4" />
            <span>Easy content update</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>No coding required</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenCheck className="w-4 h-4" />
            <span>Includes training document</span>
          </div>
          <div className="flex items-center gap-2">
            <Notebook className="w-4 h-4" />
            <span>Perfect for menu and prices</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
