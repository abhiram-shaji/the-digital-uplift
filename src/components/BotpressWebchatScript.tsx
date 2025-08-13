"use client";

import Script from "next/script";

declare global {
  interface Window {
    botpress?: {
      init: (config: Record<string, unknown>) => void;
    };
  }
}

const BOT_ID = process.env.NEXT_PUBLIC_BOTPRESS_BOT_ID!;
const CLIENT_ID = process.env.NEXT_PUBLIC_BOTPRESS_CLIENT_ID!;

export default function BotpressWebchatScript() {
  return (
    <Script
      src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.botpress?.init({
          botId: BOT_ID,
          clientId: CLIENT_ID,
          configuration: {
            botName: "SupportBot",
            botAvatar: "/android-chrome-192x192.png",
            botDescription: "Your virtual assistant for all things support.",
            phone: { title: "Call Support", link: "tel:+1234567890" },
            email: { title: "Email Us", link: "mailto:support@example.com" },
            website: { title: "Visit our website", link: "https://www.thedigitaluplift.ca/" },
            termsOfService: { title: "Terms of Service", link: "https://www.thedigitaluplift.ca/terms-of-use-the-digital-uplift" },
            privacyPolicy: { title: "Privacy Policy", link: "https://www.thedigitaluplift.ca/privacy-policy-the-digital-uplift" },
          },
        });
      }}
    />
  );
}
