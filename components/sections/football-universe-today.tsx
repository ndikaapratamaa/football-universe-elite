"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CalendarDays, HelpCircle, Lightbulb, TrendingUp, Quote as QuoteIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import type { DailySnapshotCard } from "@/types";

const SNAPSHOT_CARDS: DailySnapshotCard[] = [
  {
    id: "todays-quiz",
    label: "Today's Quiz",
    icon: HelpCircle,
    accent: "#22C55E",
    heading: "Which club has won the most Champions League titles?",
    body: "5 questions · World football history",
    meta: "Preview",
  },
  {
    id: "did-you-know",
    label: "Did You Know?",
    icon: Lightbulb,
    accent: "#FACC15",
    heading: "The fastest recorded goal was scored in just 2.4 seconds.",
    body: "A quick daily bite of football trivia.",
    meta: "Fact",
  },
  {
    id: "trending-topic",
    label: "Trending Topic",
    icon: TrendingUp,
    accent: "#2563EB",
    heading: "Ballon d'Or Race",
    body: "The conversation everyone in football is following right now.",
    meta: "Hot",
  },
  {
    id: "quote-of-day",
    label: "Quote of the Day",
    icon: QuoteIcon,
    accent: "#EF4444",
    heading: "Football is played with the head. Your feet are just the tools.",
    body: "A timeless reminder of the game's true nature.",
    meta: "Wisdom",
  },
];

function SnapshotCard({ card, index }: { card: DailySnapshotCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="h-full"
    >
      <GlassCard gradientBorder className="group relative flex h-full flex-col overflow-hidden p-6">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: card.accent }}
        />

        <div className="flex items-start justify-between">
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${card.accent}26, ${card.accent}0a)` }}
          >
            <card.icon size={22} style={{ color: card.accent }} />
          </div>
          {card.meta && (
            <BadgePill tone="secondary" className="shrink-0">
              {card.meta}
            </BadgePill>
          )}
        </div>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-label text-muted">{card.label}</p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white">{card.heading}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.body}</p>
      </GlassCard>
    </motion.div>
  );
}

export function FootballUniverseToday() {
  return (
    <section id="today" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_35%_at_90%_100%,rgba(34,197,94,0.05),transparent_70%)]" />

      <div className="container">
        <div className="mb-12 text-center">
          <BadgePill tone="primary" className="mx-auto">
            <CalendarDays size={12} /> Daily Snapshot
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Football Universe Today
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-balance text-muted">
            A quick daily pulse of the football world — before you dive into the rest of the Universe.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SNAPSHOT_CARDS.map((card, i) => (
            <SnapshotCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
