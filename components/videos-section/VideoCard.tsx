import { P } from "../typography/typography";

type VideoCardProps = {
  video: {
    title: string;
    thumbnail?: string;
    videoId: string;
  };
  variant?: "large" | "small";
  onClick: (videoId: string) => void;
};

export default function VideoCard({
  video,
  variant = "small",
  onClick,
}: VideoCardProps) {
  // Generate thumbnail URL if not provided
  const thumbnailUrl =
    video.thumbnail ||
    `https://img.youtube.com/vi/${video.videoId}/${variant === "large" ? "maxresdefault" : "hqdefault"}.jpg`;

  return (
    <div
      onClick={() => onClick(video.videoId)}
      className="block cursor-pointer group"
    >
      <div
        className={`
          bg-[#e5e7eb] overflow-hidden border-2 border-gray-500 relative
          ${variant === "large"
            ? "w-full sm:w-[90%] md:w-[680px] lg:w-[700px] xl:w-[720px] 2xl:w-[750px]"
            : "w-full sm:w-[90%] md:w-[420px] lg:w-[460px] xl:w-[500px] 2xl:w-[520px]"
          }
          max-w-full mx-auto aspect-video
        `}
      >
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75 md:group-hover:brightness-75 brightness-75 md:brightness-100"
        />
        
        {/* Hover Overlay with Circular Play Icon */}
        <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          {/* Circular Background with Play Icon */}
          <div className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 shadow-lg">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {variant === "large" && (
        <div className={`
          ${variant === "large"
            ? "w-full sm:w-[90%] md:w-[680px] lg:w-[700px] xl:w-[720px] 2xl:w-[750px]"
            : ""
          }
          max-w-full mx-auto mt-4 sm:mt-5 md:mt-6
        `}>
          <P className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2rem] font-semibold text-center">
            {video.title}
          </P>
        </div>
      )}
    </div>
  );
}
