import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchClient from "@/components/SearchClient";
import { titlesService } from "@/lib/services/titlesService";

export default async function SearchPage() {
  const titles = await titlesService.getTitles();

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />
      <section className="px-8 py-12">
        <h1 className="text-3xl font-normal mb-6 text-carbon">Search the Universe</h1>
        <SearchClient titles={titles} />
      </section>
      <Footer />
    </main>
  );
}
