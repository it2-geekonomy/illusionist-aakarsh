import Banner from "@/components/banner/Banner";
import VideosSection from "../components/videos-section/VideosSection";
import PublicShowsSection from "../components/public-shows/PublicShowsSection";
import RequestAvailabilitySection from "../components/request-availability/RequestAvailabilitySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner/>
      <VideosSection />
      <PublicShowsSection />
      <RequestAvailabilitySection />
    </main>
  );
}
