"use client";

import { useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import { artists as allArtists } from "@/lib/artist";
import { filterArtists } from "@/lib/utils";

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const prices = [
  "₹5,000 - ₹10,000",
  "₹8,000 - ₹12,000",
  "₹10,000 - ₹20,000",
  "₹15,000 - ₹25,000",
];

export default function ArtistsPage() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const filtered = filterArtists(allArtists, {
    category,
    location,
    price,
  });

  return (
    <main className="p-6 space-y-6">
      {/* Filter Controls */}
      <section className="grid gap-4 sm:grid-cols-3">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-background text-foreground border border-input rounded-md px-3 py-2"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-background text-foreground border border-input rounded-md px-3 py-2"
        />

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-background text-foreground border border-input rounded-md px-3 py-2"
        >
          <option value="">All Price Ranges</option>
          {prices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </section>

      {/* Artist Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onQuoteClick={() => alert(`Request sent for ${artist.name}`)}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-muted-foreground">
            No artists found.
          </p>
        )}
      </section>
    </main>
  );
}
