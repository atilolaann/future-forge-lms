import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import landingpage2 from '../assets/landingpage2.png'

function Home (){
    return(
        <div>
        <div className="max-w-7xl mx-auto px-8 flex flex-col">
            <header className="flex gap-8 w-full  items-center justify-between mt-4  py-6">
                
                <img src={logo} alt="futurefoge logo" />
                <nav className="flex gap-8">
                    <ul className="flex items-center justify-between gap-4">
                     <li> <Link to ="/">Home</Link></li>
                     <li>About us</li>
                     <li> How it works</li>
                     <li> Contact </li>
                    </ul>
                </nav>
                <div className="flex gap-5">
                    <button className="bg-black text-white px-6 py-2 rounded-lg"><Link to ="/Login">Log in</Link></button>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg">Get started</button>
                </div>  
            </header>
            <main className=" flex gap-2 justify-between items-center min-h-[70vh] ">
                <div className="flex-1 max-w-xl">
                    <h3 className="text-5xl font-semibold leading-tight">
                        Learn, Track Progess,<br/> Build Your Future
                    </h3>
                    <p className="mt-6 text-lg text-gray-600">One central space for Forgers to access learning resources, <br />
                    Watch session recordings, track cohort progress.</p>
                    <button className="bg-orange-400 text-white px-6 py-3 rounded-lg mt-6">Begin Journey</button>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src={landingpage2} className="max-w-[550px] w-full h-auto" alt="" />
                </div>
            </main>
            </div>
            <footer className="flex ">
                <ul className="bg-black flex gap-12 w-full  items-center text-white justify-between px-12 p-4">
                    <li className="flex flex-col ">100+ <span>Trained</span></li>
                    <li  className="flex flex-col ">100+ <span>Internship</span></li>
                    <li  className="flex flex-col ">100+ <span>On Job</span></li>
                    <li  className="flex flex-col ">100+ <span>Mentorship</span></li>
                </ul>
            </footer>
            

        
        </div>

    )

}
export default Home;