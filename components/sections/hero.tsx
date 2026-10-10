"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play, Trophy } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/hooks/use-profile";

const HIGHLIGHTS = [
  { value: "500+", label: "Quiz Questions" },
  { value: "50+", label: "Competitions" },
  { value: "Live", label: "Leaderboard" },
];

export function Hero() {
  const { profile } = useProfile();

  return (
    <section
      id="home"
      className="tunnel-bg vignette noise relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" />
      <div className="pitch-lines pointer-events-none absolute inset-0" />
      <div className="fog-layer pointer-events-none absolute inset-x-0 bottom-0 h-64" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BadgePill tone="primary">
              <Trophy size={12} /> {profile.clubName ? `Welcome, ${profile.clubName}` : "Welcome to the Universe"}
            </BadgePill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-extrabold text-white sm:text-6xl md:text-7xl"
          >
            Everything Football,{" "}
            <span className="text-gradient-primary">One Universe.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-secondary measure mx-auto mt-6 text-lg"
          >
            {profile.playerName ? `${profile.playerName}, ` : ""}
            News, statistics, competitions, quizzes, mini games and a live leaderboard — all in one premium football hub.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#quiz">
              <Button size="lg">
                <Play size={18} /> Start Playing
              </Button>
            </a>
            <a href="#competitions">
              <Button size="lg" variant="outline">
                Explore Competitions <ArrowRight size={18} />
              </Button>
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-4"
          >
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="glass rounded-2xl px-4 py-5">
                <dt className="text-body-metadata text-xs uppercase tracking-label">{item.label}</dt>
                <dd className="scoreboard-text mt-1 font-display text-2xl font-bold text-white">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <a
        href="#quiz"
        aria-label="Scroll down"
        className="animate-bounce absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}