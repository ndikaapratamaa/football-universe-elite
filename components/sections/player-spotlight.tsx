"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Target, Sparkles } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { SPOTLIGHT_PLAYER } from "@/data/dashboard";

export function PlayerSpotlight() {
  const player = SPOTLIGHT_PLAYER;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-premium border border-white/10 bg-gradient-to-br from-card to-[#0a0d13] p-8 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:shadow-card-hover md:p-14"
        >
          {/* ambient glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-[110px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Giant rating number */}
          <div className="ghost-number pointer-events-none absolute -right-6 bottom-0 select-none text-[42vw] leading-none sm:text-[26vw] md:-right-10 md:text-[20vw]">
            {player.rating}
          </div>

          <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr_auto]">

            {/* FOTO PLAYER */}
            <motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="relative mx-auto h-[150px] w-[100px] md:h-[180px] md:w-[120px]"
>
  <Image
    src="/players/lamine-yamal.png"
    alt={player.name}
    fill
    priority
    className="object-contain"
  />
</motion.div>

            {/* INFO PLAYER */}
            <div className="text-center md:text-left">
              <BadgePill tone="gold">
                <Sparkles size={12} /> Player Spotlight
              </BadgePill>

              <h3 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                {player.name}
              </h3>

              <p className="text-sm text-muted">
                {player.club} · {player.position}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
                <div>
                  <p className="scoreboard-text flex items-center justify-center gap-1 font-display text-2xl font-bold text-gold md:justify-start">
                    <Star size={16} className="fill-gold text-gold" />
                    {player.rating}
                  </p>
                  <p className="text-xs text-muted">Overall</p>
                </div>

                <div>
                  <p className="scoreboard-text flex items-center justify-center gap-1 font-display text-2xl font-bold text-white md:justify-start">
                    <Target size={16} className="text-primary" />
                    {player.goals}
                  </p>
                  <p className="text-xs text-muted">Goals</p>
                </div>

                <div>
                  <p className="scoreboard-text font-display text-2xl font-bold text-white">
                    {player.assists}
                  </p>
                  <p className="text-xs text-muted">Assists</p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative mx-auto md:mx-0"
            >
              <Button variant="primary" size="lg">
                View Profile <ArrowRight size={16} />
              </Button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}