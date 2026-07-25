"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { catalog } from "@/lib/catalog";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = catalog.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Search the Universe</h1>
        <div className="relative max-w-xl mb-10">
          <SearchIcon
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, anime, series..."
            className="w-full bg-nexa-panel border border-nexa-border rounded-lg pl-11 pr-4 py-3 text-sm outline-none focus:border-nexa-purple"
          />
        </div>

        {query && (
          <p className="text-sm text-gray-500 mb-4">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {(query ? results : catalog).map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>

        {query && results.length === 0 && (
          <p className="text-gray-500 text-sm mt-10">
            Nothing matches &ldquo;{query}&rdquo; yet. Try another title.
          </p>
        )}
      </section>
      <Footer />
    </main>
  );
}
