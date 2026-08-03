"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/categories" },
  { label: "Anime", href: "/categories" },
  { label: "Series", href: "/categories" },
  { label: "Discover", href: "/search" },
  { label: "My Universe", href: "/universe" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <Link href="/" className="text-base font-normal tracking-widest text-carbon">
        NEXA
      </Link>

      <ul className="hidden md:flex items-center gap-8 text-sm">
        {links.map((link, i) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={
                i === 0
                  ? "text-carbon"
                  : "text-carbon/70 hover:text-carbon hover:underline underline-offset-4 transition"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <Link href="/search" className="text-carbon/70 hover:text-carbon">
          <Search size={18} />
        </Link>
        <Link href="/login" className="text-sm text-carbon hidden sm:block">
          Sign in
        </Link>
        <Link
          href="/login"
          className="px-5 py-3 rounded-pill text-sm font-medium bg-carbon text-obsidian"
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}
