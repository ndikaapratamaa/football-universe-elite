"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Zap, Award, UserCircle2, Coins, Swords, Gamepad2, FlaskConical } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import type { FeatureCard } from "@/types";

const ELITE_LABS_FEATURES: FeatureCard[] = [
  {
    id: "xp-level",
    title: "XP & Level",
    description: "Gain experience from every completed quiz and climb through ranked levels.",
    icon: Zap,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "achievements",
    title: "Achievements",
    description: "Unlock exclusive football milestones as you explore the Universe.",
    icon: Award,
    gradient: "from-gold/20 to-gold/5",
  },
  {
    id: "player-profile",
    title: "Player Profile",
    description: "Track your football journey, stats and progress in one place.",
    icon: UserCircle2,
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    id: "coins",
    title: "Coins",
    description: "Earn rewards on every win and unlock future content with them.",
    icon: Coins,
    gradient: "from-gold/20 to-gold/5",
  },
  {
    id: "quiz-arena",
    title: "Quiz Arena",
    description: "Compete head-to-head with other football fans in real time.",
    icon: Swords,
    gradient: "from-crimson/20 to-crimson/5",
  },
  {
    id: "mini-games",
    title: "Mini Games",
    description: "Enjoy quick football-based challenges between matches.",
    icon: Gamepad2,
    gradient: "from-purple-500/20 to-purple-500/5",
  },
];

export function EliteLabs() {
  return (
    <section id="elite-labs" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(250,204,21,0.05),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_35%_at_90%_100%,rgba(34,197,94,0.06),transparent_70%)]" />

      <div className="container">
        <div className="mb-12 text-center">
          <BadgePill tone="gold" className="mx-auto">
            <FlaskConical size={12} /> Elite Labs
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            What&apos;s coming next
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            A first look at the experiences we&apos;re building to take Football Universe Elite even further.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ELITE_LABS_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <GlassCard gradientBorder className="group flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <feature.icon size={22} className="text-white" />
                  </div>
                  <BadgePill tone="gold" className="shrink-0">
                    In Development
                  </BadgePill>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
