"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Zap, Play } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";

export function DailyChallenge() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto flex max-w-3xl flex-col overflow-hidden rounded-premium border border-white/10 bg-gradient-to-br from-card to-[#0a0d13] shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:shadow-card-hover sm:flex-row"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[90px]"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex-1 p-8 text-center sm:text-left md:p-10">
            <BadgePill tone="gold">
              <Zap size={12} /> Today&apos;s Challenge
            </BadgePill>
            <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">Guess The Player</h3>
            <div className="mt-3 flex items-center justify-center gap-4 sm:justify-start">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-muted">Difficulty</span>
            </div>
            <p className="mt-3 scoreboard-text text-sm font-semibold text-primary">Reward +100 XP</p>
          </div>

          {/* Ticket stub divider */}
          <div className="relative flex shrink-0 items-center justify-center border-t border-dashed border-white/15 py-6 sm:border-l sm:border-t-0 sm:py-0 sm:pl-0">
            <div className="ticket-notch flex items-center justify-center p-8">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
                <Button variant="gold" size="lg">
                  <Play size={18} /> Play Challenge
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
