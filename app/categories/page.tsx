import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { titlesService } from "@/lib/services/titlesService";

export default async function CategoriesPage() {
  const titles = await titlesService.getTitles();
  const genres = Array.from(new Set(titles.map((t) => t.category))).sort();

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />
      <section className="px-8 py-12">
        <h1 className="text-3xl font-normal mb-10 text-carbon">Categories</h1>

        {genres.length === 0 && (
          <p className="text-smoke text-sm">No titles yet \u2014 check back soon.</p>
        )}

        {genres.map((genre) => {
          const items = titles.filter((t) => t.category === genre);
          return (
            <div key={genre} className="mb-12">
              <h2 className="text-lg font-medium mb-4 text-carbon">{genre}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {items.map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
