import { Play } from "lucide-react";

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

function StillTile({ w, h, title, tag }: { w: number; h: number; title: string; tag: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-gradient-to-br from-nexa-surface to-[#333]"
      style={{ gridColumn: `span ${w}`, gridRow: `span ${h}` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <div className="absolute left-3 right-3 bottom-3">
        <p className={w > 1 ? "text-lg font-medium" : "text-sm font-medium"}>{title}</p>
        <p className="text-[11px] uppercase tracking-wide text-nexa-muted mt-1">{tag}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* Cinematic hero */}
      <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_25%_15%,#2a1f1f_0%,#000_55%),radial-gradient(ellipse_60%_50%_at_80%_70%,#1a2233_0%,transparent_60%),linear-gradient(180deg,#0a0a0a,#000)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="absolute left-0 right-0 bottom-0 px-6 md:px-10 pb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-wide text-nexa-muted font-medium mb-4">
            Featured Universe
          </p>
          <h1 className="leading-none tracking-tight font-normal text-[clamp(36px,6vw,64px)]">
            ENTER THE
            <br />
            CINEMA
            <br />
            UNIVERSE
          </h1>
          <p className="mt-6 text-base text-nexa-slate max-w-md">
            Movies, anime, series and infinite worlds — all in one universe, powered by AI.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="text-sm font-semibold px-6 py-3 rounded bg-white text-black">
              Start Watching
            </button>
            <button className="flex items-center gap-2 text-sm font-medium">
              <span className="w-8 h-8 rounded-full border border-nexa-border flex items-center justify-center">
                <Play size={12} />
              </span>
              Watch Trailer
            </button>
          </div>
          <div className="flex gap-8 mt-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-semibold">{s.value}</p>
                <p className="text-[11px] uppercase tracking-wide text-nexa-slate mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial poster grid */}
      <section className="px-6 md:px-10 py-16">
        <p className="text-xs uppercase tracking-wide text-nexa-slate font-medium mb-6">
          Explore Worlds
        </p>
        <div className="grid grid-cols-4 gap-3" style={{ gridAutoRows: 130 }}>
          {stills.map((s) => (
            <StillTile key={s.title} {...s} />
          ))}
        </div>
      </section>
    </>
  );
}
