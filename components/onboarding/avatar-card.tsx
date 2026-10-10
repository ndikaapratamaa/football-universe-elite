"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlayerAvatar } from "@/types";

interface AvatarCardProps {
  avatar: PlayerAvatar;
  selected: boolean;
  onSelect: () => void;
}

export function AvatarCard({ avatar, selected, onSelect }: AvatarCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative flex flex-col items-center rounded-2xl border p-4 text-center transition-colors duration-300",
        selected
          ? "border-primary bg-primary/10 shadow-glow"
          : "border-white/10 bg-white/[0.02] hover:border-white/25"
      )}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full border-2 font-display text-xl font-bold text-white shadow-premium transition-transform duration-300 group-hover:scale-105",
          selected ? "border-primary" : "border-white/10"
        )}
        style={{ background: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})` }}
      >
        {avatar.number}
      </div>

      <p className="mt-3 text-xs font-semibold leading-tight text-white">{avatar.name}</p>
      <p className="mt-0.5 text-[10px] text-muted">{avatar.club}</p>

      {selected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary"
        >
          <Check size={12} className="text-primary-foreground" />
        </motion.div>
      )}
    </motion.button>
  );
}
