import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgePillProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "primary" | "gold" | "secondary";
}

const toneStyles: Record<string, string> = {
  primary: "text-primary border-primary/30 bg-primary/10",
  gold: "text-gold border-gold/30 bg-gold/10",
  secondary: "text-blue-400 border-blue-400/30 bg-blue-400/10",
};

export function BadgePill({ className, tone = "primary", children, ...props }: BadgePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-label",
        toneStyles[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
