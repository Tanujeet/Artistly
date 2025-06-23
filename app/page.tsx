"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-6 py-12 space-y-16">
      {/* {Hero section} */}
      <section className="text-center space-y-4">
        <h1 className="font-bold text-4xl">Welcome To Artistly</h1>
        <p className="text-lg text-muted-foreground">
          Book top performing artist for next event .hassleFree
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/artist">
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Explore Artists
            </button>
          </Link>
          <Link href="/onboard">
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              onboard Artist
            </button>
          </Link>
        </div>
      </section>

      {/* {Category section} */}
      <section>
        <h2 className="text-center text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["Singer", "Dancer", "DJ", "Speaker"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <p className="text-lg font-medium">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works  */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-semibold">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-bold">1.Browse</h3>
            <p className="text-sm text-muted-foreground">
              Find the perfect artist
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">2. Request</h3>
            <p className="text-sm text-muted-foreground">
              Ask for availability
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">3. Book</h3>
            <p className="text-sm text-muted-foreground">
              Get confirmation fast
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
