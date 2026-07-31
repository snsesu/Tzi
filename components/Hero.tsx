import { Play, ArrowRight, Clapperboard, Tv, PlaySquare, Compass, Hexagon, Sparkles } from "lucide-react";
import NexaCoreOrbit from "./NexaCoreOrbit";

const sideLinks = [
  { icon: Clapperboard, title: "Cinema", sub: "Movies & Films" },
  { icon: Tv, title: "Anime", sub: "Infinite Worlds" },
  { icon: PlaySquare, title: "Series", sub: "Binge Stories" },
  { icon: Compass, title: "Discover", sub: "AI Recommendations" },
  { icon: Hexagon, title: "My Universe", sub: "Your Collection" },
];

const stats = [
  { value: "100K+", label: "MOVIES" },
  { value: "50K+", label: "EPISODES" },
  { value: "20K+", label: "ANIME" },
  { value: "\u221e", label: "POSSIBILITIES" },
];

export default function Hero() {
  return (
    <section className="relative px-8 pt-14 pb-10">
      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
        <div className="max-w-md">
          <span className="inline-flex items-center gap-2 text-xs tracking-widest text-nexa-purple border border-nexa-border rounded-full px-3 py-1">
            <Sparkles size={12} /> WELCOME TO NEXA
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.1]">
            ENTER THE
            <br />
            <span className="text-gradient">CINEMA</span>
            <br />
            UNIVERSE
          </h1>
          <p className="mt-6 text-gray-400">
            Movies, anime, series and infinite worlds. All in one universe,{" "}
            <span className="text-white">powered by AI.</span>
          </p>
          <div className="mt-8 flex items-center gap-6">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-nexa-purple shadow-glow text-sm font-medium">
              START EXPERIENCE <ArrowRight size={16} />
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-300">
              <span className="w-8 h-8 rounded-full border border-nexa-border flex items-center justify-center">
                <Play size={12} />
              </span>
              WATCH TRAILER
            </button>
          </div>
        </div>

        <NexaCoreOrbit />

        <div className="hidden lg:block bg-nexa-panel/60 border border-nexa-border rounded-xl divide-y divide-nexa-border/60">
          {sideLinks.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3 px-5 py-4">
              <Icon size={16} className="text-nexa-purple" />
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border border-nexa-border rounded-xl px-8 py-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-gray-500 tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
