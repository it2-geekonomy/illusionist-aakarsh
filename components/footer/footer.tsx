"use client";
import Image from "next/image";
import { Small } from "../typography/typography";
import { DesktopFooterLinks, MobileFooterLinks } from "./footerlinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id?: string) => {
    if (id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer
      className="bg-black text-white py-10" style={{ borderTop: "2px solid gray" }}>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col items-center p-1 mt-2" style={{ border: "2px solid white" }}>
          <Image
            src="/navlogo.png"
            alt="Illusionist Axe Logo"
            width={200}
            height={200}
          />
        </div>

        <Small className="mt-1 text-center">
          World-Class Corporate Illusion Entertainment
        </Small>
        <DesktopFooterLinks scrollToSection={scrollToSection} />
        <MobileFooterLinks scrollToSection={scrollToSection} />
        <div
          className="w-full"
          style={{ height: "1px", backgroundColor: "gray" }}
        />
        <div className="w-full px-6 mt-4 flex">
          <Small className="text-sm text-gray-400 mx-auto sm:mx-0">
            © {currentYear} Illusionist Axe. All rights reserved.
          </Small>
        </div>
        <div className="hidden lg:block h-6"></div>
      </div>
    </footer>
  );
}