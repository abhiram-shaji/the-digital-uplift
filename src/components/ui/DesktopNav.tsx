// components/DesktopNav.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
];

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative text-base font-medium text-foreground transition-colors duration-300 hover:text-primary"
        >
          <span className="hover-underline">{item.label}</span>
        </Link>
      ))}

      <Button size="sm" asChild className="ml-2">
        <a href="#book">Book Now</a>
      </Button>

      <style jsx>{`
        .hover-underline {
          position: relative;
        }

        .hover-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1.5px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        .hover-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
}
