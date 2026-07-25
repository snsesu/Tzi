import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { catalog, genres } from "@/lib/catalog";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-10">Categories</h1>

        {genres.map((genre) => {
          const items = catalog.filter((c) => c.category === genre);
          if (items.length === 0) return null;
          return (
            <div key={genre} className="mb-12">
              <h2 className="text-lg font-semibold mb-4">{genre}</h2>
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
