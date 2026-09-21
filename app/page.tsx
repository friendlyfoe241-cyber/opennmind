import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";
import WorkspaceTogether from "@/components/WorkspaceTogether";
import Discover from "@/components/Discover";
import Wiora from "@/components/Wiora";
import Growth from "@/components/Growth";
import LaunchSection from "@/components/LaunchSection";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <WorkspaceTogether />
        <Discover />
        <Wiora />
        <Growth />
        {/* web launch section: headline + app banner above the dashboard image */}
        <LaunchSection />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}