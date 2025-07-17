// components/sections/ServicesSection.tsx
import WebsitePackageCard from "@/components/sections/packagecards/WebsitePackageCard";
import MobileAppPackageCard from "@/components/sections/packagecards/MobileAppPackageCard";
import CmsIntegrationCard from "@/components/sections/packagecards/CmsIntegrationCard";
import GoogleAdsCard from "@/components/sections/packagecards/GoogleAdsCard";


export default function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Our Packages{" "}
            <span className="block text-muted-foreground text-lg">
              (Founder&apos;s Launch Offer)
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <WebsitePackageCard />
          <MobileAppPackageCard />
          <CmsIntegrationCard />
          <GoogleAdsCard />
        </div>
      </div>
    </section>
  );
}
