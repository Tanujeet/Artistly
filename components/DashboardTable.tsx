"use client";

import { useState } from "react";
import { submittedArtists } from "@/lib/dashboardData";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
type Artist = {
  id: string;
  name: string;
  category: string;
  location: string;
  fee: string;
};

export default function DashboardTable() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <>
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedArtist(artist)}
                      >
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{selectedArtist?.name}</DialogTitle>
                        <DialogDescription>
                          Artist details from submitted list
                        </DialogDescription>
                      </DialogHeader>
                      <div className="text-sm space-y-2 text-muted-foreground">
                        <p>
                          <strong>Category:</strong> {selectedArtist?.category}
                        </p>
                        <p>
                          <strong>Location:</strong> {selectedArtist?.location}
                        </p>
                        <p>
                          <strong>Fee:</strong> {selectedArtist?.fee}
                        </p>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => setSelectedArtist(null)}>
                          Close
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
