const links = ["ABOUT", "CONTACT", "HELP", "TERMS", "PRIVACY"];

export default function Footer() {
  return (
    <footer className="px-8 py-6 border-t border-nexa-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
      <div className="font-bold tracking-widest text-white">NEXA</div>
      <p>\u00a9 2024 NEXA. All rights reserved.</p>
      <ul className="flex gap-6">
        {links.map((l) => (
          <li key={l} className="hover:text-white cursor-pointer">
            {l}
          </li>
        ))}
      </ul>
    </footer>
  );
}
