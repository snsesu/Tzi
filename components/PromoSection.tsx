import { ArrowRight, Check, Sparkles, Crown } from "lucide-react";

const perks = [
  "4K Ultra Quality",
  "No Ads",
  "Early Access",
  "Download & Watch Offline",
];

export default function PromoSection() {
  return (
    <section className="px-8 py-10 grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-nexa-border bg-nexa-panel p-8 flex items-center justify-between overflow-hidden">
        <div>
          <p className="flex items-center gap-2 text-xs tracking-widest text-nexa-purple mb-3">
            AI DISCOVERY <Sparkles size={12} />
          </p>
          <h3 className="text-xl font-semibold max-w-xs">
            Let NEXA AI find the perfect stories just for you.
          </h3>
          <button className="mt-6 flex items-center gap-2 text-sm font-medium">
            DISCOVER NOW <ArrowRight size={14} />
          </button>
        </div>
        <div className="w-28 h-28 rounded-full bg-nexa-gradient opacity-30 blur-2xl absolute right-6" />
      </div>

      <div className="rounded-xl border border-nexa-border bg-nexa-panel p-8 flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="flex items-center gap-2 text-xs tracking-widest text-nexa-purple mb-3">
            NEXA PREMIUM <Crown size={12} />
          </p>
          <h3 className="text-xl font-semibold mb-4">Unlock the Full Universe</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check size={14} className="text-nexa-purple" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">
            $6.99<span className="text-sm font-normal text-gray-400">/month</span>
          </p>
          <p className="text-xs text-gray-500 mb-4">Cancel anytime</p>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-nexa-gradient text-sm font-medium text-black">
            GET PREMIUM <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
