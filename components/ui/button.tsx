import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] hover:shadow-glow hover:-translate-y-0.5",
        gold:
          "bg-gradient-to-r from-gold to-amber-500 text-gold-foreground shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] hover:shadow-glow-gold hover:-translate-y-0.5",
        outline:
          "border border-white/15 text-white hover:border-white/30 hover:bg-white/[0.06] hover:shadow-glow-sm",
        ghost: "text-white hover:bg-white/5",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {/* subtle light sweep on hover — premium micro-interaction, not decoration for its own sake */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
        />
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
