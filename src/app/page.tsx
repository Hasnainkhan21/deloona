import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import MembershipShowcase from "@/components/MembershipShowcase/page";
import AppDownloadSection from "@/components/Appdownload/page";
import InstaReels from "@/components/InstaReels/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden" style={{ margin: 0, padding: "0 5%" }}>
      {/* Navbar parent full width */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Sections use full-bleed so their backgrounds stretch 100% full screen width, while inner content aligns to root 5% margin */}
      <div className="full-bleed">
        <Hero />
      </div>
      <div id="showcase" className="full-bleed bg-ink-50 w-full">
        <MembershipShowcase />
      </div>
      <InstaReels />
      <div id="download" className="w-full bg-ink-50">
        <AppDownloadSection />
      </div>
      <Footer />

    </main>
  );
}
