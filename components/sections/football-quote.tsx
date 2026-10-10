"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function FootballQuote() {
  return (
    <section id="football-quote" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_60%_at_50%_50%,rgba(34,197,94,0.06),transparent_70%)]" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <p className="mt-8 font-display text-2xl font-medium italic leading-relaxed text-white/90 md:text-4xl md:leading-snug">
            &ldquo;Football is played with the head.
            <br className="hidden md:block" /> Your feet are just the tools.&rdquo;
          </p>

          <p className="mt-6 text-sm font-semibold uppercase tracking-label text-muted">
            — Andrea Pirlo
          </p>

          <span className="mt-8 h-px w-10 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
