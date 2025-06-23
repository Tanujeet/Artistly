"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Artist",
    href: "/artists",
  },
  {
    name: "Onboard",
    href: "/onboard",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-primary">Artistly</h1>
        <nav className="flex gap-4">
          {navLinks.map((index) => (
            <Link
              key={index.name}
              href={index.href}
              className={cn(
                "text-sm font-medium transition hover:text-primary",
                pathname === index.href && "text-primary underline"
              )}
            >
              {index.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
