"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import ContentCard from "@/components/ContentCard";
import type { Title } from "@/lib/types/title";

export default function SearchClient({ titles }: { titles: Title[] }) {
  const [query, setQuery] = useState("");

  const results = titles.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const shown = query ? results : titles;

  return (
    <>
      <div className="relative max-w-xl mb-10">
        <SearchIcon
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-smoke"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies, anime, series..."
          className="w-full bg-graphite border border-charcoal rounded-pill pl-11 pr-4 py-3 text-sm text-carbon outline-none focus:border-iris"
        />
      </div>

      {query && (
        <p className="text-sm text-smoke mb-4">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {shown.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>

      {query && results.length === 0 && (
        <p className="text-smoke text-sm mt-10">
          Nothing matches &ldquo;{query}&rdquo; yet. Try another title.
        </p>
      )}
    </>
  );
}
