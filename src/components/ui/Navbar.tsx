import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background">
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
