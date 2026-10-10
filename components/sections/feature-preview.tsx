"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Zap, BarChart3, Trophy, Gamepad2, ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";

export function FeaturePreview() {
  return (
    <section id="statistics" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_85%_0%,rgba(37,99,235,0.07),transparent_70%)]" />
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <BadgePill tone="secondary">Explore</BadgePill>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              Built for serious football fans
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            A premium suite of tools designed to keep you closer to the game — more sections launching soon.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:auto-rows-[190px]">
          {/* Quiz — the anchor, large and tall */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <GlassCard gradientBorder className="group flex h-full flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/25 to-primary/5">
                  <Zap size={26} className="text-primary" />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-white">Football Quiz</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">
                  Five difficulty tiers, from Beginner to Legend. Earn XP, stack combos and collect coins on every
                  correct answer.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard gradientBorder className="group flex h-full flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-secondary/25 to-secondary/5">
                  <BarChart3 size={20} className="text-secondary" />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">Statistics</h3>
                <p className="mt-1.5 text-sm text-muted">Live top scorers, assists, ratings and standings.</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <GlassCard gradientBorder className="group flex h-full flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-gold/25 to-gold/5">
                  <Trophy size={20} className="text-gold" />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">Competitions</h3>
                <p className="mt-1.5 text-sm text-muted">Every major league and tournament, one hub.</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Mini games — wide banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="lg:col-span-3"
          >
            <GlassCard gradientBorder className="group flex h-full flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/25 to-purple-500/5">
                  <Gamepad2 size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Mini Games</h3>
                  <p className="mt-0.5 text-sm text-muted">
                    Penalty shootout, guess the player, guess the club logo and more.
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-muted">
                Coming soon
              </span>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
