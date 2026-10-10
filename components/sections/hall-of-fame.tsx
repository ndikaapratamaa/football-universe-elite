"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Crown, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import type { HallOfFameLegend } from "@/types";

const LEGENDS: HallOfFameLegend[] = [
  {
    id: "featured-legend",
    name: "Pelé",
    nationality: "Brazil",
    position: "Forward",
    accentFrom: "#22C55E",
    accentTo: "#facc15",
    caption: "The player who changed football forever.",
    featured: true,
  },
  {
    id: "maradona",
    name: "Diego Maradona",
    nationality: "Argentina",
    position: "Forward",
    accentFrom: "#2563EB",
    accentTo: "#60a5fa",
  },
  {
    id: "cruyff",
    name: "Johan Cruyff",
    nationality: "Netherlands",
    position: "Forward",
    accentFrom: "#FACC15",
    accentTo: "#f97316",
  },
  {
    id: "beckenbauer",
    name: "Franz Beckenbauer",
    nationality: "Germany",
    position: "Defender",
    accentFrom: "#94A3B8",
    accentTo: "#475569",
  },
  {
    id: "zidane",
    name: "Zinedine Zidane",
    nationality: "France",
    position: "Midfielder",
    accentFrom: "#EF4444",
    accentTo: "#2563EB",
  },
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

function FeaturedLegendCard({ legend }: { legend: HallOfFameLegend }) {
  return (
    <GlassCard
      hover={false}
      className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden p-0 md:col-span-2 lg:col-span-1"
    >
      {/* portrait surface — stylized monogram standing in for a photographic portrait */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        style={{ background: `linear-gradient(160deg, ${legend.accentFrom}33, #0a0d13 70%)` }}
      >
        <div
          className="ghost-number pointer-events-none absolute -right-6 -top-10 select-none text-[13rem] leading-none opacity-90 sm:text-[16rem]"
          style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.10)" }}
        >
          {initialsOf(legend.name)}
        </div>
      </div>

      {/* gradient overlay for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/50 to-transparent" />
      <div className="vignette pointer-events-none absolute inset-0" />

      <div className="relative z-10 p-7 md:p-9">
        <BadgePill tone="gold">
          <Crown size={12} /> Hall of Fame
        </BadgePill>
        <h3 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
          {legend.name}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {legend.nationality} · {legend.position}
        </p>
        {legend.caption && (
          <p className="mt-4 max-w-sm font-display text-base italic leading-relaxed text-white/80 md:text-lg">
            &ldquo;{legend.caption}&rdquo;
          </p>
        )}
      </div>
    </GlassCard>
  );
}

function LegendCard({ legend, index }: { legend: HallOfFameLegend; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="h-full"
    >
      <GlassCard
        hover={false}
        className="group relative flex h-full min-h-[190px] flex-col justify-end overflow-hidden p-0"
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          style={{ background: `linear-gradient(160deg, ${legend.accentFrom}26, #0a0d13 75%)` }}
        >
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-5xl font-extrabold text-white/10"
            aria-hidden
          >
            {initialsOf(legend.name)}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/40 to-transparent" />

        <div className="relative z-10 flex items-start justify-end p-4">
          <BadgePill tone="gold" className="shrink-0">
            Coming Soon
          </BadgePill>
        </div>
        <div className="relative z-10 flex-1" />
        <div className="relative z-10 p-4 pt-0">
          <h4 className="font-display text-sm font-semibold text-white">{legend.name}</h4>
          <p className="mt-0.5 text-xs text-muted">{legend.nationality}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function HallOfFame() {
  const featured = LEGENDS.find((l) => l.featured)!;
  const others = LEGENDS.filter((l) => !l.featured);

  return (
    <section id="hall-of-fame" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(250,204,21,0.05),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_35%_at_10%_100%,rgba(34,197,94,0.06),transparent_70%)]" />

      <div className="container">
        <div className="mb-12 text-center">
          <BadgePill tone="gold" className="mx-auto">
            <Star size={12} /> Legends
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Football Hall of Fame
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-balance text-muted">
            A tribute to the players who defined the game and inspired generations of fans.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <FeaturedLegendCard legend={featured} />
          </motion.div>

          {others.map((legend, i) => (
            <LegendCard key={legend.id} legend={legend} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center font-display text-lg font-medium text-white/70 md:text-xl"
        >
          Every legend started with a dream.
        </motion.p>
      </div>
    </section>
  );
}
