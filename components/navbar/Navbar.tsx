// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import NavLinks from "./NavLinks";
// import MobileMenu from "./MobileMenu";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
//       <div className="max-w-[1440px] mx-auto h-[100px] px-12 flex items-center">
//         <div className="flex items-center -ml-8">
//           <Image
//             src="/navlogo.png"
//             alt="Illusionist Axe"
//             width={700}
//             height={240}
//             priority
//             className="h-[52px] sm:h-[64px] lg:h-[80px] max-w-[390px] w-auto object-contain"
//           />
//         </div>

//         <nav className="hidden lg:flex flex-1 justify-center gap-10 xl:gap-8">
//           <NavLinks />
//         </nav>

//         <div className="hidden lg:flex items-center">
//           <button className="font-goldman bg-yellow-400 text-black font-bold text-[14px] px-3 py-1 rounded-full hover:bg-yellow-300 transition">
//             TICKETS
//           </button>
//         </div>

//         <button
//           onClick={() => setOpen(true)}
//           className="lg:hidden ml-auto text-yellow-400 text-3xl"
//         >
//           ☰
//         </button>
//       </div>

//       <MobileMenu open={open} onClose={() => setOpen(false)} />
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent -mt-4 md:mt-0">
      <div className="max-w-[1440px] mx-auto h-[100px] px-12 flex items-center">
        <div className="flex items-center -ml-8">
          {/* LOGO — reduced size ONLY on small screens */}
          <Image
            src="/navlogo.png"
            alt="Illusionist Axe"
            width={700}
            height={240}
            priority
            className="
              h-[30px]        /* mobile */
              sm:h-[52px]
              lg:h-[80px]
              max-w-[390px]
              w-auto
              object-contain
            "
          />
        </div>

        <nav className="hidden lg:flex flex-1 justify-center gap-10 xl:gap-8">
          <NavLinks />
        </nav>

        <div className="hidden lg:flex items-center">
          <button className="font-goldman bg-yellow-400 text-black font-bold text-[14px] px-3 py-1 rounded-full hover:bg-yellow-300 transition">
            TICKETS
          </button>
        </div>

        {/* HAMBURGER — reduced size ONLY on small screens */}
        <button
          onClick={() => setOpen(true)}
          className="
            lg:hidden
            ml-auto
            text-yellow-400
            text-2xl     /* mobile */
            sm:text-3xl
          "
        >
          ☰
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
