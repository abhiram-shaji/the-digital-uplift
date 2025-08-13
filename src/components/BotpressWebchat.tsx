// src/components/BotpressWebchat.tsx
"use client";

import { useEffect, useState } from "react";

export default function BotpressWebchat() {
  const [Comp, setComp] = useState<null | React.ComponentType>(null);

  useEffect(() => {
    let mounted = true;
    // Dynamically import ONLY on the client after hydration
    import("./BotpressWebchatInner").then((m) => {
      if (mounted) setComp(() => m.default);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Comp) return null;
  return <Comp />;
}
