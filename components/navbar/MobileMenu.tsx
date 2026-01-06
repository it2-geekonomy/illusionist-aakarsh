"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import NavLinks from "./NavLinks";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ clipPath: "circle(0px at 100% 0%)" }}
          animate={{ clipPath: "circle(300vmax at 100% 0%)" }}
          exit={{ clipPath: "circle(0px at 100% 0%)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ willChange: "clip-path" }}
          className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col items-center justify-center px-6 gap-10"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-yellow-400 text-xl font-bold"
          >
            ✕
          </button>

          <div className="flex flex-col items-center gap-10 text-white">
            <div className="flex flex-col items-center gap-8 text-xl">
              <NavLinks />
            </div>

            <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full">
              TICKETS
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}