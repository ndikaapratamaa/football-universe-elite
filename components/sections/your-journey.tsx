"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { User, Flag, Brain, Gem, Trophy, Compass } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import type { JourneyStep } from "@/types";

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "guest",
    title: "Guest",
    description: "Start your football adventure.",
    icon: User,
    accent: "#94A3B8",
  },
  {
    id: "fan",
    title: "Football Fan",
    description: "Complete your first football quiz.",
    icon: Flag,
    accent: "#22C55E",
  },
  {
    id: "expert",
    title: "Quiz Expert",
    description: "Master advanced football knowledge.",
    icon: Brain,
    accent: "#2563EB",
  },
  {
    id: "elite",
    title: "Elite Member",
    description: "Unlock exclusive rewards and achievements.",
    icon: Gem,
    accent: "#FACC15",
  },
  {
    id: "legend",
    title: "Football Legend",
    description: "Reach the highest level and dominate the community.",
    icon: Trophy,
    accent: "#EF4444",
  },
];

function MilestoneCard({ step, index }: { step: JourneyStep; index: number }) {
  return (
    <GlassCard
      gradientBorder
      className="group flex h-full flex-col items-center gap-3 p-5 text-center"
    >
      <div
        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-105"
        style={{ background: `linear-gradient(135deg, ${step.accent}33, ${step.accent}0d)` }}
      >
        <step.icon size={24} style={{ color: step.accent }} />
        <span
          className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-card text-[10px] font-bold text-white"
          aria-hidden
        >
          {index + 1}
        </span>
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-white">{step.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
      </div>
    </GlassCard>
  );
}

export function JourneyTimeline() {
  return (
    <section id="journey" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_10%,rgba(34,197,94,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_35%_at_10%_90%,rgba(250,204,21,0.05),transparent_70%)]" />

      <div className="container">
        <div className="mb-14 text-center">
          <BadgePill tone="primary" className="mx-auto">
            <Compass size={12} /> Progression
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Your Journey Begins
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Football Universe Elite isn&apos;t just a quiz. It&apos;s a path — and every visit takes you one step
            further.
          </p>
        </div>

        {/* Desktop — horizontal timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-[10%] right-[10%] top-7 h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
          <div className="grid grid-cols-5 gap-5">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <MilestoneCard step={step} index={i} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet — vertical timeline */}
        <div className="relative flex flex-col gap-5 pl-2 lg:hidden">
          <div className="absolute bottom-4 left-9 top-4 w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5" />
          {JOURNEY_STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative pl-16"
            >
              <div
                className="absolute left-2 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10"
                style={{ background: `linear-gradient(135deg, ${step.accent}33, ${step.accent}0d), #0d1016` }}
              >
                <step.icon size={22} style={{ color: step.accent }} />
              </div>
              <GlassCard gradientBorder className="p-4">
                <h3 className="font-display text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Ending message */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center font-display text-lg font-medium text-white/70 md:text-xl"
        >
          Every football legend starts somewhere.
        </motion.p>
      </div>
    </section>
  );
}
