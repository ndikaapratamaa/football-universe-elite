/**
 * Global premium background mesh & atmosphere for the homepage.
 *
 * Task 05 — layered depth system: base canvas → large mesh gradient →
 * asymmetric secondary radials → edge-only vignette → faint haze.
 * Pure CSS gradients only (no images, no SVG noise, no `filter: blur()`,
 * no backdrop-filter), kept extremely low-opacity so it is felt rather
 * than seen (Apple / Linear / Stripe / Vercel — not neon, not RGB).
 *
 * Fully decorative: aria-hidden, pointer-events-none, `position: fixed`
 * so it paints once and never repaints on scroll, and sits behind every
 * section via -z-10 — never affects layout, routing, or any existing
 * component. `translate-z-0` promotes it to its own GPU compositing
 * layer; since none of these layers animate, `will-change` would only
 * reserve a layer without ever paying it off, so a one-time transform
 * hint is the cheaper choice here.
 */
export function AmbientLighting() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [transform:translateZ(0)]"
    >
      {/* Layer 1 — base canvas (#09090B) comes from bg-background on <main>, untouched */}

      {/* Layer 2 — large mesh gradient: green + blue blended, huge radius, 3–6% opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_18%_-10%,rgba(34,197,94,0.05),transparent_60%),radial-gradient(120%_90%_at_88%_105%,rgba(37,99,235,0.045),transparent_60%)]" />

      {/* Layer 3 — secondary radials, placed asymmetrically (top-left / bottom-right / upper-center), very soft */}
      <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_6%_18%,rgba(34,197,94,0.035),transparent_70%),radial-gradient(40%_38%_at_94%_82%,rgba(37,99,235,0.03),transparent_70%),radial-gradient(55%_28%_at_52%_2%,rgba(255,255,255,0.02),transparent_75%)]" />

      {/* Layer 4 — soft vignette, darkens only the screen edges, center stays clean */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_55%,rgba(4,5,7,0.24)_100%)]" />

      {/* Layer 5 — very subtle atmospheric haze, under 3% opacity, adds depth only */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015)_0%,transparent_20%,transparent_80%,rgba(0,0,0,0.02)_100%)]" />
    </div>
  );
}
