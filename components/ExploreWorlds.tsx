import { ArrowRight, Sparkles } from "lucide-react";

const worlds = [
  { title: "Sci-Fi", count: "2.5K Titles" },
  { title: "Fantasy", count: "3.1K Titles" },
  { title: "Anime", count: "4.7K Titles" },
  { title: "Action", count: "3.8K Titles" },
  { title: "Horror", count: "1.2K Titles" },
  { title: "Documentary", count: "2.1K Titles" },
];

export default function ExploreWorlds() {
  return (
    <section className="px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-2 text-sm tracking-widest text-gray-300">
          EXPLORE WORLDS <Sparkles size={14} className="text-nexa-purple" />
        </h2>
        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white">
          VIEW ALL <ArrowRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {worlds.map((w) => (
          <div
            key={w.title}
            className="card-hover relative aspect-[4/5] rounded-xl border border-nexa-border bg-nexa-panel overflow-hidden flex flex-col justify-end p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative">
              <p className="font-semibold">{w.title}</p>
              <p className="text-xs text-gray-400">{w.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
