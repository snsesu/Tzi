import type { Title } from "@/lib/types/title";

export default function ContentCard({ item }: { item: Title }) {
  return (
    <a
      href={`/title/${item.slug}`}
      className="block rounded-card border border-charcoal bg-graphite overflow-hidden group"
    >
      <div className="aspect-[2/3] relative overflow-hidden">
        {item.poster_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.poster_url}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a2440] to-[#2f4a78]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      <div className="p-3">
        <p className="font-medium text-sm truncate text-carbon">{item.title}</p>
        <p className="text-xs text-smoke flex items-center gap-2">
          <span>{item.year ?? "\u2014"}</span>
          <span>\u00b7</span>
          <span className="truncate">{item.category}</span>
          {item.rating != null && (
            <span className="ml-auto text-ash">\u2605 {item.rating}</span>
          )}
        </p>
      </div>
    </a>
  );
}
