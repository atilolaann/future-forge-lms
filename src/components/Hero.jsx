import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import herooo from "../assets/herooo.png";
import Nav from "../components/Nav.jsx";

function Hero() {
  return (
    <div className="relative w-full bg-black flex flex-col">
      {/* Absolute Nav so it overlays the top of the screen/image */}
      <div className="absolute top-0 inset-x-0 z-30">
        <Nav />
      </div>

      <div className="relative w-full flex flex-col md:block">
        
        {/* Image wrapper: The image defines the height of this area and never crops */}
        <div className="w-full relative z-0">
          <img src={herooo} alt="" className="w-full h-auto block" />
          <div className="absolute inset-0 bg-black/40 hidden md:block"></div>
          {/* Seamless bottom gradient for mobile to blend into the text section */}
          <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent md:hidden pointer-events-none"></div>
        </div>

        {/* Text Area: 
            On Mobile -> Blends seamlessly into the bottom of the image gradient.
            On Desktop -> Positioned absolutely over the image. */}
        <main className="w-full md:absolute md:inset-0 z-10 flex flex-col justify-center px-6 sm:px-8 md:px-12 pb-14 md:pb-0 items-center md:items-start text-center md:text-left bg-black md:bg-transparent -mt-12 sm:-mt-16 md:mt-0 relative">
          <motion.div
            initial={{ x: -90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-xl flex flex-col items-center md:items-start z-10"
          >
            <h3 className="text-[28px] sm:text-4xl md:text-5xl font-bold leading-[1.2] text-white drop-shadow-lg tracking-tight">
              Learn, <span className="text-orange-500">Track Progress,</span>
              <br className="hidden sm:inline" /> Build Your Future
            </h3>

            <p className="mt-3 md:mt-6 text-[13px] sm:text-base md:text-lg text-gray-300 md:text-gray-100 drop-shadow-md max-w-[300px] sm:max-w-md md:max-w-none leading-relaxed">
              One central space for Forgers to access learning resources,{" "}
              <br className="hidden md:inline" />
              watch session recordings, and track cohort progress.
            </p>

            <motion.button
              initial={{ x: 90, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.01 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-b from-[#F59E0B] via-[#F5891E] to-[#E3621D] text-white px-8 py-3.5 rounded-full mt-6 sm:mt-8 text-[15px] font-semibold shadow-[0_8px_20px_-6px_rgba(245,158,11,0.6)]"
            >
              <Link to="/Login">Begin Journey</Link>
            </motion.button>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
