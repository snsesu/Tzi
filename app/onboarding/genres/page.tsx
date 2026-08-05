"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

const GENRES = [
  "Sci-Fi",
  "Fantasy",
  "Anime",
  "Action",
  "Horror",
  "Documentary",
  "Drama",
  "Comedy",
  "Romance",
  "Thriller",
];

export default function GenreOnboardingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/login");
        return;
      }
      setChecking(false);
    });
  }, [router]);

  function toggle(genre: string) {
    setSelected((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  }

  async function handleContinue() {
    setLoading(true);
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      await supabase
        .from("profiles")
        .update({ genres: selected })
        .eq("id", data.user.id);
    }
    setLoading(false);
    router.push("/");
  }

  if (checking) return null;

  return (
    <main className="min-h-screen bg-cosmic">
      <Navbar />
      <section className="px-8 py-16 flex justify-center">
        <div className="w-full max-w-lg rounded-card border border-twilight shadow-halo bg-graphite p-8">
          <p className="text-[12px] uppercase tracking-[0.06em] text-iris mb-3">Step 1 of 1</p>
          <h1 className="text-2xl font-normal text-carbon mb-1" style={{ letterSpacing: "-0.5px" }}>
            What do you love?
          </h1>
          <p className="text-sm text-smoke mb-8">
            Pick at least 3 genres \u2014 we'll shape your universe around them.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {GENRES.map((genre) => {
              const active = selected.includes(genre);
              return (
                <button
                  key={genre}
                  onClick={() => toggle(genre)}
                  className={`px-4 py-2 rounded-pill text-sm border transition ${
                    active
                      ? "bg-carbon text-obsidian border-carbon"
                      : "border-charcoal text-carbon hover:border-iris"
                  }`}
                >
                  {genre}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleContinue}
            disabled={selected.length < 3 || loading}
            className="w-full py-3 rounded-pill bg-carbon text-obsidian text-sm font-medium disabled:opacity-40"
          >
            {loading
              ? "Saving..."
              : selected.length < 3
              ? `Pick ${3 - selected.length} more`
              : "Enter your universe"}
          </button>
        </div>
      </section>
    </main>
  );
}
