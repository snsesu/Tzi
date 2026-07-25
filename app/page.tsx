import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExploreWorlds from "@/components/ExploreWorlds";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ExploreWorlds />
      <PromoSection />
      <Footer />
    </main>
  );
}
