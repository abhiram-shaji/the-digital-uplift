'use client';

import Script from 'next/script';

const clientId = 'bbd2623c-885d-43ea-be09-3622056ccc0c';

export default function BotpressWebchat() {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v1/inject.js"
        strategy="afterInteractive"
      />
      <Script id="botpress-webchat-init" strategy="afterInteractive">
        {`
          window.botpressWebChat.init({
            clientId: '${clientId}'
          });
        `}
      </Script>
    </>
  );
}
