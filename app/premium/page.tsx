import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const freeFeatures = ["HD streaming", "Limited titles", "Ads between episodes"];
const premiumFeatures = [
  "4K Ultra quality",
  "No ads, ever",
  "Early access to new titles",
  "Download & watch offline",
  "Unlimited universe access",
];

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-cosmic">
      <Navbar />
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <p className="text-[12px] uppercase tracking-[0.06em] text-iris mb-4">Premium</p>
        <h1 className="font-normal text-carbon mb-4" style={{ fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.02, letterSpacing: "-1.5px" }}>
          Unlock the full universe.
        </h1>
        <p className="text-smoke max-w-md mx-auto mb-16">
          One quiet upgrade. Everything NEXA has to offer, without limits.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="rounded-card border border-charcoal bg-graphite p-8">
            <p className="text-lg font-medium text-carbon mb-1">Free</p>
            <p className="text-3xl font-normal text-carbon mb-6">$0</p>
            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-smoke">
                  <Check size={14} className="text-smoke" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-twilight shadow-halo bg-graphite p-8">
            <p className="text-lg font-medium text-carbon mb-1">Premium</p>
            <p className="text-3xl font-normal text-carbon mb-6">
              $6.99 <span className="text-sm text-smoke font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-carbon">
                  <Check size={14} className="text-iris" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-pill bg-carbon text-obsidian text-sm font-medium">
              Get Premium
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
