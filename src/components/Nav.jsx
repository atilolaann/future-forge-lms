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

  const handleDashboardClick = () => {
    localStorage.setItem("token", "your_token_here");
    navigate("/Dashboard");
  };

  return (
    <div className="relative">
      <header className="flex w-full items-center justify-between py-6 px-4 sm:px-6 md:px-8 lg:px-16">
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
            <li className="hover:text-orange-400 transition-colors duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
              About us
            </li>
            <li className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
              How it works
            </li>
            <li className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 lg:gap-5">
          <button className="bg-black text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base hover:bg-gray-800 transition-colors duration-200">
            <Link to="/Login">Log in</Link>
          </button>
        
          <button className="bg-orange-400 text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base hover:bg-orange-500 transition-colors duration-200">
            Get started
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setToggle(true)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-200"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {toggle && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-orange-400 p-6 z-50 shadow-lg rounded-b-3xl">
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setToggle(false)}
              className="text-white font-semibold text-sm bg-orange-500 hover:bg-orange-600 transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              ✕ Close
            </button>
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
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full">
              <Link to="/Login" onClick={() => setToggle(false)}>
                Log in
              </Link>
            </button>
            <button className="bg-white text-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 w-full">
              Get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
