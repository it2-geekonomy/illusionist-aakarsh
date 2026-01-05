export interface Show {
  id: string;
  date: number;
  month: string;
  city: string;
  venue: string;
  time: string;
  ticketUrl?: string;
  backgroundImage?: string;
}

export const SHOWS: Show[] = [
  {
    id: "1",
    date: 4,
    month: "JAN",
    city: "Bangalore",
    venue: "Vyoma Artspace",
    time: "6:15 PM onwards",
    backgroundImage: "/public-shows background image/public-shows background image1.webp",
  },
  {
    id: "2",
    date: 22,
    month: "FEB",
    city: "Hyderabad",
    venue: "",
    time: "7:00 PM onwards",
    backgroundImage: "/public-shows background image/public-shows background image2.webp",
  },
  {
    id: "3",
    date: 21,
    month: "APR",
    city: "Mumbai",
    venue: "xyz center",
    time: "7:00 PM onwards",
    backgroundImage: "/public-shows background image/public-shows background image3.webp",
  },
];

