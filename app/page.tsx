import Banner from "@/components/banner/Banner";
import VideosSection from "../components/videos-section/VideosSection";
import PublicShowsSection from "../components/public-shows/PublicShowsSection";
import RequestAvailabilitySection from "../components/request-availability/RequestAvailabilitySection";
import About from "@/components/about";
import ProfileSection from "@/components/profile-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <section id="about">
        <About />
      </section>
      <ProfileSection />
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
