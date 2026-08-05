import { notFound } from "next/navigation";
import { Play, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import AddToUniverseButton from "@/components/AddToUniverseButton";
import { titlesService } from "@/lib/services/titlesService";

export default async function TitlePage({ params }: { params: { id: string } }) {
  const item = await titlesService.getTitleBySlug(params.id);
  if (!item) return notFound();

  const all = await titlesService.getTitles();
  const related = all
    .filter((c) => c.category === item.category && c.id !== item.id)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      <section className="relative px-8 pt-10 pb-16">
        <div className="grid md:grid-cols-[280px_1fr] gap-10">
          <div className="aspect-[2/3] rounded-card border border-charcoal overflow-hidden bg-graphite">
            {item.poster_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.poster_url} alt={item.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1a2440] to-[#2f4a78]" />
            )}
          </div>

          <div>
            <p className="text-xs tracking-widest text-iris mb-3">
              {item.category.toUpperCase()}
            </p>
            <h1 className="text-4xl font-normal mb-4 text-carbon">{item.title}</h1>
            <div className="flex items-center gap-4 text-sm text-smoke mb-6">
              {item.rating != null && (
                <span className="flex items-center gap-1 text-iris">
                  <Star size={14} /> {item.rating}
                </span>
              )}
              <span>{item.year ?? "\u2014"}</span>
              <span>{item.category}</span>
            </div>
            <p className="text-smoke max-w-xl mb-8">
              {item.synopsis ?? `An immersive ${item.category.toLowerCase()} story from the NEXA universe. Full synopsis coming soon.`}
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-pill bg-carbon text-obsidian text-sm font-medium">
                <Play size={16} /> Play
              </button>
              <AddToUniverseButton slug={item.slug} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-lg font-medium mb-4 text-carbon">More {item.category}</h2>
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
