// app/terms-of-use-the-digital-uplift/page.tsx

import { Metadata } from "next";
import {
  FileText,
  Lock,
  ShieldCheck,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Use | The Digital Uplift",
  description:
    "Review the Terms of Use for The Digital Uplift. Understand your rights, obligations, and our policies on usage, guarantees, intellectual property, and updates.",
  openGraph: {
    title: "Terms of Use | The Digital Uplift",
    description:
      "Review the Terms of Use for The Digital Uplift. Understand your rights, obligations, and our policies on usage, guarantees, intellectual property, and updates.",
    url: "https://www.worksofabhiram.com/terms-of-use-the-digital-uplift",
    siteName: "Works of Abhiram",
  },
};

export default function TermsOfUsePage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-4xl space-y-6 text-muted-foreground">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Terms of Use
            </CardTitle>
            <p className="text-sm mt-2">Effective Date: 17 July 2025</p>
          </CardHeader>
          <CardContent className="space-y-6 text-base">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Lock className="w-5 h-5 text-primary" />
                1. Usage
              </h3>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Learn about our services</li>
                <li>Submit inquiries or book consultations</li>
              </ul>
              <p className="mt-2">
                You agree not to use this site for spam, hacking, scraping, or illegal purposes.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <AlertTriangle className="w-5 h-5 text-primary" />
                2. No Guarantees
              </h3>
              <p className="mt-2">
                We do our best to offer high-quality services, but we don’t guarantee specific outcomes unless agreed upon in writing.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <ShieldCheck className="w-5 h-5 text-primary" />
                3. Intellectual Property
              </h3>
              <p className="mt-2">
                All site content (text, design, branding) belongs to The Digital Uplift. Don’t copy or reuse it without written permission.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <RefreshCcw className="w-5 h-5 text-primary" />
                4. Updates
              </h3>
              <p className="mt-2">
                We may update these terms or the privacy policy. Changes will be posted on this page with the new effective date.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
