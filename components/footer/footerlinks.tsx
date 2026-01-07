"use client";
import { H6 } from "../typography/typography";

interface FooterLinksProps {
    scrollToSection: (id?: string) => void;
}

export function DesktopFooterLinks({ scrollToSection }: FooterLinksProps) {
  return (
    <div className="hidden lg:flex flex-wrap justify-evenly items-center gap-6 xl:gap-8 mt-4 w-full">

      <div className="flex items-center gap-10">
        <H6 className="cursor-pointer text-white hover:text-yellow-400 transition-colors">Navigation</H6>
        <div style={{ width: "1px", height: "34px", backgroundColor: "gray" }} />
      </div>


      {["Home", "About", "Gallery", "Showreel", "Public Shows"].map((item) => (
        <H6
          key={item}
          className="cursor-pointer text-white hover:text-yellow-400 transition-colors"
          onClick={() =>
            scrollToSection(
              item === "Home"
                ? undefined
                : item.toLowerCase().replace(" ", "")
            )
          }
        >
          {item}
        </H6>
      ))}
    </div>
  );
}
export function MobileFooterLinks({ scrollToSection }: FooterLinksProps) {
  return (
    <div className="mt-4 w-full lg:hidden">
      <H6 className="text-center mb-3 text-white">Navigation</H6>
      <div className="flex flex-col items-center space-y-2 w-full sm:flex-row sm:justify-between sm:space-y-0 sm:px-2">
        <H6
          onClick={() => scrollToSection()}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Home</H6>
        <H6
          onClick={() => scrollToSection('about')}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">About</H6>
        <H6
          onClick={() => scrollToSection('gallery')}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Gallery</H6>
        <H6
          onClick={() => scrollToSection('showreel')}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Showreel</H6>
        <H6
          onClick={() => scrollToSection('publicshows')}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Public Shows</H6>
      </div>
    </div>
  );
}