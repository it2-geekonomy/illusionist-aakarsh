import Image from "next/image";
import { events, Event } from "@/data/events";

export default function Home() {
  return (
    <main className="min-h-screen bg-black py-10 px-4">
      {/* Title */}
      <h1 className="text-center text-5xl font-bold text-yellow-400 mb-14 tracking-wide">
        Upcoming Events
      </h1>

      {/* Grid */}
      <div
        className="
          w-full mx-auto
          grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}

function EventCard({ event }: { event: Event }) {
  const isPlaceholder = !event.banner_image && !event.city;

  return (
    <div
      className="
        w-full max-w-[1400px]
        aspect-[553/335]
        rounded-2xl overflow-hidden
        shadow-[0_0_25px_rgba(168,85,247,0.35)]
        bg-white border-4
      "
    >
      {!isPlaceholder ? (
        <>
          {/* Image Section */}
          <div className="relative h-2/3">
            <Image
              src={event.banner_image}
              alt={event.city}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
          </div>

          {/* Bottom Section (Figma-style layout) */}
          <div className="h-1/3 bg-white px-6 py-4 grid grid-cols-[90px_1fr] items-center">
            {/* Date Column */}
            <div>
              <div className="text-xs font-bold tracking-wide uppercase">
                {event.date.split(" ")[0]}
              </div>
              <div className="text-4xl font-black">
                {event.date.split(" ")[1]}
              </div>
            </div>

            {/* Venue / Time Column*/}
            <div className="pl-4 leading-tight">
              <p className="text-lg font-semibold">
                Venue: {event.venue || "--"}
              </p>
              <p className="text-lg font-semibold">
                Time: {event.time || "--"}
              </p>
            </div>
          </div>
        </>
      ) : (
        // Placeholder card (empty slot)
        <div className="w-full h-full bg-gray-200" />
      )}
    </div>
  );
}
