import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import StatsBar from "../components/StatsBar.jsx";
import Main from "../components/Main.jsx";

function Home() {
  return (
    <div>
      <div >
        <Hero />
        <StatsBar />
      </div>

      
      <Main />
    </div>
  );
}
export default Home;
