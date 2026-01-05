import Link from "next/link";
export default function NavLinks() {
  return (
    <>
      <Link
        href="#about"
        className="font-goldman text-white font-bold text-[14px] hover:text-yellow-400 transition"
      >
        ABOUT
      </Link>

      <Link
        href="#gallery"
        className="font-goldman text-white font-bold text-[14px] hover:text-yellow-400 transition"
      >
        GALLERY
      </Link>

      <Link
        href="#contact"
        className="font-goldman text-white font-bold text-[14px] hover:text-yellow-400 transition"
      >
        CONTACT
      </Link>
    </>
  );
}