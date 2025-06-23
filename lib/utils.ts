import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Artist } from "./artist";

// 👉 For conditional classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 👉 For filtering artist list
type Filters = {
  category?: string;
  location?: string;
  price?: string;
};

export const filterArtists = (data: Artist[], filters: Filters): Artist[] => {
  return data.filter((artist) => {
    const matchCategory =
      !filters.category || artist.category === filters.category;
    const matchLocation =
      !filters.location ||
      artist.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchPrice = !filters.price || artist.price === filters.price;

    return matchCategory && matchLocation && matchPrice;
  });
};
