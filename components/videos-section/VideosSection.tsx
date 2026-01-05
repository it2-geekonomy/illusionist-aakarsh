"use client";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { H2, P } from "../typography/typography";
import { featuredVideo, rightVideos, youtubeChannelUrl } from "./videosData";

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-black text-white py-10">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-10">
        <H2 className="text-[#f5c518] text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold tracking-widest">
          VIDEOS
        </H2>
        <P className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.2rem] tracking-wider">
          THE ART OF ILLUSION, CAPTURED.
        </P>
      </div>

      {/* Content */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-20 2xl:px-20">
        <div className="grid gap-8 sm:gap-12 md:gap-16 lg:gap-20 grid-cols-1 lg:grid-cols-2">

          {/* LEFT */}
          <VideoCard
            variant="large"
            video={featuredVideo}
            onClick={setActiveVideo}
          />

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-6 sm:gap-y-8 md:gap-y-10">
            {rightVideos.map((video, i) => (
              <VideoCard
                key={i}
                variant="small"
                video={video}
                onClick={setActiveVideo}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Watch More Button */}
      <div className="flex justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
        <a
          href={youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#f5c518] text-black font-bold px-4 sm:px-6 md:px-8 py-2 rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-[2rem] border-none outline-none">
            Watch More
          </button>
        </a>
      </div>

      {/* ✅ POPUP MODAL (YOUTUBE STYLE) */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Close Button */}
           <div className="absolute top-2 sm:top-3 right-2 z-10 flex items-center">
              <button
                onClick={() => setActiveVideo(null)}
                className="text-white text-2xl sm:text-3xl hover:opacity-80 transition-opacity ml-8 sm:ml-10 md:ml-12"
              >
                ✕
              </button>
            </div>

          <div className="relative w-[95vw] sm:w-[90vw] max-w-5xl bg-black rounded-lg overflow-hidden mx-2 sm:mx-0">

            {/* YouTube Player */}
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            {/* Watch on YouTube */}
            <div className="p-3 sm:p-4 text-center">
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f5c518] text-black font-bold px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base"
              >
                Watch on YouTube
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
//gitcheck