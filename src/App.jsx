import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeaturedInventions from "./components/FeaturedInventions";
import ExploreSection from "./components/ExploreSection"
import EvolutionTimeline from "./components/EvolutionTimeline"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedInventions />
      <ExploreSection />
      <EvolutionTimeline />
    </>
  );
}

export default App