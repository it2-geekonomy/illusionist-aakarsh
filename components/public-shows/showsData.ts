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
    date: 19,
    month: "APR",
    city: "Bangalore",
    venue: "Ramana Maharshi Heritage Auditorium, Sanjay Nagar",
    time: "6:30 PM",
    backgroundImage: "/public-shows background image/public-shows background image1.webp",
    ticketUrl: "https://in.bookmyshow.com/events/the-matrix-magic-mentalism-show-of-aakarsh/ET00456396",
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

