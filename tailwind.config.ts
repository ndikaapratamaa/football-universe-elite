import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "#09090B",
        card: "#151A23",
        primary: {
          DEFAULT: "#22C55E",
          foreground: "#09090B",
        },
        secondary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#FACC15",
          foreground: "#09090B",
        },
        muted: {
          DEFAULT: "#94A3B8",
        },
        crimson: {
          DEFAULT: "#EF4444",
        },
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        sm: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0em" }],
        base: ["1rem", { lineHeight: "1.65", letterSpacing: "0em" }],
        lg: ["1.125rem", { lineHeight: "1.6", letterSpacing: "-0.005em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.35", letterSpacing: "-0.015em" }],
        "3xl": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "4xl": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
        "5xl": ["3rem", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "6xl": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        premium: "24px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 197, 94, 0.25)",
        "glow-gold": "0 0 40px rgba(250, 204, 21, 0.25)",
        "glow-sm": "0 0 18px rgba(34, 197, 94, 0.3)",
        premium: "0 20px 60px rgba(0,0,0,0.5)",
        "premium-lg": "0 30px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.4)",
        card: "0 1px 0 rgba(255,255,255,0.04), 0 8px 16px rgba(5,7,10,0.34), 0 32px 72px rgba(4,6,9,0.26), inset 0 1px 0 rgba(255,255,255,0.08)",
        "card-hover":
          "0 1px 0 rgba(255,255,255,0.08), 0 12px 22px rgba(5,7,10,0.4), 0 42px 92px rgba(4,6,9,0.32), 0 0 28px rgba(34,197,94,0.1), inset 0 1px 0 rgba(255,255,255,0.11)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        particle: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-120px) translateX(20px)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "sweep-y": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.15" },
          "50%": { transform: "translateY(-24px)", opacity: "0.4" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.4" },
          "94%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(3%) translateY(-2%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        particle: "particle 4s ease-in infinite",
        marquee: "marquee 26s linear infinite",
        "marquee-slow": "marquee 42s linear infinite",
        "sweep-y": "sweep-y 5s ease-in-out infinite",
        flicker: "flicker 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
