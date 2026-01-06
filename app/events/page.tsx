"use client";
import { useState } from "react";
import Image from "next/image";
import { events, Event } from "@/data/events";
import { H2, H3, H4, H6, P } from "@/components/typography/typography";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  return (
    <main className="relative w-full min-h-[100dvh] bg-black flex flex-col">
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
      <section className="bg-black py-[clamp(2.5rem,5vw,3.5rem)] px-[clamp(0.5rem,2vw,1rem)]">
        <H2 className="text-center text-yellow-400 mb-[clamp(2.5rem,5vw,3.5rem)]">
          Upcoming Events
        </H2>

        <div className="w-full max-w-[1800px] mx-auto px-[clamp(0.5rem,2vw,2rem)] flex-1">
          {events.length === 0 ? (
            <div className="text-center">
              <P className="font-semibold text-gray-300">
                No upcoming events right now.
              </P>
              <P className="text-gray-400 mt-2">
                Please check back soon!
              </P>
            </div>
          ) : (
            <div className="grid gap-[clamp(1.5rem,3vw,2rem)] grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          )}
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
      className="w-full min-w-[clamp(300px,25vw,400px)] max-w-[640px] rounded-[clamp(0.75rem,2vw,1.5rem)] border-[clamp(2px,0.3vw,4px)] border-solid border-gray-200 overflow-hidden bg-white cursor-pointer transition-transform hover:scale-105 mx-auto flex flex-col"
    >
      {!isPlaceholder ? (
        <>
          {/* Image */}
          <div className="relative w-full aspect-[clamp(1.6,16/9,1.778)] overflow-hidden">
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
          <div className="bg-white px-[clamp(0.75rem,2vw,1.5rem)] py-[clamp(0.75rem,1.5vw,1.125rem)] gap-[clamp(0.625rem,2vw,1.25rem)] min-h-[clamp(110px,15vw,135px)] flex items-start sm:items-center">
            {/* Date */}
            <div className="flex-shrink-0 min-w-[clamp(65px,8vw,95px)] pt-1">
              <H6 className="uppercase">
                {event.date.split(" ")[0]}
              </H6>
              <H3 className="leading-none mt-0.5">
                {event.date.split(" ")[1]}
              </H3>
            </div>

            {/* Venue / Time */}
            <div className="flex-1 min-w-0 space-y-2">
              <P className="font-semibold leading-snug">
                <span className="font-bold">Venue:</span> {event.venue || "--"}
              </P>
              <P className="font-semibold leading-snug">
                <span className="font-bold">Time:</span> {event.time || "--"}
              </P>
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
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-[clamp(0.5rem,2vw,1rem)]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-black rounded-[clamp(0.75rem,2vw,1rem)] overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* City Image */}
        <div className="relative w-full"> <Image src={event.banner_image} alt={event.city} width={1200} height={400} className="w-full h-auto rounded-t-2xl" /> </div>
        {/* Event Details */}
        <div className="bg-black p-[clamp(1rem,3vw,2rem)] text-white text-center space-y-[clamp(0.75rem,2vw,1rem)]">
          <H2>
            {event.city.charAt(0) + event.city.slice(1).toLowerCase()}
          </H2>
          <div className="space-y-[clamp(0.5rem,1.5vw,0.75rem)]">
            <P className="font-semibold min-h-[1.5rem]">
              Venue: {event.venue}
            </P>
            <P className="font-semibold min-h-[1.5rem]">
              Time: {event.time}
            </P>
          </div>

          {/* Book Tickets Button */}
          <button className="mt-[clamp(1rem,2vw,1.5rem)] w-full bg-yellow-400 text-black font-bold text-[clamp(1rem,2vw,1.25rem)] py-[clamp(0.625rem,1.5vw,0.75rem)] px-[clamp(1rem,2vw,1.5rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] hover:bg-yellow-500 transition-colors">
            Book tickets
          </button>
        </div>
      </div>
    </div>
  );
}
