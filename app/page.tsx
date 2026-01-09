import Banner from "@/components/banner/Banner";
import VideosSection from "../components/videos-section/VideosSection";
import PublicShowsSection from "../components/public-shows/PublicShowsSection";
import RequestAvailabilitySection from "../components/request-availability/RequestAvailabilitySection";
import About from "@/components/about";
import ProfileSection from "@/components/profile-section";
import HashScrollHandler from "@/components/HashScrollHandler";
import MediaSection from "../components/media-section/MediaSection";

import GallerySection from "../components/gallery-section/GallerySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HashScrollHandler />
      <Banner />
      <section id="about">
        <About />
      </section>
      <ProfileSection />
      <section id="gallery">
      <GallerySection />
      </section>
      <section id="showreel">
        <VideosSection />
      </section>
      <section id="media">
        <MediaSection />
      </section>
      <section id="publicshows">
        <PublicShowsSection />
      </section>
      <section id="contact">
      <RequestAvailabilitySection />
      </section>
    </main>
  );
}
