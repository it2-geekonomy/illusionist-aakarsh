"use client";
import { H2, P } from "../typography/typography";
import { clienteleLogos } from "./clienteleData";

export default function ClienteleSection() {

  return (
    <section className="bg-black text-white pt-4 pb-6 sm:pt-6 sm:pb-8 md:py-10 lg:py-12 xl:py-14 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <H2 className="text-[#f5c518] text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold tracking-widest">
          CLIENTELE
        </H2>
        <P className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.2rem] tracking-wider text-white">
          ELITE EXPERIENCES, TRUSTED WORLDWIDE
        </P>
      </div>

      {/* Infinite Scroll Container */}
      <div className="scroll-container w-full overflow-hidden py-4">
        <div className="inline-flex flex-nowrap w-max">
          {/* First Row */}
          <ul className="inline-flex items-center flex-nowrap [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 lg:[&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll">
            {clienteleLogos.map((logo, i) => (
              <li key={`logo-${i}`} className="relative w-36 h-28 flex-shrink-0 flex items-center justify-center">
                <div className="relative w-32 h-20">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
          
          {/* Duplicate for seamless loop */}
          <ul
            className="inline-flex items-center flex-nowrap [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 lg:[&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {clienteleLogos.map((logo, i) => (
              <li key={`logo-dup-${i}`} className="relative w-36 h-28 flex-shrink-0 flex items-center justify-center">
                <div className="relative w-32 h-20">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

