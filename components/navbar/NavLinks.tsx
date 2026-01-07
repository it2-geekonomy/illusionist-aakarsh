"use client";
import { P, Strong } from "../typography/typography";

export default function NavLinks({ onClickLink }: { onClickLink?: () => void }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (onClickLink) onClickLink(); 
  };

  return (
    <>
      <P
        className="text-white hover:text-yellow-400 transition inline-block cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <Strong>ABOUT</Strong>
      </P>

      <P
        className="text-white hover:text-yellow-400 transition inline-block cursor-pointer"
        onClick={() => scrollToSection("gallery")}
      >
        <Strong>GALLERY</Strong>
      </P>

      <P
        className="text-white hover:text-yellow-400 transition inline-block cursor-pointer"
        onClick={() => scrollToSection("contact")}
      >
        <Strong>CONTACT</Strong>
      </P>
    </>
  );
}