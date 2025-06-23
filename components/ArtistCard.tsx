"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Artist } from "@/lib/artist";

type Props = {
  artist: Artist
  
  onQuoteClick?: () => void;
};

const ArtistCard = ({ artist, onQuoteClick }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg flex flex-col">
      <Image
        src={artist.image}
        alt={artist.name}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{artist.name}</h3>
          <p className="text-sm text-muted-foreground">
            {artist.category} • {artist.location}
          </p>
          <p className="text-sm mt-1 font-medium text-primary">
            {artist.price}
          </p>
        </div>
        <div className="mt-4">
          <Button onClick={onQuoteClick}>Ask for Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
