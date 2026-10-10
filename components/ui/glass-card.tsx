import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  gradientBorder?: boolean;
}

export function GlassCard({
  className,
  hover = true,
  gradientBorder = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group/card relative rounded-premium p-6 shadow-card",
        gradientBorder ? "gradient-border" : "glass",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {/* faint top highlight — glass catching light from above, brightens on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-premium bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 transition-opacity duration-300 ease-out group-hover/card:opacity-100"
      />
      {/* soft diagonal sheen — a static, very faint reflection to sell real glass */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-premium"
      >
        <span className="absolute -inset-y-10 -left-1/3 w-2/3 rotate-[8deg] bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />
      </span>
      {/* background brightness lift on hover (+2-3%) — the "feels expensive" cue */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-premium bg-white/[0.025] opacity-0 transition-opacity duration-300 ease-out group-hover/card:opacity-100"
      />
      {children}
    </div>
  );
}
