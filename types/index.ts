import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  comingSoon?: boolean;
}

export interface CompetitionPreview {
  id: string;
  name: string;
  region: string;
  accent: string;
  initials: string;
}

export interface StatHighlight {
  label: string;
  value: string;
}

export interface PlayerAvatar {
  id: string;
  name: string;
  club: string;
  number: number;
  from: string;
  to: string;
}

export interface UserProfile {
  playerName: string;
  clubName: string;
  avatarId: string;
}

export interface LiveMatch {
  id: string;
  league: string;
  status: "LIVE" | "HT" | "FT";
  minute?: string;
  homeTeam: string;
  homeScore: number;
  homeAccent: string;
  awayTeam: string;
  awayScore: number;
  awayAccent: string;
}

export interface SpotlightPlayer {
  name: string;
  club: string;
  position: string;
  rating: number;
  goals: number;
  assists: number;
  accentFrom: string;
  accentTo: string;
}

export interface NewsPreviewItem {
  id: string;
  title: string;
  category: string;
  description: string;
  accent: string;
}

export interface LeaderboardPreviewItem {
  rank: 1 | 2 | 3;
  name: string;
  level: number;
  stars: number;
  medal: string;
}

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface LockedReward {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface DailySnapshotCard {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  heading: string;
  body: string;
  meta?: string;
}

export interface HallOfFameLegend {
  id: string;
  name: string;
  nationality: string;
  position: string;
  accentFrom: string;
  accentTo: string;
  caption?: string;
  featured?: boolean;
}

export interface VisionStat {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
  accent: string;
}
