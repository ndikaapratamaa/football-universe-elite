"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Lock, Sparkles, Footprints, Crown, Layers, Flame, Frame, Gift } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import type { LockedReward } from "@/types";

const LOCKED_REWARDS: LockedReward[] = [
  {
    id: "golden-boot",
    title: "Golden Boot Badge",
    description: "Legendary achievement for football experts.",
    icon: Footprints,
    accent: "#FACC15",
  },
  {
    id: "elite-crown",
    title: "Elite Crown",
    description: "Exclusive cosmetic for top-level members.",
    icon: Crown,
    accent: "#FACC15",
  },
  {
    id: "legendary-card",
    title: "Legendary Player Card",
    description: "Unlock rare collectible football cards.",
    icon: Layers,
    accent: "#2563EB",
  },
  {
    id: "ultimate-quiz",
    title: "Ultimate Quiz",
    description: "The hardest football challenge.",
    icon: Flame,
    accent: "#EF4444",
  },
  {
    id: "elite-frame",
    title: "Elite Profile Frame",
    description: "Premium profile customization.",
    icon: Frame,
    accent: "#22C55E",
  },
  {
    id: "mystery-reward",
    title: "Mystery Reward",
    description: "A secret reward waiting for future updates.",
    icon: Gift,
    accent: "#94A3B8",
  },
];

function LockedCard({ reward, index }: { reward: LockedReward; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <GlassCard gradientBorder className="group relative flex h-full flex-col overflow-hidden p-6">
        {/* subtle sparkle sweep across the card — very quiet, on hover only */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer"
        />

        <div className="flex items-start justify-between">
          <div
            className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${reward.accent}26, ${reward.accent}0a)` }}
          >
            <reward.icon size={22} style={{ color: reward.accent }} className="opacity-80" />
            <span
              aria-hidden
              className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-card"
            >
              <Lock size={10} className="text-gold" />
            </span>
          </div>
          <BadgePill tone="gold" className="shrink-0">
            Locked
          </BadgePill>
        </div>

        <h3 className="mt-5 font-display text-lg font-semibold text-white">{reward.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{reward.description}</p>
      </GlassCard>
    </motion.div>
  );
}

export function EliteLocker() {
  return (
    <section id="elite-locker" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(250,204,21,0.05),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_35%_at_10%_100%,rgba(34,197,94,0.05),transparent_70%)]" />

      <div className="container">
        <div className="mb-12 text-center">
          <BadgePill tone="gold" className="mx-auto">
            <Lock size={12} /> Elite Locker
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Rewards worth chasing
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-balance text-muted">
            A glimpse behind the vault. Every badge, card and frame here will be earned — not given.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCKED_REWARDS.map((reward, i) => (
            <LockedCard key={reward.id} reward={reward} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex items-center justify-center gap-2 text-center font-display text-lg font-medium text-white/70 md:text-xl"
        >
          <Sparkles size={16} className="text-gold" />
          More rewards are waiting to be discovered.
        </motion.p>
      </div>
    </section>
  );
}
