import { titlesRepository } from "@/lib/repositories/titlesRepository";
import type { Title } from "@/lib/types/title";

export const titlesService = {
  async getTitles(): Promise<Title[]> {
    return titlesRepository.getAll();
  },

  async getTitleBySlug(slug: string): Promise<Title | null> {
    return titlesRepository.getBySlug(slug);
  },
};
