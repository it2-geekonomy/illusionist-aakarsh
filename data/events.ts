export interface Event {
  id: number;
  banner_image: string;
  city: string;
  date: string;
  venue: string;
  time: string;
  ticket_link?: string;
}

export const events: Event[] = [
  {
    id: 1,
    banner_image: "/images/feb-22-event.jpg",
    city: "BANGALORE",
    date: "Feb 22",
    venue: "Ramana Maharshi Heritage Auditorium",
    time: "6:30 PM onwards",
    ticket_link: "https://in.bookmyshow.com/events/the-matrix-magic-mentalism-show-of-aakarsh/ET00456396?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnt3DOL8JExhSFpG94rOfEc35SB3yBv8gZoiI8z2r3lEKug-it1TZKmhz06Ko_aem_3_4k3kAqeWesDUBdNJ77gQ",
  },
  // {
  //   id: 2,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "MUMBAI",
  //   date: "JAN 18",
  //   venue: "Prithvi Theatre, Juhu",
  //   time: "8:30 PM onwards",
  // },
  // {
  //   id: 3,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "NEW DELHI",
  //   date: "JAN 25",
  //   venue: "Kamani Auditorium, Mandi House",
  //   time: "6:45 PM onwards",
  // },
  // {
  //   id: 4,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "HYDERABAD",
  //   date: "FEB 02",
  //   venue: "Ravindra Bharathi Auditorium",
  //   time: "7:30 PM onwards",
  // },
  // {
  //   id: 5,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "CHENNAI",
  //   date: "FEB 08",
  //   venue: "Museum Theatre, Egmore",
  //   time: "6:00 PM onwards",
  // },
  // {
  //   id: 6,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "PUNE",
  //   date: "FEB 15",
  //   venue: "Yashwantrao Chavan Natyagruha",
  //   time: "8:00 PM onwards",
  // },
  // {
  //   id: 7,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "KOCHI",
  //   date: "FEB 21",
  //   venue: "JT Performing Arts Center",
  //   time: "7:15 PM onwards",
  // },
  // {
  //   id: 8,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "AHMEDABAD",
  //   date: "FEB 28",
  //   venue: "Tagore Memorial Hall",
  //   time: "6:30 PM onwards",
  // },
  // {
  //   id: 9,
  //   banner_image: "/images/banglore-evensts.png",
  //   city: "KOLKATA",
  //   date: "MAR 05",
  //   venue: "Gyan Manch Auditorium",
  //   time: "7:45 PM onwards",
  // },
];
