// src/components/ClientProviders.tsx
"use client";

import BotpressWebchatScript from "@/components/BotpressWebchatScript";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BotpressWebchatScript />
    </>
  );
}
