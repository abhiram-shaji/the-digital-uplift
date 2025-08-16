import Link from "next/link";
import {
  Building2,
  Info,
  Tag,
  Mail,
  HelpCircle,
  MapPin,
  Newspaper,
  ShieldCheck,
  ScrollText,
  Cookie,
  Undo2,
  BookOpen
} from "lucide-react";

const legalLinks = [
  {
    href: "/privacy-policy-the-digital-uplift",
    label: "Privacy Policy",
    icon: ShieldCheck,
  },
  {
    href: "/terms-of-use-the-digital-uplift",
    label: "Terms of Use",
    icon: ScrollText,
  },
  {
    href: "/cookie-policy-the-digital-uplift",
    label: "Cookie Policy",
    icon: Cookie,
  },
  {
    href: "/refund-policy-the-digital-uplift",
    label: "Refund Policy",
    icon: Undo2,
  },
];


const companyLinks = [
  {
    href: "/about-the-digital-uplift",
    label: "About Us",
    icon: Building2,
  },
  {
    href: "/accessibility-the-digital-uplift",
    label: "Accessibility",
    icon: Info,
  },
  {
    href: "/pricing-the-digital-uplift",
    label: "Pricing",
    icon: Tag,
  },
  {
    href: "/contact-the-digital-uplift",
    label: "Contact",
    icon: Mail,
  },
  {
    href: "/faq-the-digital-uplift",
    label: "FAQ",
    icon: HelpCircle,
  },
  {
    href: "/locations-the-digital-uplift",
    label: "Locations",
    icon: MapPin,
  },
  {
    href: "/press-the-digital-uplift",
    label: "Press",
    icon: Newspaper,
  },
  {
    href: "/resources-the-digital-uplift",
    label: "Helpful Resources",
    icon: BookOpen,
  },
];


export default function Footer() {
  const mid = Math.ceil(companyLinks.length / 2);
  const col1 = companyLinks.slice(0, mid);
  const col2 = companyLinks.slice(mid);

  return (
    <footer className="border-t border-border bg-background py-8 text-sm text-muted-foreground">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-48 flex flex-col gap-8">
        {/* Middle: Link Sections */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-12">
          {/* Company Links in Two Columns */}
          <div>
            <h3 className="font-medium mb-2">Company</h3>
            <div className="grid grid-cols-2 gap-x-8">
              {[col1, col2].map((col, idx) => (
                <ul key={idx} className="space-y-1">
                  {col.map(({ href, label, icon: Icon }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center gap-2 hover:underline underline-offset-4 transition"
                      >
                        <Icon size={16} className="shrink-0" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-medium mb-2">Legal</h3>
            <ul className="space-y-1">
              {legalLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 hover:underline underline-offset-4 transition"
                  >
                    <Icon size={16} className="shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} The Digital Uplift - All rights reserved.
        </div>
      </div>
    </footer>
  );
}