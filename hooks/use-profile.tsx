"use client";

import * as React from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { AVATARS } from "@/data/avatars";
import type { UserProfile } from "@/types";

const STORAGE_KEY = "fue-profile";

const EMPTY_PROFILE: UserProfile = { playerName: "", clubName: "", avatarId: "" };

interface ProfileContextValue {
  profile: UserProfile;
  isOnboarded: boolean;
  isHydrated: boolean;
  completeOnboarding: (profile: UserProfile) => void;
  updateProfile: (profile: UserProfile) => void;
  resetProfile: () => void;
}

const ProfileContext = React.createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { value: profile, update, remove, isHydrated } = useLocalStorage<UserProfile>(
    STORAGE_KEY,
    EMPTY_PROFILE
  );

  const isOnboarded = isHydrated && Boolean(profile.playerName && profile.clubName && profile.avatarId);

  const value: ProfileContextValue = {
    profile,
    isOnboarded,
    isHydrated,
    completeOnboarding: update,
    updateProfile: update,
    resetProfile: remove,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const ctx = React.useContext(ProfileContext);
  if (!ctx) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return ctx;
}

export function useProfileAvatar() {
  const { profile } = useProfile();
  return AVATARS.find((a) => a.id === profile.avatarId) ?? AVATARS[0];
}
