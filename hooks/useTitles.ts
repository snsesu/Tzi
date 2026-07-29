import { useEffect, useState } from "react";
import type { Title } from "@/lib/types/title";
import { titlesService } from "@/lib/services/titlesService";

export function useTitles() {
  const [titles, setTitles] = useState<Title[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    titlesService
      .getTitles()
      .then((data) => {
        if (mounted) setTitles(data);
      })
      .catch((err: Error) => {
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { titles, loading, error };
}
