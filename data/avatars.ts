import type { PlayerAvatar } from "@/types";

export const AVATARS: PlayerAvatar[] = [
  { id: "yamal", name: "Lamine Yamal", club: "Barcelona", number: 19, from: "#22C55E", to: "#0ea363" },
  { id: "mbappe", name: "Kylian Mbappé", club: "Real Madrid", number: 9, from: "#2563EB", to: "#1e40af" },
  { id: "palmer", name: "Cole Palmer", club: "Chelsea", number: 20, from: "#3b82f6", to: "#1d4ed8" },
  { id: "havertz", name: "Kai Havertz", club: "Arsenal", number: 29, from: "#ef4444", to: "#b91c1c" },
  { id: "vinicius", name: "Vinícius Jr.", club: "Real Madrid", number: 7, from: "#FACC15", to: "#ca8a04" },
];

export const getAvatarById = (id: string): PlayerAvatar => {
  return AVATARS.find((a) => a.id === id) ?? AVATARS[0];
};
