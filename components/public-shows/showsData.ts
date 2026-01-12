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
    date: 22,
    month: "FEB",
    city: "Bangalore",
    venue: "Ramana Maharshi Heritage Auditorium",
    time: "6:30 PM onwards",
    backgroundImage: "/public-shows background image/public-shows background image1.webp",
    ticketUrl: "https://in.bookmyshow.com/events/the-matrix-magic-mentalism-show-of-aakarsh/ET00456396?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnt3DOL8JExhSFpG94rOfEc35SB3yBv8gZoiI8z2r3lEKug-it1TZKmhz06Ko_aem_3_4k3kAqeWesDUBdNJ77gQ",
  },
  // {
  //   id: "2",
  //   date: 22,
  //   month: "FEB",
  //   city: "Hyderabad",
  //   venue: "Vyoma Artspace",
  //   time: "7:00 PM onwards",
  //   backgroundImage: "/public-shows background image/public-shows background image2.webp",
  // },
  // {
  //   id: "3",
  //   date: 21,
  //   month: "APR",
  //   city: "Mumbai",
  //   venue: "xyz center",
  //   time: "7:00 PM onwards",
  //   backgroundImage: "/public-shows background image/public-shows background image3.webp",
  // },
];

