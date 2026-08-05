"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Settings, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

type ProfileRow = {
  username: string | null;
  genres: string[] | null;
  is_premium: boolean | null;
};

export default function ProfilePage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
        return;
      }
      setEmail(data.user.email ?? "");
      setCreatedAt(
        new Date(data.user.created_at).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })
      );

      const { data: profileRow } = await supabase
        .from("profiles")
        .select("username, genres, is_premium")
        .eq("id", data.user.id)
        .single();
      setProfile(profileRow);

      const { count } = await supabase
        .from("favorites")
        .select("*", { count: "exact", head: true })
        .eq("user_id", data.user.id);
      setFavoritesCount(count ?? 0);

      setLoading(false);
    })();
  }, [router]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) return null;

  const displayName = profile?.username || email.split("@")[0] || "Explorer";
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />
      <section className="px-8 py-12 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-medium text-carbon bg-iris/20 border border-iris/40">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl font-normal text-carbon">{displayName}</h1>
              <p className="text-sm text-smoke mt-1">
                Member since {createdAt} {profile?.is_premium && "\u00b7 Premium"}
              </p>
            </div>
          </div>
          <Link href="/settings" className="text-carbon/70 hover:text-carbon">
            <Settings size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="rounded-card border border-charcoal bg-graphite p-5">
            <p className="text-2xl font-medium text-carbon">{favoritesCount}</p>
            <p className="text-[11px] uppercase tracking-wide text-smoke mt-1">Favorites</p>
          </div>
          <div className="rounded-card border border-charcoal bg-graphite p-5">
            <p className="text-2xl font-medium text-carbon">{profile?.genres?.length ?? 0}</p>
            <p className="text-[11px] uppercase tracking-wide text-smoke mt-1">Genres picked</p>
          </div>
          <div className="rounded-card border border-charcoal bg-graphite p-5">
            <p className="text-2xl font-medium text-carbon">{profile?.is_premium ? "Premium" : "Free"}</p>
            <p className="text-[11px] uppercase tracking-wide text-smoke mt-1">Plan</p>
          </div>
        </div>

        {!profile?.is_premium && (
          <div className="rounded-card border border-twilight shadow-halo bg-graphite p-6 mb-12 flex items-center justify-between">
            <div>
              <p className="text-carbon font-medium">Unlock 4K & offline downloads</p>
              <p className="text-sm text-smoke mt-1">Go Premium for the full NEXA universe.</p>
            </div>
            <Link href="/premium" className="px-5 py-2.5 rounded-pill bg-carbon text-obsidian text-sm font-medium whitespace-nowrap">
              View plans
            </Link>
          </div>
        )}

        <div className="flex gap-6">
          <Link href="/universe" className="text-sm text-carbon/80 hover:text-carbon">My Universe</Link>
          <Link href="/settings" className="text-sm text-carbon/80 hover:text-carbon">Settings</Link>
          <button onClick={handleSignOut} className="flex items-center gap-1.5 text-sm text-smoke hover:text-red-400 ml-auto">
            <LogOut size={14} /> Sign out
          </button>
        </div>
      </section>
    </main>
  );
}
