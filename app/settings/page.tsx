"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

export default function SettingsPage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
        return;
      }
      setUserId(data.user.id);
      const { data: profile } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", data.user.id)
        .single();
      setUsername(profile?.username ?? "");
      setLoading(false);
    })();
  }, [router]);

  async function handleSave() {
    if (!userId) return;
    await supabase.from("profiles").update({ username }).eq("id", userId);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (loading) return null;

  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />
      <section className="px-8 py-12 max-w-xl mx-auto">
        <Link href="/profile" className="flex items-center gap-1 text-sm text-smoke hover:text-carbon mb-8">
          <ChevronLeft size={16} /> Back to Profile
        </Link>
        <h1 className="text-2xl font-normal text-carbon mb-8">Settings</h1>

        <div className="rounded-card border border-charcoal bg-graphite p-6 mb-6">
          <p className="text-xs uppercase tracking-wide text-smoke mb-4">Account</p>
          <label className="text-sm text-carbon block mb-2">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-obsidian border border-charcoal rounded-lg px-4 py-3 text-sm text-carbon outline-none focus:border-iris mb-4"
          />
          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-pill bg-carbon text-obsidian text-sm font-medium"
          >
            {saved ? "Saved" : "Save changes"}
          </button>
        </div>

        <div className="rounded-card border border-red-900/40 bg-graphite p-6">
          <p className="text-xs uppercase tracking-wide text-smoke mb-4">Danger zone</p>
          <p className="text-sm text-smoke mb-4">
            Deleting your account permanently removes your favorites, history, and profile.
          </p>
          <button className="px-5 py-2.5 rounded-pill border border-red-900 text-red-400 text-sm font-normal">
            Delete account
          </button>
        </div>
      </section>
    </main>
  );
}
