"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Hexagon, User } from "lucide-react";

const tabs = [
  { label: "Home", href: "/", icon: Home },
  { label: "Search", href: "/search", icon: Search },
  { label: "My Universe", href: "/universe", icon: Hexagon },
  { label: "Profile", href: "/profile", icon: User },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-void/95 backdrop-blur border-t border-charcoal">
      <div className="flex items-center justify-around py-2">
        {tabs.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 px-4 py-1"
            >
              <Icon size={20} className={active ? "text-iris" : "text-smoke"} />
              <span className={`text-[10px] ${active ? "text-iris" : "text-smoke"}`}>
                {label}
              </span>
              {active && <span className="w-1 h-1 rounded-full bg-iris" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
