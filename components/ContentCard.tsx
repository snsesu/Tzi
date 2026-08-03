export type ContentItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  rating: string;
};

export default function ContentCard({ item }: { item: ContentItem }) {
  return (
    <a
      href={`/title/${item.id}`}
      className="card-hover block rounded-lg border border-nexa-border bg-nexa-panel overflow-hidden"
    >
      <div className="aspect-[2/3] bg-gradient-to-br from-nexa-surface to-[#2b2b2b]" />
      <div className="p-3">
        <p className="font-medium text-sm truncate">{item.title}</p>
        <p className="text-xs text-nexa-slate flex items-center gap-2">
          <span>{item.year}</span>
          <span>\u00b7</span>
          <span>{item.category}</span>
          <span className="ml-auto text-nexa-muted">\u2605 {item.rating}</span>
        </p>
      </div>
    </a>
  );
}
