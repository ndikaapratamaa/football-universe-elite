"use client";

import * as React from "react";
import { Check, Circle, Loader2, X } from "lucide-react";

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
};

function BallIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 7.5l4 2.9-1.5 4.7h-5L8 10.4z" />
      <path d="M12 7.5V2.6M16 10.4l4.4-1.4M14.5 15.1l2.7 3.8M9.5 15.1l-2.7 3.8M8 10.4L3.6 9" />
    </svg>
  );
}

export function ComingSoon() {
  const [open, setOpen] = React.useState(false);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  // Partikel latar belakang (canvas)
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let particles: Particle[] = [];
    let frame = 0;

    const makeParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.35 + 0.05,
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor((canvas.width * canvas.height) / 22000);
      particles = Array.from({ length: count }, makeParticle);
      if (reduceMotion) draw();
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Tutup modal dengan tombol Escape
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="cs-grid relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#050507] p-6 text-slate-200 selection:bg-slate-800 selection:text-white">
      {/* Partikel */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
      />

      {/* Cahaya ambient */}
      <div className="cs-glow left-[-100px] top-[-100px] h-[500px] w-[500px] bg-slate-400" />
      <div className="cs-glow bottom-[-150px] right-[-150px] h-[600px] w-[600px] bg-indigo-900/60" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between pb-8 pt-4">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-100 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
        </div>
      </header>

      {/* Konten utama */}
      <main className="relative z-10 my-auto w-full max-w-3xl py-12">
        <div className="relative text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl">
            <span className="cs-metal">Kick-off Segera Dimulai</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Website khusus penggemar sepak bola segera meluncur. Bersiaplah
            untuk menyambutnya.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#050507] shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-slate-200 active:scale-95 sm:w-auto"
            >
              <BallIcon className="h-3.5 w-3.5" />
              <span>Cek Kesiapan Tim</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.04] pb-2 pt-6 font-mono text-xs text-slate-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span>&copy; 2026</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">FOOTBALL UNIVERSE ELITE</span>
        </div>
      </footer>

      {/* Modal status */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Kesiapan fitur dan sistem"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className={`cs-overlay fixed inset-0 z-50 flex items-center justify-center bg-[#050507]/80 p-4 transition-all duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`cs-card relative w-full max-w-md rounded-2xl border border-white/10 p-6 transition-all duration-300 sm:p-8 ${
            open ? "scale-100" : "scale-95"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Tutup"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-800/80 text-slate-200">
              <BallIcon className="h-4 w-4" />
            </div>
            <div className="text-left">
              <h3 className="text-base font-bold text-white">
                Kesiapan Fitur &amp; Sistem
              </h3>
              <p className="font-mono text-xs text-slate-400">
                STATUS PENGEMBANGAN
              </p>
            </div>
          </div>

          <div className="mb-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0a0a0e]/90 p-3.5">
              <div className="flex items-center gap-3">
                <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                <span className="text-slate-300">Quiz &amp; Daily Challenges</span>
              </div>
              <span className="font-semibold text-emerald-400">SIAP</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0a0a0e]/90 p-3.5">
              <div className="flex items-center gap-3">
                <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                <span className="text-slate-300">Kinerja dan Tampilan web</span>
              </div>
              <span className="font-semibold text-emerald-400">SIAP</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0a0a0e]/90 p-3.5">
              <div className="flex items-center gap-3">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-400" aria-hidden="true" />
                <span className="text-slate-300">FIX Gacha &amp; Player Collection</span>
              </div>
              <span className="font-semibold text-amber-400">BERLANGSUNG</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0a0a0e]/90 p-3.5 opacity-60">
              <div className="flex items-center gap-3">
                <Circle className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                <span className="text-slate-400">Manajemen Skuad &amp; Uji Coba</span>
              </div>
              <span className="font-semibold text-slate-500">MENUNGGU</span>
            </div>
          </div>

          <p className="mb-6 text-left text-xs leading-relaxed text-slate-400">
            Proses pengembangan berjalan bertahap demi menyuguhkan hasil
            terbaik.
          </p>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full rounded-xl border border-white/10 bg-white/10 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/15"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
