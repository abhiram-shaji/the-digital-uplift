// components/MobileNav.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-screen h-screen p-0 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <Link href="#services" className="text-lg font-medium" passHref>
              Services
            </Link>
            <Link href="#works" className="text-lg font-medium" passHref>
              Works
            </Link>
            <Link href="#about" className="text-lg font-medium" passHref>
              About
            </Link>
            <Button size="lg" asChild>
              <a href="#book">Book Now</a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
