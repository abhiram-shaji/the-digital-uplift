"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm p-0 h-auto">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p><strong>Effective Date:</strong> 16 July 2025</p>

          <p>
            At The Digital Uplift, your privacy matters. This policy explains
            what we collect and how we use it.
          </p>

          <h3 className="font-semibold text-base">Information We Collect</h3>
          <p>
            <strong>1. Personal Information (Only when you fill out a form):</strong>
            <br />
            Your name<br />
            Your phone number<br />
            Your message<br />
            We use this only to contact you about your inquiry or to schedule a consultation.
          </p>

          <p>
            <strong>2. Website Analytics Data (Automatically via Google Analytics):</strong>
            <br />
            Pages visited<br />
            Time spent on the site<br />
            Browser and device info<br />
            Geographic region (general, not precise)<br />
            This data is collected anonymously and helps us understand how visitors use our site so we can improve it.
          </p>

          <h3 className="font-semibold text-base">Cookies</h3>
          <p>
            We use cookies for Google Analytics: to track basic usage and performance.
            <br />
            Cookies are small files stored in your browser. You can disable them in your browser settings if you prefer.
          </p>

          <h3 className="font-semibold text-base">Data Sharing</h3>
          <p>
            We do not sell your personal data. Analytics data may be shared with Google per their Privacy Policy.
          </p>

          <h3 className="font-semibold text-base">Your Rights</h3>
          <p>
            You can request access to, correction of, or deletion of any personal data you&apos;ve submitted. Just send us an email.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
