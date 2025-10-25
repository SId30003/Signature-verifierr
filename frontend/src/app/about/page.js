import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import HowItWorks from "@/components/HowItWorks";
import Methodology from "@/components/Methodology";
import FutureEnhancements from "@/components/FutureEnhancements";

export default function About() {
  return (
    <div className="min-h-screen text-[#EDEDED]">
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EDEDED] tracking-tight">
              About The Project
            </h1>
            <p className="text-lg text-[#EDEDED]/70 max-w-3xl mx-auto leading-relaxed">
              Understanding the technology and methodology behind our signature
              authentication system
            </p>
          </div>
          <ProjectOverview />
          <HowItWorks />
          <Methodology />
          <FutureEnhancements />
        </div>
      </div>
      <Footer />
    </div>
  );
}
