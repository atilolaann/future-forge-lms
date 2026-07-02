import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import herooo from "../assets/herooo.png";
import Nav from "../components/Nav.jsx";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <img src={herooo} alt="" className="w-full h-auto block" />

      <div className="absolute inset-0 bg-black/5"></div>

      <div className="absolute top-0 inset-x-0 z-20">
        <Nav />
      </div>

      <main className="w-full h-full absolute inset-0 z-10 flex md:px-12 md:flex-row gap-6 md:gap-2 justify-between px-4 items-start md:items-center pt-20 sm:pt-24 md:pt-0 pb-6 md:pb-0">
        <motion.div
          initial={{ x: -90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:flex-1 max-w-xl text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h3 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight text-white">
            Learn, <span className="text-orange-400">Track Progess,</span>
            <br className="hidden sm:inline" /> Build Your Future
          </h3>

          <p className="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-base md:text-lg text-gray-200">
            One central space for Forgers to access learning resources,{" "}
            <br className="hidden md:inline" />
            Watch session recordings, track cohort progress.
          </p>

          <motion.button
            initial={{ x: 90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg mt-3 sm:mt-6 text-sm sm:text-base"
          >
            <Link to="/Login"> Begin Journey</Link>
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
}

export default Hero;
