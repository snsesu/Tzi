"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/categories" },
  { label: "Anime", href: "/categories" },
  { label: "Series", href: "/categories" },
  { label: "Discover", href: "/search" },
  { label: "My Universe", href: "/login" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-nexa-border/60">
      <Link href="/" className="text-xl font-bold tracking-widest">
        NEXA
      </Link>

      <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        {links.map((link, i) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={i === 0 ? "text-white" : "hover:text-white cursor-pointer"}
            >
              {link.label.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link
          href="/search"
          className="w-9 h-9 rounded-full border border-nexa-border flex items-center justify-center"
        >
          <Search size={16} />
        </Link>
        <Link
          href="/login"
          className="text-sm text-gray-300 hidden sm:block cursor-pointer"
        >
          SIGN IN
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 rounded-lg border border-nexa-purple text-sm font-medium shadow-glow"
        >
          SIGN UP
        </Link>
      </div>
    </nav>
  );
}
