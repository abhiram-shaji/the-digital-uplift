"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
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
        <Link href="/" className="text-lg font-semibold tracking-tight">
          The Digital Uplift
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#services" className="text-sm hover:underline">
            Services
          </Link>
          <Link href="#works" className="text-sm hover:underline">
            Works
          </Link>
          <Link href="#about" className="text-sm hover:underline">
            About
          </Link>
          <Button size="sm" asChild>
            <a href="#book">Book Now</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
