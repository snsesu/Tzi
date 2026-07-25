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
      className="card-hover block rounded-xl border border-nexa-border bg-nexa-panel overflow-hidden"
    >
      <div className="aspect-[2/3] bg-gradient-to-br from-nexa-purple/20 to-nexa-blue/10" />
      <div className="p-3">
        <p className="font-medium text-sm truncate">{item.title}</p>
        <p className="text-xs text-gray-500 flex items-center gap-2">
          <span>{item.year}</span>
          <span>\u00b7</span>
          <span>{item.category}</span>
          <span className="ml-auto text-nexa-purple">\u2605 {item.rating}</span>
        </p>
      </div>
    </a>
  );
}
