"use client";

import { useBookingModal } from "./BookingModalContext";
import { Button } from "@/components/ui/button";

export default function BookingModalTrigger() {
  const { setOpen } = useBookingModal();

  return (
    <Button className="text-xl" onClick={() => setOpen(true)} aria-label="Book Now Button">
      Book Free Meeting
    </Button>
  );
}
