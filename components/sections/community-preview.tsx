"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trophy, Globe2, CalendarClock, Users } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import type { FeatureCard } from "@/types";

const COMMUNITY_FEATURES: FeatureCard[] = [
  {
    id: "community-tournaments",
    title: "Community Tournaments",
    description: "Team up, compete, and battle other football fans in organized community tournaments.",
    icon: Trophy,
    gradient: "from-gold/20 to-gold/5",
    comingSoon: true,
  },
  {
    id: "global-leaderboards",
    title: "Global Leaderboards",
    description: "See how you rank among football fans from every corner of the world.",
    icon: Globe2,
    gradient: "from-secondary/20 to-secondary/5",
    comingSoon: true,
  },
  {
    id: "weekly-events",
    title: "Weekly Football Events",
    description: "Fresh challenges, themes, and community moments dropping every single week.",
    icon: CalendarClock,
    gradient: "from-primary/20 to-primary/5",
    comingSoon: true,
  },
];

export function CommunityPreview() {
  return (
    <section id="community" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_35%_at_10%_100%,rgba(34,197,94,0.05),transparent_70%)]" />

      <div className="container">
        <div className="mb-12 text-center">
          <BadgePill tone="primary" className="mx-auto">
            <Users size={12} /> Community
          </BadgePill>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            Community Preview
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-balance text-muted">
            A first look at what Football Universe Elite&apos;s community will grow into.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {COMMUNITY_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
