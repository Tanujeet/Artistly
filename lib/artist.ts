export type Artist = {
  id: string;
  name: string;
  category: string;
  price: string;
  location: string;
  languages: string[];
  image: string;
};

export const artists: Artist[] = [
  {
    id: "1",
    name: "Riya Sharma",
    category: "Singer",
    price: "₹10,000 - ₹20,000",
    location: "Mumbai",
    languages: ["Hindi", "English"],
    image: "/assets/riya.jpg",
  },
  {
    id: "2",
    name: "Kunal Dance Crew",
    category: "Dancer",
    price: "₹15,000 - ₹25,000",
    location: "Delhi",
    languages: ["Hindi"],
    image: "/assets/kunal.jpg",
  },
  {
    id: "3",
    name: "DJ Nitesh",
    category: "DJ",
    price: "₹5,000 - ₹10,000",
    location: "Bangalore",
    languages: ["English"],
    image: "/assets/nitesh.jpg",
  },
  {
    id: "4",
    name: "Priya Rao",
    category: "Speaker",
    price: "₹8,000 - ₹12,000",
    location: "Chennai",
    languages: ["English", "Tamil"],
    image: "/assets/priya.jpg",
  },
];
