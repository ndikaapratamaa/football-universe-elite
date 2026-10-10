"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Flame, Lock, Gift } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";

const REWARD_PREVIEW = ["+500 XP", "Legendary Trophy Badge", "Exclusive Elite Title"];

export function UltimateChallenge() {
  return (
    <section id="ultimate-challenge" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(34,197,94,0.09),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_45%_at_85%_100%,rgba(250,204,21,0.08),transparent_65%)]" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard
            hover={false}
            className="group relative overflow-hidden rounded-premium border border-white/10 bg-gradient-to-br from-card via-[#0a0d13] to-[#050506] p-0 shadow-card transition-shadow duration-500 hover:shadow-card-hover"
          >
            {/* dramatic ambient lighting */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-[120px]"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gold/20 blur-[120px]"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* giant ghost artwork placeholder */}
            <Trophy
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-[22rem] w-[22rem] text-white/[0.04] transition-transform duration-700 ease-out group-hover:scale-105 md:h-[28rem] md:w-[28rem]"
              strokeWidth={1}
            />
            <div className="vignette pointer-events-none absolute inset-0" />

            <div className="relative z-10 flex flex-col items-center gap-8 p-8 text-center md:p-16">
              <BadgePill tone="gold">
                <Lock size={12} /> Coming Soon
              </BadgePill>

              <div>
                <h2 className="font-display text-3xl font-bold text-white drop-shadow-sm md:text-5xl">
                  Ultimate Football Challenge
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-balance text-sm text-muted md:text-base">
                  The final boss of Football Universe Elite. One challenge. Total mastery required.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
                <span className="ml-2 text-xs font-semibold uppercase tracking-label text-muted">
                  Max Difficulty
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {REWARD_PREVIEW.map((reward) => (
                  <BadgePill key={reward} tone="primary" className="normal-case tracking-normal">
                    <Gift size={12} /> {reward}
                  </BadgePill>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="gold" size="lg" disabled className="min-w-[240px]">
                  <Flame size={18} /> Unlock Challenge
                </Button>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center font-display text-lg font-medium text-white/70 md:text-xl"
        >
          Only true football experts will survive.
        </motion.p>
      </div>
    </section>
  );
}
