# Football Universe Elite — Premium Foundation & Landing Page

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React · next-themes

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first build so `next/font` can fetch Inter & Poppins from Google Fonts.

```bash
npm run build   # production build
npm run start   # run the production build
```

Ready to deploy on Vercel with zero extra config — just import the repo.

## Structure

```
app/
  layout.tsx        Root layout, fonts, ThemeProvider
  page.tsx           Assembles the landing page sections
  globals.css        Design tokens & premium utility classes (glass, gradients, stadium bg)
components/
  layout/            Navbar, Footer, ThemeProvider
  sections/           Hero, FeaturePreview, CompetitionsPreview
  ui/                 Reusable primitives: Button, GlassCard, BadgePill
lib/
  utils.ts           `cn()` class-merge helper (shadcn convention)
types/
  index.ts            Shared TypeScript interfaces
```

## What's included

- Sticky, blur-on-scroll Navbar with mobile hamburger menu and dark mode toggle
- Full-screen Hero with stadium-night ambient background, floating illustration, glow, particles and decorative rings
- Feature Preview: 4 gradient-border glass cards (Quiz, Statistics, Competitions, Mini Games)
- Competitions Preview: Premier League, La Liga, Champions League, World Cup
- Premium Footer

## Intentionally not built yet

Quiz, Leaderboard, Profile/Login and other advanced features are out of scope for this pass — the nav links point to in-page anchors as placeholders. Say the word when you want the next section built.
