"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

interface QuickStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  size: "hero" | "large" | "medium";
}

const QUICK_STATS: QuickStat[] = [
  { id: "quiz", value: 500, suffix: "+", label: "Quiz Questions", size: "hero" },
  { id: "players", value: 1000, suffix: "+", label: "Registered Players", size: "large" },
  { id: "competitions", value: 50, suffix: "+", label: "Competitions Tracked", size: "medium" },
  { id: "daily", value: 24, suffix: "", label: "Daily Challenges", size: "medium" },
];

const sizeClass: Record<QuickStat["size"], string> = {
  hero: "text-[16vw] sm:text-6xl md:text-7xl lg:text-8xl",
  large: "text-5xl md:text-6xl",
  medium: "text-4xl md:text-5xl",
};

function StatColumn({ stat, index }: { stat: QuickStat; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useAnimatedCounter(stat.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={
        stat.size === "hero"
          ? "border-b border-white/10 pb-8 md:col-span-2 md:border-b-0 md:border-r md:pb-0 md:pr-10"
          : "border-b border-white/10 pb-6 last:border-b-0 md:border-b-0 md:pb-0"
      }
    >
      <p className={`scoreboard-text font-display font-extrabold leading-none text-white ${sizeClass[stat.size]}`}>
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-label text-muted">{stat.label}</p>
    </motion.div>
  );
}

export function QuickStats() {
  return (
    <section className="border-y border-white/5 bg-card/30 py-16 md:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-5 md:items-end md:gap-10">
          {QUICK_STATS.map((stat, i) => (
            <StatColumn key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
