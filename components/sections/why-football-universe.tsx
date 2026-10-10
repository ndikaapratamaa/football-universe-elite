"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Layers } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";

interface WhyCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const WHY_CARDS: WhyCard[] = [
  {
    id: "challenge-yourself",
    title: "Challenge Yourself",
    description: "Improve your football knowledge through carefully designed quizzes.",
    icon: Target,
  },
  {
    id: "progress-every-day",
    title: "Progress Every Day",
    description: "Earn XP, unlock achievements and become Football Elite.",
    icon: TrendingUp,
  },
  {
    id: "more-than-football",
    title: "More Than Just Football",
    description: "Experience challenges, mini games, collections and future events.",
    icon: Layers,
  },
];

export function WhyFootballUniverse() {
  return (
    <section id="why-fue" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)]" />

      <div className="container">
        <div className="mb-12 text-center">
          <BadgePill tone="primary" className="mx-auto">
            Why Us
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Why Football Universe Elite?
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard gradientBorder className="flex h-full flex-col overflow-hidden p-0">
                {/* reserved space for future artwork/illustration */}
                <div className="relative flex h-32 items-center justify-center border-b border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent">
                  <card.icon size={26} className="text-white/50" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
