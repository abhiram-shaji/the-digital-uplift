// app/components/BotpressWebchatEmbed.tsx 
"use client"; 
 
import Script from "next/script"; 
 
const INJECT_SRC = "https://cdn.botpress.cloud/webchat/v3.2/inject.js"; 
const EMBED_SRC = 
  process.env.NEXT_PUBLIC_BOTPRESS_EMBED_JS || 
  "https://files.bpcontent.cloud/2025/08/13/04/20250813040034-59CES7XQ.js"; 
 
export default function BotpressWebchatEmbed() { 
  return ( 
    <> 
      {/* Inject the webchat runtime first */} 
      <Script src={INJECT_SRC} strategy="afterInteractive" /> 
      {/* Then load your shareable embed which auto-initializes with your configUrl + Custom CSS */} 
      <Script src={EMBED_SRC} strategy="afterInteractive" /> 
      {/* Proactive trigger script */} 
      <Script id="bp-proactive-trigger" strategy="afterInteractive"> 
        {` 
          window.botpressWebChat.onEvent( 
            function () { 
              window.botpressWebChat.sendEvent({ 
                type: 'proactive-trigger', 
                channel: 'web', 
                payload: {} 
              }); 
            }, 
            ['webchat:opened'] 
          ); 
        `} 
      </Script> 
    </> 
  ); 
} 
