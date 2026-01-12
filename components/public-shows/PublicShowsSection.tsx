"use client";
import { H2, P } from "../typography/typography";
import { SHOWS } from "./showsData";

export default function PublicShowsSection() {
  return (
    <section className="bg-black text-white pt-1 sm:pt-2 md:pt-4 lg:pt-6 pb-8 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-8">
        <H2 className="text-[#f5c518] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest uppercase">
          PUBLIC SHOWS
        </H2>
        <P className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider uppercase">
          THE MATRIX | A Spiritual Magic And Mentalism Show
        </P>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-4 lg:pr-8 xl:pl-6 xl:pr-12 2xl:pl-8 2xl:pr-16">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-3 sm:gap-4 lg:gap-4">
          
          {/* Left Side - Promotional Image Placeholder */}
          <div className="w-full order-1 flex items-center justify-center lg:justify-start lg:-ml-4 xl:-ml-6">
            <div className="relative w-full max-w-[500px] lg:max-w-[620px] aspect-square lg:aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
              {/* Placeholder - Replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Show Listings */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-2">
            {SHOWS.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        </div>

        {/* View All Shows Button - Centered across full page width */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
          <a
            href="https://in.bookmyshow.com/person/aakarsh-bhat/1057944"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f5c518] text-black font-bold py-4 sm:py-4.5 md:py-5 px-10 sm:px-12 md:px-16 rounded-3xl text-lg sm:text-xl md:text-2xl hover:bg-[#e5b508] transition-colors inline-block text-center"
          >
            View All Shows
          </a>
        </div>
      </div>
    </section>
  );
}

interface ShowCardProps {
  show: {
    id: string;
    date: number;
    month: string;
    city: string;
    venue: string;
    time: string;
    ticketUrl?: string;
    backgroundImage?: string;
  };
}

function ShowCard({ show }: ShowCardProps) {
  // Create a blurred background effect with city name
  const cityName = show.city.toUpperCase();
  
  return (
    <div 
      className="relative overflow-hidden border border-white w-full rounded-2xl min-h-[180px] sm:h-[160px] md:h-[170px]"
    >
      {/* Background image with gradient overlay - half black, half blurred image */}
      <div className="absolute inset-0">
        {/* Background image - ONLY on right half, blurred */}
        {show.backgroundImage && (
          <div 
            className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: `url("${show.backgroundImage}")`,
              filter: 'blur(2px) brightness(0.8)',
            }}
          />
        )}
        {/* Blurred city name text overlay - positioned on right side only, hidden on mobile */}
        <div className="hidden sm:flex absolute right-0 top-0 bottom-0 w-1/2 items-center justify-end pr-4 md:pr-6 lg:pr-8 z-10">
          <span className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-white/40 blur-[8px] md:blur-[10px] select-none pointer-events-none">
            {cityName}
          </span>
        </div>
        {/* Gradient overlay - solid black on left half, transparent on right half */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(to right, black 0%, black 50%, rgba(0,0,0,0.2) 60%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* Content - Responsive layout - Above all overlays */}
      <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-5 md:p-6 h-full min-h-[180px] sm:min-h-0">
        {/* Left Section - Date (stacked vertically) */}
        <div className="flex-shrink-0 mb-2 sm:mb-0 px-1 sm:px-4 md:px-6 flex flex-col items-start justify-center w-[80px] sm:w-[100px] md:w-[120px]">
          <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
            {show.date}
          </span>
          <span className="text-base sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider mt-0.5 sm:mt-1">
            {show.month}
          </span>
        </div>

        {/* White vertical line divider */}
        <div className="hidden sm:block w-[2px] h-full bg-white mx-2 md:mx-4 flex-shrink-0"></div>

        {/* Middle Section - Details */}
        <div className="flex-1 w-full sm:w-auto px-1 sm:px-4 md:px-6 flex flex-col justify-center gap-0.5 sm:gap-1.5">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white">
            {show.city}
          </h3>
          {show.venue && (
            <p className="text-xs sm:text-sm md:text-base text-white leading-tight">
              Venue: {show.venue}
            </p>
          )}
          <p className="text-xs sm:text-sm md:text-base text-white leading-tight">
            Time: {show.time}
          </p>
          <div className="mt-1.5 sm:mt-3">
            <button
              onClick={() => {
                if (show.ticketUrl) {
                  window.open(show.ticketUrl, "_blank");
                }
              }}
              className="bg-[#f5c518] text-black font-bold py-1.5 sm:py-2 px-3 sm:px-5 rounded-full text-xs sm:text-sm hover:bg-[#e5b508] transition-colors"
            >
              Book Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

