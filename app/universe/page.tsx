"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

type FavoriteRow = {
  title_id: string;
  titles: {
    id: string;
    slug: string;
    title: string;
    category: string;
    year: number | null;
    rating: number | null;
  } | null;
};

export default function MyUniversePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<FavoriteRow[]>([]);

  useEffect(() => {
    async function load() {
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData.session;

      if (!session) {
        router.push("/login");
        return;
      }

      setEmail(session.user.email ?? null);

      const { data } = await supabase
        .from("favorites")
        .select("title_id, titles(id, slug, title, category, year, rating)")
        .eq("user_id", session.user.id);

      setFavorites((data as unknown as FavoriteRow[]) ?? []);
      setLoading(false);
    }
    load();
  }, [router]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <p className="px-8 py-16 text-gray-500">Loading your universe...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">My Universe</h1>
            {email && <p className="text-sm text-gray-500 mt-1">{email}</p>}
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <LogOut size={14} /> SIGN OUT
          </button>
        </div>

        <h2 className="text-lg font-semibold mb-4">Your Favorites</h2>

        {favorites.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Nothing saved yet. Browse titles and tap &ldquo;My Universe&rdquo; to add them here.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {favorites.map(
              (f) =>
                f.titles && (
                  <a
                    key={f.title_id}
                    href={`/title/${f.titles.slug}`}
                    className="card-hover block rounded-xl border border-nexa-border bg-nexa-panel overflow-hidden"
                  >
                    <div className="aspect-[2/3] bg-gradient-to-br from-nexa-purple/20 to-nexa-blue/10" />
                    <div className="p-3">
                      <p className="font-medium text-sm truncate">{f.titles.title}</p>
                      <p className="text-xs text-gray-500">{f.titles.category}</p>
                    </div>
                  </a>
                )
            )}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
