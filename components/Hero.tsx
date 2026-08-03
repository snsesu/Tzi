import { Play, ArrowRight } from "lucide-react";

const TILE_COLORS = [
  "linear-gradient(160deg,#241a2e,#4a2f5e)",
  "linear-gradient(160deg,#1a2440,#2f4a78)",
  "linear-gradient(160deg,#2a1e1e,#5e3a2f)",
  "linear-gradient(160deg,#1e2a24,#2f5e46)",
  "linear-gradient(160deg,#2a1a3a,#5c3a8f)",
];

const stills = [
  { w: 2, h: 2, title: "Nova Drift", tag: "Sci-Fi" },
  { w: 1, h: 1, title: "Ashfall", tag: "Action" },
  { w: 1, h: 1, title: "Wraith City", tag: "Anime" },
  { w: 1, h: 2, title: "Silent Harbor", tag: "Drama" },
  { w: 1, h: 1, title: "Ember Reign", tag: "Fantasy" },
];

const stats = [
  { value: "100K+", label: "Movies" },
  { value: "50K+", label: "Episodes" },
  { value: "20K+", label: "Anime" },
];

function StillTile({ w, h, title, tag, color }: { w: number; h: number; title: string; tag: string; color: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-md min-h-[100px]"
      style={{ gridColumn: `span ${w}`, gridRow: `span ${h}`, background: color }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <div className="absolute left-3 right-3 bottom-3">
        <p className={w > 1 ? "text-lg font-medium text-carbon" : "text-sm font-medium text-carbon"}>{title}</p>
        <p className="text-[11px] uppercase tracking-wide text-ash mt-1">{tag}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* Cosmic canvas hero — split composition per Frame.io layout spec */}
      <section className="relative w-full bg-cosmic overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#000b35_0%,transparent_60%)]" />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: eyebrow + display headline + CTAs */}
          <div>
            <p className="text-[12px] uppercase tracking-[0.06em] text-iris font-normal leading-none mb-4">
              The NEXA Platform
            </p>
            <h1 className="font-normal text-carbon" style={{ fontSize: "clamp(38px,6vw,80px)", lineHeight: 0.96, letterSpacing: "-2px" }}>
              Enter the
              <br />
              cinema universe.
            </h1>
            <p className="mt-6 text-[18px] leading-[1.3] text-smoke max-w-[560px]">
              Movies, anime, series and infinite worlds — all in one universe, powered by AI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-pill bg-carbon text-obsidian text-sm font-medium px-7 py-3.5">
                Start Free Trial <ArrowRight size={14} />
              </button>
              <button className="flex items-center gap-2 rounded-pill border border-carbon text-carbon text-sm font-normal px-7 py-3.5">
                <Play size={12} /> Watch Trailer
              </button>
            </div>
            <div className="flex gap-10 mt-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-medium text-carbon">{s.value}</p>
                  <p className="text-[12px] uppercase tracking-wide text-smoke mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product UI Mockup Container — 10px radius, twilight border halo */}
          <div className="rounded-card border border-twilight shadow-halo bg-graphite p-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2" style={{ gridAutoRows: 120 }}>
              {stills.map((s, i) => (
                <StillTile key={s.title} {...s} color={TILE_COLORS[i]} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Worlds — eyebrow + editorial grid, no card chrome */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20">
        <p className="text-[12px] uppercase tracking-[0.06em] text-iris font-normal leading-none mb-6">
          Explore Worlds
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ gridAutoRows: 140 }}>
          {stills.map((s, i) => (
            <StillTile key={`b-${s.title}`} {...s} color={TILE_COLORS[i]} />
          ))}
        </div>
      </section>
    </>
  );
}
