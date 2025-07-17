import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Database,
  FileText,
  ShieldCheck,
  UploadCloud,
  Settings,
} from "lucide-react";
import { ReadMoreModal } from "@/components/ui/ReadMoreModal";

const cmsContent = `
Our CMS Package equips you with a fully manageable website where you control content through an intuitive dashboard. Add, edit, or remove pages and posts without needing to touch code.

We implement secure authentication, role-based access control, and optimized backend setups. Perfect for blogs, portfolios, or business sites needing frequent content updates.
`;

export default function CmsPackageCard() {
  return (
    <Card className="relative text-left py-4 px-4 bg-white dark:bg-muted shadow-md border rounded-xl">
      <CardHeader className="pl-2">
        <CardTitle className="text-base">CMS Package – From 699 CAD</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-muted-foreground text-sm pl-4">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4" />
          <span>Content management system</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <span>Easy content editing</span>
        </div>
        <div className="flex items-center gap-2">
          <UploadCloud className="w-4 h-4" />
          <span>Media upload support</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Admin access & security</span>
        </div>
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          <span>Scalable backend setup</span>
        </div>
        <ReadMoreModal title="CMS Package" content={cmsContent} />
      </CardContent>
    </Card>
  );
}
