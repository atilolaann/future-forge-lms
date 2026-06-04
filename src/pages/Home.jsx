import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import landingpage2 from '../assets/landingpage2.png'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import StatsBar from '../components/StatsBar.jsx'
import Main from '../components/Main.jsx'


function Home (){
    return(
        <div className="bg-orange-200">
        <div className="max-w-7xl  mx-12 flex flex-col ">
            <Nav />
           <Hero />
            </div>
            <StatsBar />
             <Main />
            

        
        </div>

    )

}
export default Home;