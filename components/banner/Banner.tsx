"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const desktopImages = [
  "/bannerImages/banner1.webp",
  "/bannerImages/banner2.webp",
  "/bannerImages/banner3.webp",
];

const mobileImages = [
  "/bannerImages/BI 1.webp",
  "/bannerImages/BI 2.webp",
  "/bannerImages/BI 3.webp",
];

export default function Banner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % desktopImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative -mt-[100px] w-full h-[100vh] overflow-hidden">
      {desktopImages.map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* DESKTOP IMAGE (>=768px) */}
          <Image
            src={desktopImages[index]}
            alt="Banner"
            fill
            priority={index === 0}
            className="hidden md:block object-cover object-top"
          />

          {/* MOBILE IMAGE (<768px) */}
          <Image
            src={mobileImages[index]}
            alt="Banner"
            fill
            priority={index === 0}
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {desktopImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              active === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}