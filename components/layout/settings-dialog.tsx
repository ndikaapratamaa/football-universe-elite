"use client";

import * as React from "react";
import { RotateCcw, Save } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AVATARS } from "@/data/avatars";
import { useProfile } from "@/hooks/use-profile";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const { profile, updateProfile, resetProfile } = useProfile();
  const [playerName, setPlayerName] = React.useState(profile.playerName);
  const [clubName, setClubName] = React.useState(profile.clubName);
  const [avatarId, setAvatarId] = React.useState(profile.avatarId);
  const [confirmReset, setConfirmReset] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setPlayerName(profile.playerName);
      setClubName(profile.clubName);
      setAvatarId(profile.avatarId);
      setConfirmReset(false);
    }
  }, [open, profile]);

  const handleSave = () => {
    updateProfile({
      playerName: playerName.trim() || profile.playerName,
      clubName: clubName.trim() || profile.clubName,
      avatarId,
    });
    onOpenChange(false);
  };

  const handleReset = () => {
    resetProfile();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
          <DialogDescription>Update your identity across Football Universe Elite.</DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">Player Name</label>
            <input
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">Club Name</label>
            <input
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">Favourite Player</label>
            <div className="mt-2 grid grid-cols-5 gap-2">
              {AVATARS.map((avatar) => (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => setAvatarId(avatar.id)}
                  className={cn(
                    "rounded-xl border p-2 transition-colors",
                    avatarId === avatar.id ? "border-primary bg-primary/10" : "border-white/10 hover:border-white/25"
                  )}
                >
                  <div
                    className="mx-auto flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})` }}
                  >
                    {avatar.number}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Button variant="primary" className="w-full" onClick={handleSave}>
            <Save size={16} /> Save Changes
          </Button>

          <div className="border-t border-white/10 pt-5">
            <p className="text-sm font-semibold text-white">Reset Profile</p>
            <p className="mt-1 text-xs text-muted">
              This clears your name, club and avatar. This can&apos;t be undone.
            </p>
            {!confirmReset ? (
              <Button
                variant="outline"
                size="sm"
                className="mt-3 border-red-500/40 text-red-400 hover:bg-red-500/10"
                onClick={() => setConfirmReset(true)}
              >
                <RotateCcw size={14} /> Reset Profile
              </Button>
            ) : (
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setConfirmReset(false)}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="bg-red-500 text-white hover:bg-red-600"
                  onClick={handleReset}
                >
                  Confirm Reset
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
