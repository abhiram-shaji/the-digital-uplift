// app/cookie-policy-the-digital-uplift/page.tsx

import { Metadata } from "next";
import {
  Cookie,
  Info,
  Globe,
  Shield,
  XCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cookie Policy | The Digital Uplift",
  description:
    "Understand how cookies are used on The Digital Uplift's website. Learn about types of cookies, their purpose, and how you can manage or disable them.",
  openGraph: {
    title: "Cookie Policy | The Digital Uplift",
    description:
      "Understand how cookies are used on The Digital Uplift's website. Learn about types of cookies, their purpose, and how you can manage or disable them.",
    url: "https://www.worksofabhiram.com/cookie-policy-the-digital-uplift",
    siteName: "Works of Abhiram",
  },
};

export default function CookiePolicyPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-4xl space-y-6 text-muted-foreground">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Cookie className="w-6 h-6 text-primary" />
              Cookie Policy
            </CardTitle>
            <p className="text-sm mt-2">Effective Date: 16 July 2025</p>
          </CardHeader>
          <CardContent className="space-y-6 text-base">

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Info className="w-5 h-5 text-primary" />
                What Are Cookies?
              </h3>
              <p className="mt-2">
                Cookies are small text files stored in your web browser. They help us understand how you interact with our site and improve your overall experience.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Globe className="w-5 h-5 text-primary" />
                How We Use Cookies
              </h3>
              <p className="mt-2">
                We use cookies primarily for Google Analytics. These cookies help us:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Measure website traffic and performance</li>
                <li>Understand which pages are most visited</li>
                <li>Analyze visitor behavior to improve user experience</li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Shield className="w-5 h-5 text-primary" />
                Your Control Over Cookies
              </h3>
              <p className="mt-2">
                You can choose to disable cookies through your browser settings. However, doing so may limit certain functionality on the site.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <XCircle className="w-5 h-5 text-primary" />
                Data Sharing
              </h3>
              <p className="mt-2">
                We do not sell cookie data. Analytics cookies are shared with Google as part of their analytics service and are subject to Google’s Privacy Policy.
              </p>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
