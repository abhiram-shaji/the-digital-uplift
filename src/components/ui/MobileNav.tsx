"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { useBookingModal } from "@/components/ui/BookingModalContext";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { setOpen: openModal } = useBookingModal(); // Access modal trigger

  const handleNavClick = () => {
    setOpen(false);
  };

  const handleBookNow = () => {
    setOpen(false);
    openModal(true);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Toggle navigation menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-screen h-screen p-0 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <Link
              href="/#services"
              className="text-lg font-medium"
              onClick={handleNavClick}
            >
              Services
            </Link>
            <Link
              href="/#works"
              className="text-lg font-medium"
              onClick={handleNavClick}
            >
              Works
            </Link>
          <Link
            href="/#about"
            className="text-lg font-medium"
            onClick={handleNavClick}
          >
            About
          </Link>
          <Link
            href="/#faq"
            className="text-lg font-medium"
            onClick={handleNavClick}
          >
            FAQ
          </Link>

            <Button size="lg" onClick={handleBookNow} aria-label="Book Now Button Mobile">
              Book Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
