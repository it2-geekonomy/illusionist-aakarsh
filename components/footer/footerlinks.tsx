"use client";
import { H6 } from "../typography/typography";
import { useRouter, usePathname } from "next/navigation";

export function DesktopFooterLinks() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSection = (id?: string) => {
    if (pathname === "/") {
      if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(id ? `/#${id}` : "/");
    }
  };

  return (
    <div className="hidden lg:flex flex-wrap justify-evenly items-center gap-6 xl:gap-8 mt-4 w-full">
      <div className="flex items-center gap-10">
        <H6 className="cursor-pointer text-white">Navigation</H6>
        <div style={{ width: "1px", height: "34px", backgroundColor: "gray" }} />
      </div>

      {["Home", "About", "Gallery", "Showreel", "Public Shows"].map((item) => (
        <H6
          key={item}
          className="cursor-pointer text-white hover:text-yellow-400 transition-colors"
          onClick={() =>
            handleSection(
              item === "Home" ? undefined : item.toLowerCase().replace(" ", "")
            )
          }
        >
          {item}
        </H6>
      ))}
    </div>
  );
}
export function MobileFooterLinks() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSection = (id?: string) => {
    if (pathname === "/") {
      if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(id ? `/#${id}` : "/");
    }
  };
  return (
    <div className="mt-4 w-full lg:hidden">
      <H6 className="text-center mb-3 text-white">
        <span className="inline-block border-b-2 border-white pb-0">Navigation</span>
      </H6>
      <div className="flex flex-col items-center space-y-2 w-full sm:flex-row sm:justify-between sm:space-y-0 sm:px-2">
        <H6
          onClick={() => handleSection()}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Home</H6>
        <H6
          onClick={() => handleSection("about")}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">About</H6>
        <H6
          onClick={() => handleSection("gallery")}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Gallery</H6>
        <H6
          onClick={() => handleSection("showreel")}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Showreel</H6>
        <H6
          onClick={() => handleSection("publicshows")}
          className="cursor-pointer hover:text-yellow-400 text-center w-full sm:w-auto">Public Shows</H6>
      </div>
    </div>
  );
}