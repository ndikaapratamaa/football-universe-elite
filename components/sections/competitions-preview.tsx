"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BadgePill } from "@/components/ui/badge-pill";
import type { CompetitionPreview } from "@/types";

const COMPETITIONS: (CompetitionPreview & { tilt: number; lift: boolean })[] = [
  { id: "epl", name: "Premier League", region: "England", accent: "#3b0e6d", initials: "PL", tilt: -3, lift: false },
  { id: "laliga", name: "La Liga", region: "Spain", accent: "#ee2523", initials: "LL", tilt: 2, lift: true },
  { id: "ucl", name: "Champions League", region: "Europe", accent: "#0e1e5b", initials: "UCL", tilt: -2, lift: false },
  { id: "wc", name: "World Cup", region: "FIFA", accent: "#FACC15", initials: "WC", tilt: 3, lift: true },
  { id: "bund", name: "Bundesliga", region: "Germany", accent: "#d20515", initials: "BL", tilt: -2, lift: false },
  { id: "seriea", name: "Serie A", region: "Italy", accent: "#024b93", initials: "SA", tilt: 2, lift: true },
];

export function CompetitionsPreview() {
  return (
    <section id="competitions" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.08),transparent_70%)]" />
      <div className="container">
        <div className="mb-4 text-center">
          <BadgePill tone="gold" className="mx-auto">
            Global Football
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Top Competitions</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Follow the tournaments that matter, from domestic leagues to the World Cup.
          </p>
        </div>
      </div>

      {/* Horizontal collectible-card rail, deliberately off-grid */}
      <div className="scrollbar-none mt-12 flex gap-6 overflow-x-auto px-6 pb-6 sm:justify-center sm:px-0">
        {COMPETITIONS.map((comp, i) => (
          <motion.div
            key={comp.id}
            initial={{ opacity: 0, y: 30, rotate: comp.tilt }}
            whileInView={{ opacity: 1, y: 0, rotate: comp.tilt }}
            whileHover={{ rotate: 0, y: -10, scale: 1.04 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`card-tilt group relative w-44 shrink-0 overflow-hidden rounded-3xl border border-white/10 p-6 text-center shadow-card backdrop-blur-sm transition-shadow duration-500 hover:shadow-card-hover ${
              comp.lift ? "mt-0" : "mt-8"
            }`}
            style={{ background: `linear-gradient(160deg, ${comp.accent}55, #10131a 75%)` }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 font-display text-base font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${comp.accent}, ${comp.accent}99)` }}
            >
              {comp.initials}
            </div>
            <p className="mt-4 font-semibold text-white">{comp.name}</p>
            <p className="mt-1 text-xs text-white/60">{comp.region}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
