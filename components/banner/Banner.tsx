"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BANNER_IMAGES } from "@/const/bannerImages"; 
export default function Banner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
<section className="relative pt-24 w-full h-[100vh] overflow-hidden">
      {BANNER_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.desktop}
            alt="Banner"
            fill
            priority={index === 0}
            className="hidden md:block object-cover object-top"
          />
          <Image
            src={image.mobile}
            alt="Banner"
            fill
            priority={index === 0}
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {BANNER_IMAGES.map((_, i) => (
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