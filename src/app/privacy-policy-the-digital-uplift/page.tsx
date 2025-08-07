// app/privacy-policy-the-digital-uplift/page.tsx

import { Metadata } from "next";
import {
  Shield,
  User,
  Globe,
  Cookie,
  Mail,
  EyeOff,
  SearchCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | The Digital Uplift",
  description:
    "Learn how The Digital Uplift collects, uses, and protects your information. Read our full privacy policy regarding personal data, analytics, cookies, and your rights.",
  openGraph: {
    title: "Privacy Policy | The Digital Uplift",
    description:
      "Learn how The Digital Uplift collects, uses, and protects your information. Read our full privacy policy regarding personal data, analytics, cookies, and your rights.",
    url: "https://www.worksofabhiram.com/privacy-policy-the-digital-uplift",
    siteName: "Works of Abhiram",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-10 md:pt-20">
      <div className="w-full max-w-4xl space-y-6 text-muted-foreground">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Privacy Policy
            </CardTitle>
            <p className="text-sm mt-2">Effective Date: 16 July 2025</p>
          </CardHeader>
          <CardContent className="space-y-6 text-base">

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <User className="w-5 h-5 text-primary" />
                Information We Collect
              </h3>
              <p className="mt-2 font-medium">1. Personal Information (Only when you fill out a form):</p>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Your name</li>
                <li>Your phone number</li>
                <li>Your message</li>
              </ul>
              <p className="mt-2">
                We use this only to contact you about your inquiry or to schedule a consultation.
              </p>

              <p className="mt-4 font-medium">2. Website Analytics Data (Automatically via Google Analytics):</p>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Pages visited</li>
                <li>Time spent on the site</li>
                <li>Browser and device info</li>
                <li>Geographic region (general, not precise)</li>
              </ul>
              <p className="mt-2">
                This data is collected anonymously and helps us understand how visitors use our site so we can improve it.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Cookie className="w-5 h-5 text-primary" />
                Cookies
              </h3>
              <p className="mt-2">
                We use cookies for Google Analytics to track basic usage and performance. Cookies are small files stored in your browser. You can disable them in your browser settings if you prefer.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Globe className="w-5 h-5 text-primary" />
                Data Sharing
              </h3>
              <p className="mt-2">
                We do not sell your personal data. Analytics data may be shared with Google per their Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <SearchCheck className="w-5 h-5 text-primary" />
                Your Rights
              </h3>
              <p className="mt-2">
                You can request access to, correction of, or deletion of any personal data you've submitted. Just send us an email.
              </p>
              <p className="mt-1">
                <Mail className="w-4 h-4 inline-block mr-1" />
                write4kace@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
