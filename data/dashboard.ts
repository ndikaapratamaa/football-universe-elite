import type { LiveMatch, SpotlightPlayer, NewsPreviewItem, LeaderboardPreviewItem } from "@/types";

export const LIVE_MATCHES: LiveMatch[] = [
  {
    id: "m1",
    league: "La Liga",
    status: "LIVE",
    minute: "67'",
    homeTeam: "Barcelona",
    homeScore: 2,
    homeAccent: "#a50044",
    awayTeam: "Real Madrid",
    awayScore: 1,
    awayAccent: "#febe10",
  },
  {
    id: "m2",
    league: "Premier League",
    status: "LIVE",
    minute: "23'",
    homeTeam: "Manchester City",
    homeScore: 3,
    homeAccent: "#6cabdd",
    awayTeam: "Chelsea",
    awayScore: 0,
    awayAccent: "#034694",
  },
  {
    id: "m3",
    league: "Bundesliga",
    status: "HT",
    minute: "45'",
    homeTeam: "Bayern Munich",
    homeScore: 1,
    homeAccent: "#dc052d",
    awayTeam: "Dortmund",
    awayScore: 1,
    awayAccent: "#fde100",
  },
  {
    id: "m4",
    league: "Serie A",
    status: "LIVE",
    minute: "58'",
    homeTeam: "Juventus",
    homeScore: 2,
    homeAccent: "#000000",
    awayTeam: "AC Milan",
    awayScore: 2,
    awayAccent: "#fb090b",
  },
  {
    id: "m5",
    league: "Ligue 1",
    status: "FT",
    homeTeam: "PSG",
    homeScore: 4,
    homeAccent: "#004170",
    awayTeam: "Marseille",
    awayScore: 1,
    awayAccent: "#2fa7df",
  },
];

export const SPOTLIGHT_PLAYER: SpotlightPlayer = {
  name: "Lamine Yamal",
  club: "Barcelona",
  position: "Right Winger",
  rating: 91,
  goals: 18,
  assists: 21,
  accentFrom: "#22C55E",
  accentTo: "#2563EB",
};

export const NEWS_PREVIEW: NewsPreviewItem[] = [
  {
    id: "n1",
    title: "Title race goes to the final matchday after dramatic weekend",
    category: "Breaking",
    description: "Two points now separate the top three sides with just one round left to play.",
    accent: "#ef4444",
  },
  {
    id: "n2",
    title: "Rising teenage midfielder linked with blockbuster summer switch",
    category: "Transfer",
    description: "Multiple European giants are reportedly monitoring the 17-year-old's rapid progress.",
    accent: "#2563EB",
  },
  {
    id: "n3",
    title: "Golden Boot race tightens as three strikers level on goals",
    category: "Trending",
    description: "A thrilling final stretch of the season awaits as the scoring charts stay razor close.",
    accent: "#FACC15",
  },
];

export const LEADERBOARD_PREVIEW: LeaderboardPreviewItem[] = [
  { rank: 1, name: "Andika FC", level: 25, stars: 5, medal: "🥇" },
  { rank: 2, name: "Madrid Kings", level: 22, stars: 4, medal: "🥈" },
  { rank: 3, name: "Elite United", level: 20, stars: 4, medal: "🥉" },
];
