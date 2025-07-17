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
Our CMS Package gives you complete control over your website content through a secure and easy-to-use dashboard. Built with a focus on flexibility and performance, it is ideal for businesses, blogs, and portfolios that require frequent updates.

You can create, edit, or delete pages and posts without writing any code. We integrate secure authentication and role-based access to ensure only authorized users can make changes. The backend is optimized for speed, reliability, and long-term scalability.

You only make payment once the entire system is delivered and you are fully satisfied. Perfect for clients who want independence without sacrificing professional quality. Built by Abhiram Shaji to offer small businesses real autonomy in managing their digital presence.
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
