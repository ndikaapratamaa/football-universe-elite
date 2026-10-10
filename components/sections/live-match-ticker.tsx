"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { LIVE_MATCHES } from "@/data/dashboard";

export function LiveMatchTicker() {
  const [featured, ...rest] = LIVE_MATCHES;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_15%_10%,rgba(34,197,94,0.07),transparent_70%)]" />
      <div className="container">
        <BadgePill tone="primary">
          <Radio size={12} className="animate-pulse" /> Live Now
        </BadgePill>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Match of the Day — oversized feature */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-premium border border-white/10 p-8 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:shadow-card-hover md:p-12"
            style={{
              background: `linear-gradient(115deg, ${featured.homeAccent}33 0%, #0d1016 45%, ${featured.awayAccent}33 100%)`,
            }}
          >
            <div className="relative flex items-center justify-between text-xs font-semibold uppercase tracking-label text-white/70">
              <span>{featured.league} · Match of the Day</span>
              <span className="flex items-center gap-1.5 rounded-full bg-crimson/20 px-2.5 py-1 text-crimson">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-crimson" />
                </span>
                {featured.minute}
              </span>
            </div>

            <div className="relative mt-10 flex items-center justify-between gap-4">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black shadow-glow md:h-20 md:w-20">
                  <Image src="/tanda-tanya.png" alt={featured.homeTeam} fill className="object-cover" />
                </div>
                <span className="max-w-[110px] text-sm font-semibold text-white">{featured.homeTeam}</span>
              </div>

              <div className="scoreboard-text font-display text-6xl font-extrabold text-white md:text-7xl">
                {featured.homeScore}
                <span className="mx-2 text-white/30">–</span>
                {featured.awayScore}
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black shadow-glow md:h-20 md:w-20">
                  <Image src="/tanda-tanya.png" alt={featured.awayTeam} fill className="object-cover" />
                </div>
                <span className="max-w-[110px] text-sm font-semibold text-white">{featured.awayTeam}</span>
              </div>
            </div>
          </motion.div>

          {/* Filmstrip of the rest — compact score rows, not cards */}
          <div className="flex flex-col divide-y divide-white/8 rounded-premium border border-white/10 bg-card/40">
            {rest.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-white/5"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-label text-muted">{match.league}</p>
                  <p className="mt-1 truncate text-sm font-semibold text-white">
                    {match.homeTeam} <span className="text-muted">vs</span> {match.awayTeam}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="scoreboard-text font-display text-lg font-bold text-white">
                    {match.homeScore}–{match.awayScore}
                  </span>
                  <span
                    className={
                      match.status === "LIVE"
                        ? "rounded-full bg-crimson/15 px-2 py-0.5 text-[10px] font-bold text-crimson"
                        : "rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-bold text-muted"
                    }
                  >
                    {match.status === "LIVE" ? match.minute : match.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}