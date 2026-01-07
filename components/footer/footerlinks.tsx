"use client";
import { H6 } from "../typography/typography";

interface FooterLinksProps {
    scrollToSection: (id?: string) => void;
}

export function DesktopFooterLinks({ scrollToSection }: FooterLinksProps) {
    return (
        <div className="hidden lg:flex flex-wrap items-center lg:gap-6 xl:gap-8 mt-4 w-full">
            <div className="flex items-center flex-1 justify-center gap-10">
                <H6 className="cursor-pointer hover:underline text-white hover:text-yellow-400 transition-colors">
                    Navigation
                </H6>
                <div style={{ width: "1px", height: "34px", backgroundColor: "gray" }} />
            </div>

            <H6
                className="cursor-pointer hover:underline text-center flex-1 text-white hover:text-yellow-400 transition-colors"
                onClick={() => scrollToSection()}
            >
                Home
            </H6>
            <H6
                className="cursor-pointer hover:underline text-center flex-1 text-white hover:text-yellow-400 transition-colors"
                onClick={() => scrollToSection("about")}
            >
                About
            </H6>
            <H6
                className="cursor-pointer hover:underline text-center flex-1 text-white hover:text-yellow-400 transition-colors"
                onClick={() => scrollToSection("gallery")}
            >
                Gallery
            </H6>
            <H6
                className="cursor-pointer hover:underline text-center flex-1 text-white hover:text-yellow-400 transition-colors"
                onClick={() => scrollToSection("showreel")}
            >
                Showreel
            </H6>
            <H6
                className="cursor-pointer hover:underline text-center flex-1 text-white hover:text-yellow-400 transition-colors"
                onClick={() => scrollToSection("publicshows")}
            >
                Public Shows
            </H6>
        </div>
    );
}
export function MobileFooterLinks({ scrollToSection }: FooterLinksProps) {
    return (
        <div className="mt-4 w-full lg:hidden">
            <H6 className="text-center mb-3 text-white">Navigation</H6>

            <div className="flex flex-row w-full justify-between items-center px-2 flex flex-col items-center space-y-2 w-full px-2
                      sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
                <H6 onClick={() => scrollToSection()} className="cursor-pointer hover:text-yellow-400 flex-1 text-center">Home</H6>
                <H6 onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-yellow-400 flex-1 text-center">About</H6>
                <H6 onClick={() => scrollToSection('gallery')} className="cursor-pointer hover:text-yellow-400 flex-1 text-center">Gallery</H6>
                <H6 onClick={() => scrollToSection('showreel')} className="cursor-pointer hover:text-yellow-400 flex-1 text-center">Showreel</H6>
                <H6 onClick={() => scrollToSection('publicshows')} className="cursor-pointer hover:text-yellow-400 flex-1 text-center">Public Shows</H6>
            </div>
        </div>
    );
}