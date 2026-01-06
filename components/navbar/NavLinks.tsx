import Link from "next/link";
import { P, Strong } from "../typography/typography";

export default function NavLinks({ onClickLink }: { onClickLink?: () => void }) {
  return (
    <>
      <Link href="#about" onClick={onClickLink}>
        <P className="text-white hover:text-yellow-400 transition inline-block">
          <Strong>ABOUT</Strong>
        </P>
      </Link>

      <Link href="#gallery" onClick={onClickLink}>
        <P className="text-white hover:text-yellow-400 transition inline-block">
          <Strong>GALLERY</Strong>
        </P>
      </Link>

      <Link href="#contact" onClick={onClickLink}>
        <P className="text-white hover:text-yellow-400 transition inline-block">
          <Strong>CONTACT</Strong>
        </P>
      </Link>
    </>
  );
}
