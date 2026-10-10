"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Award, Gamepad2, HeartHandshake, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import type { VisionStat } from "@/types";

const VISION_STATS: VisionStat[] = [
  {
    id: "quiz-categories",
    value: "25+",
    label: "Expert Quiz Categories",
    icon: BrainCircuit,
    accent: "#22C55E",
  },
  {
    id: "achievements",
    value: "100+",
    label: "Achievements Planned",
    icon: Award,
    accent: "#FACC15",
  },
  {
    id: "mini-games",
    value: "50+",
    label: "Mini Games Planned",
    icon: Gamepad2,
    accent: "#2563EB",
  },
  {
    id: "passion",
    value: "Unlimited",
    label: "Football Passion",
    icon: HeartHandshake,
    accent: "#EF4444",
  },
];

export function FootballUniverseInNumbers() {
  return (
    <section id="numbers" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(34,197,94,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_35%_at_90%_100%,rgba(250,204,21,0.05),transparent_70%)]" />

      <div className="container">
        <div className="mb-12 text-center">
          <BadgePill tone="primary" className="mx-auto">
            <Sparkles size={12} /> Our Vision
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Football Universe in Numbers
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-balance text-muted">
            Not live stats — this is the scale of what we&apos;re building toward.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VISION_STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard gradientBorder className="group flex h-full flex-col items-center p-7 text-center">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${stat.accent}26, ${stat.accent}0a)` }}
                >
                  <stat.icon size={22} style={{ color: stat.accent }} />
                </div>

                <p className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
