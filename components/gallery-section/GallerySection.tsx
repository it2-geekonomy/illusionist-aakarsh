"use client";
import { useState } from "react";
import { H2, P } from "../typography/typography";
import { galleryImages, GalleryImage } from "./galleryData";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0); // For mobile carousel

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(galleryImages.findIndex((img) => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Carousel navigation for mobile
  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getPrevIndex = (current: number) => (current - 1 + galleryImages.length) % galleryImages.length;
  const getNextIndex = (current: number) => (current + 1) % galleryImages.length;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <section className="bg-black text-white pt-4 pb-6 sm:pt-6 sm:pb-8 md:py-14 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-0 sm:mb-1 md:mb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <H2 className="text-[#f5c518] text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold tracking-widest">
          GALLERY
        </H2>
        <P className="mt-1 sm:mt-1.5 md:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.2rem] tracking-wider text-white">
          ENDORSED BY CELEBS
        </P>
      </div>

      {/* Mobile/Small Screen Carousel */}
      <div className="lg:hidden w-full overflow-hidden">
        <div className="relative flex items-center justify-center h-[180px] sm:h-[300px] md:h-[400px]">
          <div className="relative w-full max-w-full flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 px-4 sm:px-5 md:px-6 lg:px-8">
            {/* Navigation Arrow - Left */}
            <button
              onClick={prevCarousel}
              className="relative z-30 text-white hover:opacity-80 transition-opacity flex items-center justify-center flex-shrink-0"
              aria-label="Previous image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10"
              >
                <line x1="16" y1="8" x2="10" y2="12" />
                <line x1="10" y1="12" x2="16" y2="16" />
              </svg>
            </button>

            {/* Previous Image (Background, Left) */}
            <div className="relative z-10 opacity-60 transition-all duration-300 flex-shrink-0">
              <img
                src={galleryImages[getPrevIndex(carouselIndex)]?.src}
                alt={galleryImages[getPrevIndex(carouselIndex)]?.alt}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 object-contain"
              />
            </div>

            {/* Current Image (Center, Large) */}
            <div
              onClick={() => openModal(galleryImages[carouselIndex], carouselIndex)}
              className="relative z-20 cursor-pointer transition-all duration-300 flex-shrink-0"
            >
              <img
                src={galleryImages[carouselIndex]?.src}
                alt={galleryImages[carouselIndex]?.alt}
                className="w-32 h-32 sm:w-44 sm:h-44 md:w-72 md:h-72 object-contain"
              />
            </div>

            {/* Next Image (Background, Right) */}
            <div className="relative z-10 opacity-60 transition-all duration-300 flex-shrink-0">
              <img
                src={galleryImages[getNextIndex(carouselIndex)]?.src}
                alt={galleryImages[getNextIndex(carouselIndex)]?.alt}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 object-contain"
              />
            </div>

            {/* Navigation Arrow - Right */}
            <button
              onClick={nextCarousel}
              className="relative z-30 text-white hover:opacity-80 transition-opacity flex items-center justify-center flex-shrink-0"
              aria-label="Next image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10"
              >
                <line x1="8" y1="8" x2="14" y2="12" />
                <line x1="14" y1="12" x2="8" y2="16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Flex - 4 columns, 2 rows */}
      <div className="hidden lg:block w-full overflow-hidden px-0 mx-0">
        <div className="flex flex-wrap w-full gap-0 gap-y-14 m-0 p-0 text-[0]">
          {/* Row 1 - Image 1: Nayan Mongia */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[0], 0)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black w-full h-full"
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-contain object-top block m-0 p-0 align-top"
              />
            </div>
          </div>

          {/* Row 1 - Image 2: Sachin Tendulkar */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[1], 1)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black w-full h-full"
            >
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-contain object-top block ml-12 p-0 align-top"
              />
            </div>
          </div>

          {/* Row 1 - Image 3: Anant Ambani */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[2], 2)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black ml-4 w-full h-full"
            >
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-contain object-top block ml-12 mr-10 p-0 align-top"
              />
            </div>
          </div>

          {/* Row 1 - Image 4: Rashmika Mandanna */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[3], 3)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black w-full h-full"
            >
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-contain object-right block m-0 p-0 align-top"
              />
            </div>
          </div>

          {/* Row 2 - Image 5: Puneet Rajkumar */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[4], 4)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black w-full h-full"
            >
              <img
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="w-full h-full object-contain object-top block m-0 p-0 align-top"
              />
            </div>
          </div>

          {/* Row 2 - Image 6: Disha Patani */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[5], 5)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black w-full h-full"
            >
              <img
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                className="w-full h-full object-contain object-top block ml-8 p-0 align-top"
              />
            </div>
          </div>

          {/* Row 2 - Image 7: Anil Kapoor */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[6], 6)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black w-full h-full"
            >
              <img
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                className="w-full h-full object-contain object-top block ml-10 p-0 align-top"
              />
            </div>
          </div>

          {/* Row 2 - Image 8: Gautam Adani */}
          {/* Adjust wrapper div width here: w-1/4, w-[24%], w-[calc(25%-1rem)], etc. */}
          {/* Adjust margins here: mr-4, ml-2, mx-auto, etc. */}
          <div className="w-1/4 shrink-0">
            <div
              onClick={() => openModal(galleryImages[7], 7)}
              className="cursor-pointer group overflow-hidden aspect-square relative bg-black w-full h-full"
            >
              <img
                src={galleryImages[7].src}
                alt={galleryImages[7].alt}
                className="w-full h-full object-contain object-right block m-0 p-0 align-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl sm:text-4xl hover:opacity-80 transition-opacity z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-6 text-white text-4xl sm:text-5xl hover:opacity-80 transition-opacity z-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-6 text-white text-4xl sm:text-5xl hover:opacity-80 transition-opacity z-10"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

