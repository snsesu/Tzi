import { notFound } from "next/navigation";
import { Play, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import AddToUniverseButton from "@/components/AddToUniverseButton";
import { catalog } from "@/lib/catalog";

export function generateStaticParams() {
  return catalog.map((item) => ({ id: item.id }));
}

export default function TitlePage({ params }: { params: { id: string } }) {
  const item = catalog.find((c) => c.id === params.id);
  if (!item) return notFound();

  const related = catalog
    .filter((c) => c.category === item.category && c.id !== item.id)
    .slice(0, 6);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative px-8 pt-10 pb-16">
        <div className="grid md:grid-cols-[280px_1fr] gap-10">
          <div className="aspect-[2/3] rounded-xl border border-nexa-border bg-gradient-to-br from-nexa-purple/25 to-nexa-blue/10" />

          <div>
            <p className="text-xs tracking-widest text-nexa-purple mb-3">
              {item.category.toUpperCase()}
            </p>
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1 text-nexa-purple">
                <Star size={14} /> {item.rating}
              </span>
              <span>{item.year}</span>
              <span>{item.category}</span>
            </div>
            <p className="text-gray-400 max-w-xl mb-8">
              An immersive {item.category.toLowerCase()} story from the NEXA universe.
              Full synopsis and cast details will appear here once connected to the
              content database.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-nexa-purple shadow-glow text-sm font-medium">
                <Play size={16} /> PLAY
              </button>
              <AddToUniverseButton slug={item.id} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-lg font-semibold mb-4">More {item.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {related.map((r) => (
                <ContentCard key={r.id} item={r} />
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
