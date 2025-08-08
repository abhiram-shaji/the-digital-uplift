"use client";

import { useBookingModal } from "./BookingModalContext";
import { Button } from "@/components/ui/button";

export default function BookingModalTrigger() {
  const { setOpen } = useBookingModal();

  return (
    <Button onClick={() => setOpen(true)} aria-label="Book Now Button">
      Book Meeting
    </Button>
  );
}
