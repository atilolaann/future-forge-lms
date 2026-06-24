import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom";
import logo3 from "../assets/logo3.png";
import { useState, useEffect } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGetStarted = () => {
    window.open(
      "https://futureforge-project-snx5.vercel.app/registration-form",
      "_blank",
    );
  };

  return (
    <div className="relative">
      <motion.header
      initial={{ y: -60, opacity:0}}
      animate={{ y: 0, opacity:1}}
      transition={{ duration: 0.5 }}
      className="flex w-full items-center justify-between py-6 px-4 sm:px-6 md:px-4 lg:px-8">
        {/* Logo */}
        <div className="w-36 sm:w-44 md:w-52 lg:w-60 h-10">
          <img
            src={logo3}
            alt="futureforge logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 lg:gap-8 text-gray-600">
            <motion.li 
            whileHover={{ scale: 1.1}}
            className="hover:text-orange-400 transition-colors duration-200">
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li
             whileHover={{ scale: 1.1}}
              className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
              About us
            </motion.li>
            <motion.li 
             whileHover={{ scale: 1.1}}
            className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
              How it works
            </motion.li>
            <motion.li
             whileHover={{ scale: 1.1}}
            className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
              Contact
            </motion.li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 lg:gap-5">
          <motion.button 
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95 }}
          className="bg-black text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base hover:bg-gray-800 transition-colors duration-200">
            <Link to="/Login">Log in</Link>
          </motion.button>

          <motion.button
           whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95 }}
            className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base
             hover:bg-gray-500 transition-colors duration-200"
            onClick={handleGetStarted}
          >
            Get started
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
         whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95 }}
          onClick={() => setToggle(true)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-200"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {toggle && (
        <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{ y: 0, opacity:1}}
         transition={{ duration: 0.5 }}
        
        className="md:hidden absolute top-0 left-0 w-full bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] p-6 z-50 shadow-lg rounded-b-3xl">
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <motion.button
             whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95 }}
              onClick={() => setToggle(false)}
              className="text-white font-semibold text-sm bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:bg-orange-600 transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              ✕ Close
            </motion.button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="mb-8">
            <ul className="flex flex-col gap-4 text-white text-lg font-medium">
              <li className="hover:text-orange-100 transition-colors duration-200">
                <Link to="/" onClick={() => setToggle(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-orange-100 transition-colors duration-200 cursor-pointer">
                About us
              </li>
              <li className="hover:text-orange-100 transition-colors duration-200 cursor-pointer">
                How it works
              </li>
              <li className="hover:text-orange-100 transition-colors duration-200 cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3">
            <motion.button
             whileHover={{scale: 1.05}}
             whileTap={{scale: 0.95 }}
            
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full">
              <Link to="/Login" onClick={() => setToggle(false)}>
                Log in
              </Link>
            </motion.button>
            <motion.button
             whileHover={{scale: 1.05}}
             whileTap={{scale: 0.95 }}
             onClick={handleGetStarted}
             className="bg-white text-orange-400 font-semibold px-6 py-3 rounded-lg hover:text-white hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] transition-colors duration-200 w-full">
              Get started
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Nav;
