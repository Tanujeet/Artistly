"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Artist", href: "/artists" },
  { name: "Onboard", href: "/onboard" },
  { name: "Dashboard", href: "/dashboard" },
];

const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-background text-foreground shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-primary">Artistly</h1>
        <nav className="flex items-center gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition hover:text-primary",
                pathname === item.href && "text-primary underline"
              )}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-sm px-2 py-1 rounded border hover:bg-muted transition"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
