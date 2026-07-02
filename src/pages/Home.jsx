import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import StatsBar from "../components/StatsBar.jsx";
import Main from "../components/Main.jsx";

function Home() {
  const location = useLocation();

  useEffect(() => {
    // This forces the browser to the very top (x: 0, y: 0) instantly on load,
    // ignoring any lingering history or scroll memory.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]); // We only re-run this if the actual page path changes

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
