"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";

export default function MobileMenu({
  open,
  onClose,
  onLinkClick,
}: {
  open: boolean;
  onClose: () => void;
  onLinkClick?: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [exitDuration, setExitDuration] = useState(0.6);
  const [pendingScroll, setPendingScroll] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => {
    setExitDuration(0.1);
    setPendingScroll(true);
    onClose();
  };

  const handleCloseButton = () => {
    setExitDuration(0.6);
    onClose();
  };

  const handleExitComplete = () => {
    document.body.style.overflow = "";

    if (pendingScroll && onLinkClick) {
      onLinkClick();
    }

    setPendingScroll(false);
    setExitDuration(0.4);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {open && (
        <motion.div
          ref={menuRef}
          key="mobile-menu"
          initial={{ clipPath: "circle(0px at 100% 0%)" }}
          animate={{ clipPath: "circle(300vmax at 100% 0%)", transition: { duration: 1, ease: "easeInOut" } }}
          exit={{ clipPath: "circle(0px at 100% 0%)", transition: { duration: exitDuration, ease: "easeInOut" } }}
          style={{ willChange: "clip-path" }}
          className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col items-center justify-center px-6 gap-10"
        >
          <button
            onClick={handleCloseButton}
            className="absolute top-6 right-6 text-yellow-400 text-xl font-bold"
          >
            ✕
          </button>
          <div
            className="flex flex-col items-center gap-10 text-white"
            onClick={handleLinkClick}
          >
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