"use client";
import { useState } from "react";
import Image from "next/image";
import { events, Event } from "@/data/events";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <main className="relative w-full overflow-hidden">
      <section className="relative w-full ">
        {/* Desktop Image */}
        <div className="bg-black hidden md:block w-full">
          <Image
            src="/images/event-banner-image.webp"
            alt="Illusionist Axe"
            width={2000}
            height={900}
            priority
            className="w-full h-auto object-contain"
            sizes="100vw"
          />
        </div>
        {/* Mobile Image */}
        <div className="relative block md:hidden w-full bg-black">
          <Image
            src="/images/hero-image-mobile.jpg"
            alt="Illusionist Axe"
            width={900}
            height={1400}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Single Overlay - Very light for better image visibility */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </section>
      {/* Upcoming Events Section */}
      <section className="bg-black py-10 px-2 sm:px-4">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-yellow-400 mb-10 sm:mb-14 tracking-wide">
          Upcoming Events
        </h2>

        <div className="w-full max-w-[1800px] mx-auto px-2 sm:px-4 md:px-8 grid gap-6 sm:gap-8 grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </section>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </main>
  );
}


function EventCard({ event, onClick }: { event: Event; onClick: () => void }) {
  const isPlaceholder = !event.banner_image && !event.city;

  return (
    <div
      onClick={onClick}
      className="
        w-full
        min-w-[300px]
        sm:min-w-[320px]
        md:min-w-[360px]
        lg:min-w-[400px]
        max-w-[640px]
        rounded-xl sm:rounded-2xl overflow-hidden
        shadow-[0_0_25px_rgba(168,85,247,0.35)]
        bg-white border-2 sm:border-4
        cursor-pointer
        transition-transform hover:scale-105
        mx-auto
        flex flex-col
      "
    >
      {!isPlaceholder ? (
        <>
          {/* Image */}
          <div className="relative w-full aspect-[5/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden">
            <Image
              src={event.banner_image}
              alt={event.city}
              fill
              className="object-fit w-full h-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={event.id <= 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
          </div>
          {/* Bottom Section */}
          <div
            className="
              bg-white
              px-3 sm:px-4 md:px-5 lg:px-6 
              py-3 sm:py-3.5 md:py-4 lg:py-4.5
              flex items-start sm:items-center
              gap-2.5 sm:gap-3 md:gap-4 lg:gap-5
              min-h-[110px] sm:min-h-[115px] md:min-h-[125px] lg:min-h-[135px]
            "
          >
            {/* Date */}
            <div className="flex-shrink-0 min-w-[65px] sm:min-w-[75px] md:min-w-[85px] lg:min-w-[95px] pt-1">
              <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide whitespace-nowrap">
                {event.date.split(' ')[0]}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-none mt-0.5">
                {event.date.split(' ')[1]}
              </div>
            </div>

            {/* Venue / Time */}
            <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold break-words leading-snug">
                <span className="whitespace-nowrap">Venue:</span> {event.venue || "--"}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold break-words leading-snug">
                <span className="whitespace-nowrap">Time:</span> {event.time || "--"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-gray-200" />
      )}
    </div>
  );
}

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-md bg-black rounded-xl sm:rounded-2xl overflow-hidden
          shadow-lg
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* City Image */}
        <div className="relative w-full"> <Image src={event.banner_image} alt={event.city} width={1200} height={400} className="w-full h-auto rounded-t-2xl" /> </div>

        {/* Event Details */}
        <div className="bg-black p-4 sm:p-6 md:p-8 text-white text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {event.city.charAt(0) + event.city.slice(1).toLowerCase()}
          </h2>

          <div className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl lg:text-2xl">
            <p className="font-semibold min-h-[1.5rem]">
              Venue: {event.venue}
            </p>
            <p className="font-semibold min-h-[1.5rem]">
              Time: {event.time}
            </p>
          </div>

          {/* Book Tickets Button */}
          <button
            className="
              mt-4 sm:mt-6 w-full
              bg-yellow-400 text-black
              font-bold text-base sm:text-lg md:text-xl
              py-2.5 sm:py-3 px-4 sm:px-6
              rounded-lg sm:rounded-xl
              hover:bg-yellow-500
              transition-colors
            "
          >
            Book tickets
          </button>
        </div>
      </div>
    </div>
  );
}
