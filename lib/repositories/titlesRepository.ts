import { supabase } from "@/lib/supabase";
import type { Title } from "@/lib/types/title";

export class TitlesRepository {
  async getAll(): Promise<Title[]> {
    const { data, error } = await supabase
      .from("titles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return data ?? [];
  }

  async getBySlug(slug: string): Promise<Title | null> {
    const { data, error } = await supabase
      .from("titles")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }
}

export const titlesRepository = new TitlesRepository();
