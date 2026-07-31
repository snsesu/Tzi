"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

// Each orbiting slot simulates a "now playing" screen with an animated
// shimmer/scan effect. Swap `tint` for a real <video> or poster per title
// once real per-title clips/thumbnails are available (e.g. from Supabase
// `titles` + Telegram-hosted previews).
const CARD_TINTS = [
  "#9b6bff",
  "#5b8bff",
  "#7c5cff",
  "#4f8bff",
  "#8b7bff",
  "#6f5cff",
  "#5c8bff",
  "#a78bfa",
];

const CARD_COUNT = CARD_TINTS.length;

export default function NexaCoreOrbit() {
  const cards = useMemo(
    () =>
      CARD_TINTS.map((tint, i) => {
        const angle = (i / CARD_COUNT) * 360;
        const radius = 150 + (i % 2 === 0 ? 10 : -8);
        const rad = (angle * Math.PI) / 180;
        return {
          tint,
          x: Math.cos(rad) * radius,
          y: Math.sin(rad) * radius * 0.68,
          rotate: angle * 0.6 + (i % 2 === 0 ? 12 : -10),
          delay: i * 0.15,
          duration: 4 + (i % 3),
          shimmerDelay: i * 0.35,
        };
      }),
    []
  );

  return (
    <div className="relative flex items-center justify-center w-[380px] h-[380px] mx-auto">
      {/* ambient core glow */}
      <div className="absolute inset-0 rounded-full bg-nexa-gradient opacity-25 blur-3xl" />

      {/* light column beneath */}
      <div
        className="absolute -bottom-10 w-40 h-56 opacity-20 blur-2xl bg-gradient-to-t from-nexa-blue to-transparent"
        style={{ clipPath: "polygon(35% 100%, 65% 100%, 100% 0%, 0% 0%)" }}
      />

      {/* rotating rings */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-nexa-purple/60"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
      />
      <motion.div
        className="absolute w-52 h-52 rounded-full border border-nexa-blue/40"
        style={{ transform: "rotateX(60deg)" }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
      />

      {/* orbiting "now playing" cards */}
      {cards.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-md overflow-hidden border backdrop-blur-sm"
          style={{
            width: 46,
            height: 66,
            left: "50%",
            top: "50%",
            background: `${c.tint}33`,
            borderColor: `${c.tint}cc`,
            boxShadow: `0 0 18px ${c.tint}55`,
          }}
          initial={{ x: c.x - 23, y: c.y - 33, rotate: c.rotate }}
          animate={{
            x: [c.x - 23, c.x - 23 + 6, c.x - 23],
            y: [c.y - 33, c.y - 33 - 8, c.y - 33],
            rotate: [c.rotate, c.rotate + 4, c.rotate],
          }}
          transition={{
            repeat: Infinity,
            duration: c.duration,
            delay: c.delay,
            ease: "easeInOut",
          }}
        >
          {/* "now playing" scan-line shimmer, stands in for a real preview clip */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${c.tint}66 45%, transparent 90%)`,
            }}
            animate={{ y: ["-100%", "120%"] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              delay: c.shimmerDelay,
              ease: "linear",
            }}
          />
          <div
            className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full"
            style={{ background: c.tint, boxShadow: `0 0 6px ${c.tint}` }}
          />
        </motion.div>
      ))}

      {/* center core */}
      <div className="relative w-40 h-40 rounded-full border border-nexa-purple/60 flex flex-col items-center justify-center text-center shadow-glow bg-black/30 backdrop-blur-sm">
        <span className="text-sm font-bold tracking-widest">NEXA</span>
        <span className="text-xs text-gray-400 tracking-widest">CORE</span>
      </div>
    </div>
  );
}
