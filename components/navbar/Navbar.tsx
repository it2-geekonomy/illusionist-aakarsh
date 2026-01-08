"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { P, Strong } from "../typography/typography";
export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNavbar(true);
        setScrolledUp(false);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setScrolledUp(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
        setScrolledUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${scrolledUp ? "bg-white/20 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="w-full flex items-center px-4 h-auto md:h-[100px]">
        <div
          onClick={scrollToTop}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/navlogo.png"
            alt="Illusionist Axe"
            width={700}
            height={240}
            priority
            className="h-[45px] sm:h-[70px] lg:h-[100px] max-w-[700px] w-auto object-contain"
          />
        </div>
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10 xl:gap-14">
          <NavLinks />
        </nav>
        <P className="hidden lg:flex items-center ml-auto">
          <button 
            onClick={() => router.push("/events")}
            className="bg-yellow-400 text-black font-bold px-4 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            <Strong>TICKETS</Strong>
          </button>
        </P>
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden ml-auto text-yellow-400 text-2xl sm:text-2xl"
        >
          ☰
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}