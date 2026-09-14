import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";
import WorkspaceTogether from "@/components/WorkspaceTogether";
import Discover from "@/components/Discover";
import Wiora from "@/components/Wiora";
import Growth from "@/components/Growth";
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
        {/* large whitespace band in the design between Growth and Collaboration,
            containing a single hairline divider (design y=6965) */}
        <div aria-hidden className="relative h-[1311px] w-full bg-white">
          <div className="absolute left-0 top-[1177px] h-px w-full bg-[#D9D9D9]" />
        </div>
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}