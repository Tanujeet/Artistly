import { Artist } from "./artist";

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
