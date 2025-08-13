// app/components/BotpressWebchatEmbed.tsx
"use client";

import Script from "next/script";

const INJECT_SRC = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
// your generated embed JS (from Botpress shareable):
const EMBED_SRC =
  process.env.NEXT_PUBLIC_BOTPRESS_EMBED_JS ||
  "https://files.bpcontent.cloud/2025/08/13/04/20250813040034-59CES7XQ.js";

export default function BotpressWebchatEmbed() {
  return (
    <>
      {/* inject the webchat runtime first */}
      <Script src={INJECT_SRC} strategy="afterInteractive" />

      {/* then load your shareable embed which auto-initializes with your configUrl + Custom CSS */}
      <Script src={EMBED_SRC} strategy="afterInteractive" />
    </>
  );
}
