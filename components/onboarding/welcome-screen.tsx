"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AvatarCard } from "@/components/onboarding/avatar-card";
import { AVATARS } from "@/data/avatars";
import { useProfile } from "@/hooks/use-profile";

const STEPS = ["name", "club", "avatar"] as const;
type Step = (typeof STEPS)[number];

export function WelcomeScreen() {
  const { completeOnboarding } = useProfile();
  const [step, setStep] = React.useState<Step>("name");
  const [playerName, setPlayerName] = React.useState("");
  const [clubName, setClubName] = React.useState("");
  const [avatarId, setAvatarId] = React.useState(AVATARS[0].id);

  const stepIndex = STEPS.indexOf(step);
  const canContinue =
    step === "name" ? playerName.trim().length > 0 : step === "club" ? clubName.trim().length > 0 : true;

  const goNext = () => {
    if (step === "avatar") {
      completeOnboarding({
        playerName: playerName.trim(),
        clubName: clubName.trim(),
        avatarId,
      });
      return;
    }
    setStep(STEPS[stepIndex + 1]);
  };

  const goBack = () => {
    if (stepIndex > 0) setStep(STEPS[stepIndex - 1]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto stadium-bg px-4 py-10">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-lg"
      >
        <GlassCard hover={false} className="p-8 md:p-10">
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl">
              <Image src="/logo-web.png" alt="Football Universe Elite" fill className="object-contain" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              Football Universe <span className="text-gold">Elite</span>
            </span>
          </div>

          <div className="mb-8 flex gap-2">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                  i <= stepIndex ? "bg-primary" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === "name" && (
              <motion.div
                key="name"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-display text-2xl font-bold text-white">Welcome, manager 👋</h1>
                <p className="mt-2 text-sm text-muted">What should we call you?</p>
                <input
                  autoFocus
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && canContinue && goNext()}
                  placeholder="Your player name"
                  className="mt-6 w-full rounded-2xl border border-white/10 bg-background px-4 py-3.5 text-white placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
            )}

            {step === "club" && (
              <motion.div
                key="club"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-display text-2xl font-bold text-white">Pick your club</h1>
                <p className="mt-2 text-sm text-muted">Which colours do you fly?</p>
                <input
                  autoFocus
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && canContinue && goNext()}
                  placeholder="e.g. Real Madrid"
                  className="mt-6 w-full rounded-2xl border border-white/10 bg-background px-4 py-3.5 text-white placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
            )}

            {step === "avatar" && (
              <motion.div
                key="avatar"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-display text-2xl font-bold text-white">Choose your idol</h1>
                <p className="mt-2 text-sm text-muted">Your favourite player avatar</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {AVATARS.map((avatar) => (
                    <AvatarCard
                      key={avatar.id}
                      avatar={avatar}
                      selected={avatarId === avatar.id}
                      onSelect={() => setAvatarId(avatar.id)}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex gap-3">
            {stepIndex > 0 && (
              <Button variant="outline" onClick={goBack} className="shrink-0">
                <ArrowLeft size={16} />
              </Button>
            )}
            <Button variant="primary" size="lg" disabled={!canContinue} onClick={goNext} className="flex-1">
              {step === "avatar" ? "Enter Universe" : "Continue"} <ChevronRight size={18} />
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
