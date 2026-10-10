"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search, Settings, Sun, Moon, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SettingsDialog } from "@/components/layout/settings-dialog";
import { useProfile, useProfileAvatar } from "@/hooks/use-profile";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Quiz", href: "#quiz" },
  { label: "Statistics", href: "#statistics" },
  { label: "Competitions", href: "#competitions" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "News", href: "#news" },
  { label: "Profile", href: "#profile" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const { theme, setTheme } = useTheme();
  const { profile } = useProfile();
  const avatar = useProfileAvatar();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // Track which section is currently in view so the nav can show a real, premium active state
  // rather than relying on hover/color alone. Sections that don't exist yet (Quiz, Profile) are
  // skipped gracefully — this never touches routing.
  React.useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full"
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between px-4 transition-all duration-500 ease-out md:px-8",
          scrolled
            ? "h-16 border-b border-white/[0.08] bg-background/75 shadow-card backdrop-blur-xl"
            : "h-20 border-b border-transparent bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-2.5">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl transition-transform duration-300 ease-out group-hover:scale-105">
            <Image src="/logo-web.png" alt="Football Universe Elite" fill priority className="object-contain" />
          </div>
          <span className="font-display text-base font-bold tracking-tight text-white">
            Football Universe <span className="text-gold">Elite</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-sm lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-px",
                  isActive ? "text-white" : "text-muted hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_16px_rgba(34,197,94,0.18)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Search">
            <Search size={18} className="transition-transform duration-300 group-hover:scale-110" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Moon size={18} className="transition-transform duration-300 group-hover:-rotate-12" />
            ) : (
              <Sun size={18} className="transition-transform duration-300 group-hover:rotate-45" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} className="transition-transform duration-300 group-hover:scale-110" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open settings"
            onClick={() => setSettingsOpen(true)}
          >
            <Settings size={18} className="transition-transform duration-500 ease-out group-hover:rotate-90" />
          </Button>
          <button
            onClick={() => setSettingsOpen(true)}
            className="hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow-sm lg:flex"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-primary/40 transition-shadow duration-300"
              style={{ background: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})` }}
            >
              {profile.playerName.slice(0, 2).toUpperCase()}
            </div>
            <span className="text-left leading-tight">
              <span className="block text-xs font-semibold text-white">{profile.playerName}</span>
              <span className="block text-[10px] text-muted">{profile.clubName}</span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 glass-strong noise vignette lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-4">
              <span className="font-display font-bold text-white">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={20} />
              </Button>
            </div>
            <nav className="relative flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-lg font-medium transition-colors duration-300 active:bg-white/10",
                        isActive ? "bg-white/5 text-primary" : "text-white hover:bg-white/5"
                      )}
                    >
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-sm" />}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setSettingsOpen(true);
                }}
                className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors duration-300 hover:border-primary/30"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ring-2 ring-primary/40"
                  style={{ background: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})` }}
                >
                  {profile.playerName.slice(0, 2).toUpperCase()}
                </div>
                <span className="flex-1 text-left leading-tight">
                  <span className="block text-sm font-semibold text-white">{profile.playerName}</span>
                  <span className="block text-xs text-muted">{profile.clubName}</span>
                </span>
                <Settings size={16} className="text-muted" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </motion.header>
  );
}
