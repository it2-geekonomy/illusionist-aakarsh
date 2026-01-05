"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
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

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${scrolledUp ? "bg-white/20 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="w-full flex items-center px-2 h-auto md:h-[100px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/navlogo.png"
            alt="Illusionist Axe"
            width={700}
            height={240}
            priority
            className="h-[45px] sm:h-[70px] lg:h-[100px] max-w-[700px] w-auto object-contain"
          />
        </Link>
        <nav className="hidden lg:flex flex-1 justify-center gap-10 xl:gap-8">
          <NavLinks />
        </nav>
        <div className="hidden lg:flex items-center ml-auto">
          <button className="font-goldman bg-yellow-400 text-black font-bold text-[20px] sm:text-[18px] md:text-[19px] lg:text-[14px] px-6 py-3 rounded-full hover:bg-yellow-300 transition">
            TICKETS
          </button>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden ml-auto text-yellow-400 text-2xl sm:text-3xl"
        >
          ☰
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}