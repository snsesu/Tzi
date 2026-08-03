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
    <nav className="flex items-center justify-between px-8 py-5 border-b border-nexa-border/60">
      <Link href="/" className="text-base font-normal tracking-widest">
        NEXA
      </Link>

      <ul className="hidden md:flex items-center gap-8 text-sm text-nexa-slate">
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

      <div className="flex items-center gap-5">
        <Link href="/search" className="text-nexa-slate hover:text-white">
          <Search size={18} />
        </Link>
        <Link href="/login" className="text-sm text-nexa-slate hidden sm:block cursor-pointer">
          Sign in
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 rounded text-sm font-semibold bg-white text-black"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
