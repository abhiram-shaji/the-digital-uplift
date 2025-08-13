// src/components/BotpressWebchatInner.tsx
"use client";

import { useMemo, useState } from "react";
import { Container, Header, MessageList, Composer, useWebchat, Fab } from "@botpress/webchat";

const headerConfig = {
  botName: "SupportBot",
  botAvatar: "https://cdn.botpress.cloud/bot-avatar.png",
  botDescription: "Your virtual assistant for all things support.",
  phone: { title: "Call Support", link: "tel:+1234567890" },
  email: { title: "Email Us", link: "mailto:support@example.com" },
  website: { title: "Visit our website", link: "https://www.example.com" },
  termsOfService: { title: "Terms of Service", link: "https://www.example.com/terms" },
  privacyPolicy: { title: "Privacy Policy", link: "https://www.example.com/privacy" },
};

export default function BotpressWebchatInner() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(true);
  const { client, messages, isTyping, user, clientState, newConversation } = useWebchat({
    clientId: process.env.NEXT_PUBLIC_BOTPRESS_CLIENT_ID!,
  });

  const config = {
    botName: "SupportBot",
    botAvatar: "https://picsum.photos/id/80/400",
    botDescription: "Your virtual assistant for all things support.",
  };

  const enrichedMessages = useMemo(
    () =>
      messages.map((m) => {
        const direction: "outgoing" | "incoming" | "system" =
          m.authorId === user?.userId ? "outgoing" : "incoming";
        return {
          ...m,
          direction,
          sender:
            direction === "outgoing"
              ? { name: user?.name ?? "You", avatar: user?.pictureUrl }
              : { name: config.botName ?? "Bot", avatar: config.botAvatar },
        };
      }),
    [messages, user?.userId, user?.name, user?.pictureUrl, config.botName, config.botAvatar]
  );

  return (
    <>
      <Container
        connected={clientState !== "disconnected"}
        style={{
          width: "500px",
          height: "800px",
          display: isWebchatOpen ? "flex" : "none",
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: 50,
        }}
      >
        <Header
          defaultOpen={false}
          closeWindow={() => setIsWebchatOpen(false)}
          restartConversation={newConversation}
          disabled={false}
          configuration={headerConfig}
        />
        <MessageList
          botName={config.botName}
          botDescription={config.botDescription}
          isTyping={isTyping}
          headerMessage="Chat History"
          showMarquee
          messages={enrichedMessages}
          sendMessage={client?.sendMessage}
        />
        <Composer
          disableComposer={false}
          isReadOnly={false}
          allowFileUpload
          connected={clientState !== "disconnected"}
          sendMessage={client?.sendMessage}
          uploadFile={client?.uploadFile}
          composerPlaceholder="Type a message..."
        />
      </Container>

      <Fab
        onClick={() => setIsWebchatOpen((v) => !v)}
        style={{ position: "fixed", bottom: "20px", right: "20px", width: "64px", height: "64px", zIndex: 50 }}
      />
    </>
  );
}
