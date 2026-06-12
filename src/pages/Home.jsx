import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import StatsBar from "../components/StatsBar.jsx";
import Main from "../components/Main.jsx";

function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-360 mx-auto items-center">
        <Nav />
        <Hero />
      </div>

      <StatsBar />
      <Main />
    </div>
  );
}
export default Home;
