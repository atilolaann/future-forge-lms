import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logow from "../assets/logow.png";
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

  // --- NEW: Smooth Scroll Function ---
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-full items-center justify-between py-6 px-4 sm:px-6 md:px-6 lg:px-8"
      >
        {/* Logo */}
        <div className="w-36 sm:w-44 md:w-52 lg:w-60 h-10">
          <img
            src={logow}
            alt="futureforge logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 lg:gap-8 text-white">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="hover:text-orange-400 transition-colors duration-200"
            >
              <Link to="/">Home</Link>
            </motion.li>

            {/* UPDATED: Changed from Link to button for smooth scrolling */}
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="hover:text-orange-400 transition-colors duration-200"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="cursor-pointer"
              >
                About us
              </button>
            </motion.li>

            {/* UPDATED: Changed from Link to button for smooth scrolling */}
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="hover:text-orange-400 transition-colors duration-200"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer"
              >
                Contact
              </button>
            </motion.li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 lg:gap-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base hover:bg-gray-800 transition-colors duration-200"
          >
            <Link to="/Login">Log in</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base hover:bg-gray-500 transition-colors duration-200"
            onClick={handleGetStarted}
          >
            Get started
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setToggle(true)}
          className="md:hidden flex items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 shadow-lg"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12H16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 17H20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden absolute top-0 left-0 w-full bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] p-6 z-50 shadow-lg rounded-b-3xl"
        >
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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

              {/* UPDATED: Mobile smooth scroll + close menu */}
              <li className="hover:text-orange-100 transition-colors duration-200">
                <button
                  onClick={() => {
                    scrollToSection("about");
                    setToggle(false);
                  }}
                  className="cursor-pointer text-left w-full"
                >
                  About us
                </button>
              </li>

              {/* UPDATED: Mobile smooth scroll + close menu */}
              <li className="hover:text-orange-100 transition-colors duration-200">
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    setToggle(false);
                  }}
                  className="cursor-pointer text-left w-full"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full"
            >
              <Link to="/Login" onClick={() => setToggle(false)}>
                Log in
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="bg-white text-orange-400 font-semibold px-6 py-3 rounded-lg hover:text-white hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] transition-colors duration-200 w-full"
            >
              Get started
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Nav;
