import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon/coming-soon";
import { AppShell } from "@/components/layout/app-shell";
import { AmbientLighting } from "@/components/layout/ambient-lighting";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { LiveMatchTicker } from "@/components/sections/live-match-ticker";
import { QuickStats } from "@/components/sections/quick-stats";
import { PlayerSpotlight } from "@/components/sections/player-spotlight";
import { DailyChallenge } from "@/components/sections/daily-challenge";
import { FeaturePreview } from "@/components/sections/feature-preview";
import { CompetitionsPreview } from "@/components/sections/competitions-preview";
import { NewsPreview } from "@/components/sections/news-preview";
import { LeaderboardPreview } from "@/components/sections/leaderboard-preview";
import { EliteLabs } from "@/components/sections/elite-labs";
import { JourneyTimeline } from "@/components/sections/your-journey";
import { EliteLocker } from "@/components/sections/elite-locker";
import { FootballUniverseToday } from "@/components/sections/football-universe-today";
import { HallOfFame } from "@/components/sections/hall-of-fame";
import { UltimateChallenge } from "@/components/sections/ultimate-challenge";
import { CommunityPreview } from "@/components/sections/community-preview";
import { FootballQuote } from "@/components/sections/football-quote";
import { FootballUniverseInNumbers } from "@/components/sections/football-universe-in-numbers";
import { WhyFootballUniverse } from "@/components/sections/why-football-universe";

// Saklar halaman "akan datang".
// Default: AKTIF (pengunjung melihat halaman "akan datang").
// Saat web resmi dibuka: di Vercel -> Settings -> Environment Variables,
// tambahkan NEXT_PUBLIC_COMING_SOON = false, lalu Redeploy.
const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON !== "false";

export function generateMetadata(): Metadata {
  if (!COMING_SOON) return {};
  return {
    title: "Football Universe Elite — Segera Hadir",
    description: "Football Universe Elite sedang dikerjakan. Segera hadir.",
  };
}

export default function Home() {
  if (COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <AppShell>
      <main className="min-h-screen bg-background">
        <AmbientLighting />
        <Navbar />
        <Hero />
        <LiveMatchTicker />
        <QuickStats />
        <PlayerSpotlight />
        <DailyChallenge />
        <FeaturePreview />
        <CompetitionsPreview />
        <NewsPreview />
        <LeaderboardPreview />
        <EliteLabs />
        <JourneyTimeline />
        <EliteLocker />
        <FootballUniverseToday />
        <HallOfFame />
        <UltimateChallenge />
        <CommunityPreview />
        <FootballQuote />
        <FootballUniverseInNumbers />
        <WhyFootballUniverse />
        <Footer />
      </main>
    </AppShell>
  );
}
