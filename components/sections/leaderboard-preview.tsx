"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowRight, Star } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { LEADERBOARD_PREVIEW } from "@/data/dashboard";

const podiumHeight: Record<number, string> = {
  1: "h-56 md:h-64",
  2: "h-44 md:h-52",
  3: "h-36 md:h-44",
};

const podiumAccent: Record<number, string> = {
  1: "#FACC15",
  2: "#94A3B8",
  3: "#f97316",
};

// Visual podium order: 2nd — 1st — 3rd
const PODIUM_ORDER = [2, 1, 3] as const;

export function LeaderboardPreview() {
  const byRank = Object.fromEntries(LEADERBOARD_PREVIEW.map((e) => [e.rank, e]));

  return (
    <section id="leaderboard" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 bg-gold/10 blur-[120px]" />
      <div className="container relative">
        <div className="mb-14 text-center">
          <BadgePill tone="gold" className="mx-auto">
            <Trophy size={12} /> Top Ranked
          </BadgePill>
          <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">Leaderboard</h2>
        </div>

        <div className="mx-auto flex max-w-2xl items-end justify-center gap-4 md:gap-6">
          {PODIUM_ORDER.map((rank, i) => {
            const entry = byRank[rank];
            if (!entry) return null;
            const accent = podiumAccent[rank];

            return (
              <motion.div
                key={rank}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-1 flex-col items-center"
              >
                <span className="text-2xl">{entry.medal}</span>
                <div
                  className="mt-2 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white shadow-glow md:h-16 md:w-16"
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accent}99)` }}
                >
                  {entry.name.slice(0, 2).toUpperCase()}
                </div>
                <p className="mt-3 truncate text-center font-semibold text-white">{entry.name}</p>
                <p className="text-xs text-muted">Level {entry.level}</p>
                <div className="mt-1 flex items-center gap-0.5">
                  {Array.from({ length: entry.stars }).map((_, s) => (
                    <Star key={s} size={11} className="fill-gold text-gold" />
                  ))}
                </div>

                <div
                  className={`mt-4 flex w-full items-start justify-center rounded-t-2xl border border-b-0 border-white/10 pt-4 ${podiumHeight[rank]}`}
                  style={{ background: `linear-gradient(180deg, ${accent}22, #0a0d13)` }}
                >
                  <span
                    className="scoreboard-text font-display text-4xl font-extrabold md:text-5xl"
                    style={{ color: accent }}
                  >
                    {rank}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button variant="outline" size="lg">
              View Full Leaderboard <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
