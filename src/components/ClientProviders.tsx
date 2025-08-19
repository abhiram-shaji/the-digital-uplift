"use client";

import React from "react";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  // Add any global client-side providers here (e.g. React Query, Theme, etc.)
  return <>{children}</>;
}
