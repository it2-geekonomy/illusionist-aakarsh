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
    <section className="relative w-full overflow-hidden pt-0">
      <div className="relative w-full aspect-[16/9] lg:hidden">
        {BANNER_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              active === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.mobile}
              alt="Banner"
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="hidden lg:block relative w-full">
        <div className="relative w-full">
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
                priority={index === 0}
                width={1920}
                height={900}
                className="w-full h-auto object-contain bg-black"
              />
            </div>
          ))}
          <Image
            src={BANNER_IMAGES[0].desktop}
            alt="size-holder"
            width={1920}
            height={900}
            className="invisible w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
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