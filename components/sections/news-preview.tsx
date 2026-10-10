"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { NEWS_PREVIEW } from "@/data/dashboard";

export function NewsPreview() {
  const [featured, ...sideStories] = NEWS_PREVIEW;

  return (
    <section id="news" className="py-20 md:py-28">
      <div className="container">
        <div className="mb-10">
          <BadgePill tone="secondary">
            <Newspaper size={12} /> Latest
          </BadgePill>
          <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">Football News</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-premium border border-white/10 p-8 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:shadow-card-hover md:p-10"
            style={{ background: `linear-gradient(0deg, #050506 10%, ${featured.accent}22 100%)` }}
          >
            <Newspaper
              size={140}
              className="pointer-events-none absolute -right-6 -top-6 text-white/5 transition-transform duration-500 group-hover:scale-110"
            />
            <span
              className="mb-4 inline-block w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-label"
              style={{ color: featured.accent, borderColor: `${featured.accent}55`, background: `${featured.accent}1a` }}
            >
              {featured.category}
            </span>
            <h3 className="max-w-lg font-display text-2xl font-bold leading-snug text-white md:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-3 max-w-md text-sm text-muted">{featured.description}</p>
            <button className="mt-5 flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              Read More
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Side stories — compact stacked list */}
          <div className="flex flex-col divide-y divide-white/8 rounded-premium border border-white/10 bg-card/40">
            {sideStories.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group flex flex-1 flex-col justify-center gap-2 p-6 transition-colors hover:bg-white/5"
              >
                <span
                  className="w-fit rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-label"
                  style={{ color: item.accent, borderColor: `${item.accent}55`, background: `${item.accent}1a` }}
                >
                  {item.category}
                </span>
                <h4 className="font-semibold leading-snug text-white">{item.title}</h4>
                <p className="text-sm text-muted">{item.description}</p>
                <button className="flex items-center gap-1.5 self-start text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read More <ArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
