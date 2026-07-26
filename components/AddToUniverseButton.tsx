"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AddToUniverseButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function check() {
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData.session;
      if (!session) return;

      const { data: title } = await supabase
        .from("titles")
        .select("id")
        .eq("slug", slug)
        .single();
      if (!title) return;

      const { data: fav } = await supabase
        .from("favorites")
        .select("title_id")
        .eq("user_id", session.user.id)
        .eq("title_id", title.id)
        .maybeSingle();

      setSaved(!!fav);
    }
    check();
  }, [slug]);

  async function toggle() {
    setLoading(true);
    const { data: sessionData } = await supabase.auth.getSession();
    const session = sessionData.session;

    if (!session) {
      router.push("/login");
      return;
    }

    const { data: title } = await supabase
      .from("titles")
      .select("id")
      .eq("slug", slug)
      .single();

    if (!title) {
      setLoading(false);
      return;
    }

    if (saved) {
      await supabase
        .from("favorites")
        .delete()
        .eq("user_id", session.user.id)
        .eq("title_id", title.id);
      setSaved(false);
    } else {
      await supabase
        .from("favorites")
        .insert({ user_id: session.user.id, title_id: title.id });
      setSaved(true);
    }
    setLoading(false);
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className="flex items-center gap-2 px-6 py-3 rounded-lg border border-nexa-border text-sm font-medium disabled:opacity-50"
    >
      {saved ? <Check size={16} /> : <Plus size={16} />}
      {saved ? "IN MY UNIVERSE" : "MY UNIVERSE"}
    </button>
  );
}
