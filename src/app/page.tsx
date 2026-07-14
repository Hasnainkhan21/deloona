import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import MembershipShowcase from "@/components/MembershipShowcase/page";

export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <div id="showcase">
        <MembershipShowcase />
      </div>
    </main>
  );
}
