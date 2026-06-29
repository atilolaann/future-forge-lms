import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import hero4 from "../assets/hero4.png";
import Nav from "../components/Nav.jsx";

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img src={hero4}
       alt=""
       className="absolute inset-0 w-full h-full object-cover"
       />
      <div className="absolute inset-0 bg-black/5"></div>
       <Nav />
      <main className="relative z-10 flex md:px-12.5 md:flex-row gap-10 md:gap-2 justify-between px-4 items-center min-h-[70vh] py-10 md:py-0">
        
        <motion.div
        initial={{ x: -90, opacity:0}}
         animate={{ x: 0, opacity:1}}
         transition={{ duration: 0.8, delay: 0.5 }}
         className="w-full md:flex-1 max-w-xl text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
            Learn, <span className="text-orange-400">Track Progess,</span>
            <br className="hidden sm:inline" /> Build Your Future
          </h3>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-200">
            One central space for Forgers to access learning resources,{" "}
            <br className="hidden md:inline" />
            Watch session recordings, track cohort progress.
          </p>
          <motion.button
           initial={{ x: 90, opacity:0}}
          animate={{ x: 0, opacity:1}}
           transition={{ duration: 0.8, delay: 0.7 }}
           whileHover={{scale:1.2}}
           whileTap={{scale:0.95}}
           className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white px-6 py-3 rounded-lg mt-6">
            <Link to="/Login"> Begin Journey</Link>
          </motion.button>
        </motion.div>
       
      </main>
      
    </div>
  );
}

export default Hero;
