export interface Title {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: number | null;
  rating: number | null;
  synopsis: string | null;
  poster_url: string | null;
  telegram_file_id: string | null;
  telegram_channel_id: string | null;
  created_at: string;
}
