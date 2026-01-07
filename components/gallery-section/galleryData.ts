export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  featured?: boolean; // For the large central image
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/Gallery/Nayan Mongia.webp",
    alt: "Aakarsh with Nayan Mongia",
  },
  {
    id: "2",
    src: "/Gallery/Sachin Tendulkar.webp",
    alt: "Aakarsh with Sachin Tendulkar",
  },
  {
    id: "3",
    src: "/Gallery/Anant Ambani.webp",
    alt: "Aakarsh with Anant Ambani",
  },
  {
    id: "4",
    src: "/Gallery/Rashmika Mandana.webp",
    alt: "Aakarsh with Rashmika Mandanna",
  },
  {
    id: "5",
    src: "/Gallery/Puneet Rajkumar.webp",
    alt: "Aakarsh with Puneet Rajkumar",
  },
  {
    id: "6",
    src: "/Gallery/Disha Patniwebp",
    alt: "Aakarsh with Disha Patani",
  },
  {
    id: "7",
    src: "/Gallery/Anil Kapoor.webp",
    alt: "Aakarsh with Anil Kapoor",
  },
  {
    id: "8",
    src: "/Gallery/Gautam Adani.webp",
    alt: "Aakarsh with Gautam Adani",
  },
];
