"use client";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
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
          className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col items-center justify-center gap-10"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-yellow-400 text-xl font-bold"
          >
            ✕
          </button>
          <div className="flex flex-col gap-8 text-xl text-white">
            <NavLinks />
          </div>
          <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full">
            TICKETS
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}