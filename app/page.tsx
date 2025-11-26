import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SmoothSnap from "@/components/SmoothSnap";

export function App() {
  return (
    <>
      <SmoothSnap />
      <HeroSection className="snap-section" />
      <ProblemSolutionSection className="snap-section" id="hero-section" />
    </>
  );
}

export default App;
