"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Optional: if using ShadCN buttons

export default function HomePage() {
  return (
    <main className="px-6 py-12 space-y-16">
      {/* Hero section */}
      <section className="text-center space-y-4">
        <h1 className="font-bold text-4xl sm:text-5xl">Welcome to Artistly</h1>
        <p className="text-lg text-muted-foreground">
          Book top performing artists for your next event — hassle free!
        </p>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <Link href="/artists">
            <Button>Explore Artists</Button>
          </Link>
          <Link href="/onboard">
            <Button variant="outline">Onboard Artist</Button>
          </Link>
        </div>
      </section>

      {/* Category section */}
      <section>
        <h2 className="text-center text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["Singer", "Dancer", "DJ", "Speaker"].map((cat) => (
            <div
              key={cat}
              className="bg-card text-card-foreground p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <p className="text-lg font-medium">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">
          How it works
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-bold mb-1">1. Browse</h3>
            <p className="text-sm text-muted-foreground">
              Find the perfect artist
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">2. Request</h3>
            <p className="text-sm text-muted-foreground">
              Ask for availability
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">3. Book</h3>
            <p className="text-sm text-muted-foreground">
              Get confirmation fast
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
