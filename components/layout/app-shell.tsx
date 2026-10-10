"use client";

import * as React from "react";
import { WelcomeScreen } from "@/components/onboarding/welcome-screen";
import { useProfile } from "@/hooks/use-profile";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { isOnboarded, isHydrated } = useProfile();

  if (!isHydrated) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!isOnboarded) {
    return <WelcomeScreen />;
  }

  return <>{children}</>;
}
