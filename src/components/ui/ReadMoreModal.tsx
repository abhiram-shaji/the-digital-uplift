"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ReadMoreModalProps {
  title: string;
  content: string;
}

export function ReadMoreModal({ title, content }: ReadMoreModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4" aria-label="Read more button">
          Read More
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-h-[80vh] max-w-[80vw] overflow-y-auto"
        style={{ overscrollBehavior: "contain" }}
      >
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          {content.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
