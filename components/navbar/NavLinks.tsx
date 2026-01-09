"use client";
import { P, Strong } from "../typography/typography";
import { usePathname, useRouter } from "next/navigation";

export default function NavLinks({ onClickLink }: { onClickLink?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSection = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      if (onClickLink) onClickLink?.();
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      <P
        className="text-white hover:text-yellow-400 transition inline-block cursor-pointer"
        onClick={() => handleSection("about")}
      >
        <Strong>ABOUT</Strong>
      </P>

      <P
        className="text-white hover:text-yellow-400 transition inline-block cursor-pointer"
        onClick={() => handleSection("gallery")}
      >
        <Strong>GALLERY</Strong>
      </P>

      <P
        className="text-white hover:text-yellow-400 transition inline-block cursor-pointer"
        onClick={() => handleSection("contact")}
      >
        <Strong>CONTACT</Strong>
      </P>
    </>
  );
}