// app/components/BotpressWebchatEmbed.tsx
"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat?: {
      sendEvent: (evt: any) => void;
      onEvent: (fn: (...args: any[]) => void, events: string[]) => void;
    };
  }
}

const INJECT_SRC = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
const EMBED_SRC =
  process.env.NEXT_PUBLIC_BOTPRESS_EMBED_JS ||
  "https://files.bpcontent.cloud/2025/08/13/04/20250813040034-59CES7XQ.js";

export default function BotpressWebchatEmbed() {
  useEffect(() => {
    // if the script created the object already, hook immediately
    if (window.botpressWebChat) {
      attachProactiveOpen();
    }
  }, []);

  function attachProactiveOpen() {
    // wait until the widget is fully ready
    window.botpressWebChat?.onEvent(() => {
      // open the widget
      window.botpressWebChat?.sendEvent({ type: "show" });

      // fire your proactive trigger (make sure your flow listens for this)
      window.botpressWebChat?.sendEvent({
        type: "proactive-trigger",
        channel: "web",
        payload: { text: "Hey! What's your name?" },
      });
    }, ["webchat:ready"]);
  }

  return (
    <>
      <Script src={INJECT_SRC} strategy="afterInteractive" />
      <Script
        src={EMBED_SRC}
        strategy="afterInteractive"
        onLoad={attachProactiveOpen}
      />
    </>
  );
}
