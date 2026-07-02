import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import StatsBar from "../components/StatsBar.jsx";
import Main from "../components/Main.jsx";

function Home() {
  const location = useLocation();

  // This tells the browser to stop trying to be helpful with scroll memory
  // It runs before the component renders, keeping animation flow clean.
  if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
  }

  // We keep the useEffect to handle navigation changes,
  // but we remove the manual scrollTo call to protect your animations.
  useEffect(() => {
    // Only logic needed here is if you specifically want to handle
    // hash routing or other location-based side effects.
  }, [location.pathname]);

  return (
    <div>
      <div>
        <Hero />
        <StatsBar />
      </div>

      <Main />
    </div>
  );
}

export default Home;
