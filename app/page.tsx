import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SmoothSnap from "@/components/SmoothSnap";
import SystemSection from "@/components/SystemSection";

export function App() {
  return (
    <>
      <SmoothSnap />
      <HeroSection className="snap-section" />
      <ProblemSolutionSection className="snap-section" id="hero-section" />
      <SystemSection className="snap-section" id="system-section" />
    </>
  );
}

export default App;
