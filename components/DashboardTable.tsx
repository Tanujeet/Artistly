"use client"

import { submittedArtists } from "@/lib/dashboardData";
import { Button } from "@/components/ui/button";

export default function DashboardTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">City</th>
            <th className="p-3 text-left">Fee</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {submittedArtists.map((artist) => (
            <tr key={artist.id} className="border-t">
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
