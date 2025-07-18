import PrivacyPolicyModal from "@/components/sections/PrivacyPolicyModal";
import TermsModal from "@/components/sections/TermsModal";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} The Digital Uplift. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <PrivacyPolicyModal />
          <TermsModal />

          <Button asChild variant="link" className="text-sm p-0 h-auto">
            <a
              href="https://www.linkedin.com/in/abhiram-kace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founder
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
