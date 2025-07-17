// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full border-b border-border bg-background z-50 transition-transform duration-300",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="The Digital Uplift logo"
            className="h-8 w-auto sm:h-10 dark:invert"
          />
          <span className="text-lg font-semibold tracking-tight">
            The Digital Uplift
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <DesktopNav />

          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
