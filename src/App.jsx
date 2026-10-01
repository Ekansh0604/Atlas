import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeaturedInventions from "./components/FeaturedInventions";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedInventions />
      <h1 className="text-6xl font-bold text-orange-500">
        ATLAS
      </h1>
    </>
  );
}

export default App