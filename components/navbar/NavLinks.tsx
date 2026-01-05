import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link
        href="#about"
        className="font-goldman text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] xl:text-[22px] hover:text-yellow-400 transition"
      >
        ABOUT
      </Link>

      <Link
        href="#gallery"
        className="font-goldman text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] xl:text-[22px] hover:text-yellow-400 transition"
      >
        GALLERY
      </Link>

      <Link
        href="#contact"
        className="font-goldman text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] xl:text-[22px] hover:text-yellow-400 transition"
      >
        CONTACT
      </Link>
    </>
  );
}
