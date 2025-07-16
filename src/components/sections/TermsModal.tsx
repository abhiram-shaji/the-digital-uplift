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

export default function TermsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm p-0 h-auto">
          Terms of Use
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Use</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p><strong>Effective Date:</strong> 17 July 2025</p>

          <p>By using this website, you agree to the following terms.</p>

          <h3 className="font-semibold text-base">1. Usage</h3>
          <p>
            You agree to use this site only to:
            <br />
            - Learn about our services<br />
            - Submit inquiries or book consultations<br />
            <br />
            You agree not to use this site for spam, hacking, scraping, or illegal purposes.
          </p>

          <h3 className="font-semibold text-base">2. No Guarantees</h3>
          <p>
            We do our best to offer high-quality services, but we don’t guarantee specific outcomes unless agreed upon in writing.
          </p>

          <h3 className="font-semibold text-base">3. Intellectual Property</h3>
          <p>
            All site content (text, design, branding) belongs to The Digital Uplift. Don’t copy or reuse it without written permission.
          </p>

          <h3 className="font-semibold text-base">4. Updates</h3>
          <p>
            We may update these terms or the privacy policy. Changes will be posted on this page with the new effective date.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
