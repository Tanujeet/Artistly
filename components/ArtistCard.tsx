"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Artist } from "@/lib/artist";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

type Props = {
  artist: Artist;
  onQuoteClick?: () => void;
};

const ArtistCard = ({ artist }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card text-card-foreground rounded-xl shadow-md overflow-hidden transition hover:shadow-lg flex flex-col">
      <Image
        src={artist.image}
        alt={artist.name}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{artist.name}</h3>
          <p className="text-sm text-muted-foreground">
            {artist.category} • {artist.location}
          </p>
          <p className="text-sm font-medium text-primary">{artist.price}</p>
        </div>

        {/* Dialog Trigger */}
        <div className="mt-4">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Ask for Quote</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Send Booking Request</DialogTitle>
                <DialogDescription>
                  You&apos;re requesting to book <b>{artist.name}</b>.
                </DialogDescription>
              </DialogHeader>

              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>Category:</strong> {artist.category}
                </p>
                <p>
                  <strong>Location:</strong> {artist.location}
                </p>
                <p>
                  <strong>Price:</strong> {artist.price}
                </p>
              </div>

              <DialogFooter className="mt-4">
                <Button onClick={() => setOpen(false)}>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
