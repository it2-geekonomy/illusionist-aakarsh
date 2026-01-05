import Banner from "@/components/banner/Banner";
import VideosSection from "../components/videos-section/VideosSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner/>
      <VideosSection />
    </main>
  );
}
