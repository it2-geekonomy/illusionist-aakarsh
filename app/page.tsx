import Banner from "@/components/banner/Banner";
import VideosSection from "../components/videos-section/VideosSection";
import PublicShowsSection from "../components/public-shows/PublicShowsSection";
import RequestAvailabilitySection from "../components/request-availability/RequestAvailabilitySection";
import About from "@/components/about";
import ProfileSection from "@/components/profile-section";

import GallerySection from "../components/gallery-section/GallerySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <section id="about">
        <About />
      </section>
      <ProfileSection />
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-4">
          Tailwind CSS is Working 🚀
        </h1>
        <p className="text-lg opacity-90">
          Illusionist Aakarsh setup successful
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform">
          Test Button
        </button>
      </div>
      </section>
      <GallerySection />
      <VideosSection />
      <section id="showreel">
        <VideosSection />
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
