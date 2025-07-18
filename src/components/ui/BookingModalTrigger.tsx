"use client";

import { useBookingModal } from "./BookingModalContext";
import { Button } from "@/components/ui/button";

export default function BookingModalTrigger() {
  const { setOpen } = useBookingModal();

  return (
    <Button variant="animated" onClick={() => setOpen(true)} aria-label="Book Now Button">
      Book Now
    </Button>
  );
}
