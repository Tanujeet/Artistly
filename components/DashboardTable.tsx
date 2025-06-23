"use client";

import { submittedArtists } from "@/lib/dashboardData";
import { Button } from "@/components/ui/button";

export default function DashboardTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm text-left min-w-[600px]">
        <thead className="bg-muted">
          <tr className="text-muted-foreground">
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">City</th>
            <th className="p-3">Fee</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {submittedArtists.map((artist) => (
            <tr key={artist.id} className="border-t border-border">
              <td className="p-3">{artist.name}</td>
              <td className="p-3">{artist.category}</td>
              <td className="p-3">{artist.location}</td>
              <td className="p-3">{artist.fee}</td>
              <td className="p-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert(`Viewing ${artist.name}`)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
