"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Video } from "lucide-react";

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"select" | "google">("select");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="text-xl px-8 py-4">Book Now</Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl">
        {step === "select" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Book Your Free Appointment</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {/* Google Meet option */}
              <div
                onClick={() => setStep("google")}
                className="cursor-pointer border rounded-lg p-6 hover:bg-muted transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Google Meet</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Join a video call by selecting a time that works for you.
                </p>
              </div>

              {/* Phone Call option */}
              <div className="cursor-not-allowed border rounded-lg p-6 opacity-60">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Phone Call (Coming Soon)</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Talk to us directly via phone. This option will be available soon.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">Choose a time for our Google Meet</DialogTitle>
            </DialogHeader>
            <iframe
              src="https://calendar.app.google/8K3DK5XKHTbJgvhX7"
              className="w-full h-[600px] border rounded-md"
              loading="lazy"
            ></iframe>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
