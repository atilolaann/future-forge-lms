import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
function Nav() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    localStorage.setItem("token", "your_token_here");
    navigate("/Dashboard");
  };

  return (
    <div>
      <header className="flex gap-8 w-full items-center justify-between py-6 px-4 sm:px-6 md:px-8 lg:px-16">
        <img src={logo} alt="futureforge logo" />
        <nav className="hidden md:flex gap-8">
          <ul className="flex items-center justify-between gap-4 text-gray-800">
            <li className="text-gray-600">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600">About us</li>
            <li className="text-gray-600"> How it works</li>
            <li className="text-gray-600"> Contact </li>
          </ul>
        </nav>

        <div className="hidden md:flex gap-5">
          <button className="bg-black text-white px-6 py-2 rounded-lg">
            <Link to="/Login">Log in</Link>
          </button>

          <button
            className="bg-black text-white px-6 py-2 rounded-lg"
            onClick={handleDashboardClick}
          >
            <p>Dashboard</p>
          </button>

          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg">
            Get started
          </button>
        </div>

        <button onClick={() => setToggle(true)} className="lg:hidden ">
          nav
        </button>
      </header>
      {toggle && (
        <div
          className="absolute top-0 right-0 h-full w-full bg-amber-600 p-4"
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <button
            onClick={() => setToggle(false)}
            className="ml-auto"
            style={{ display: "flex", alignSelf: "end" }}
          >
            close
          </button>

          <div className="flex flex-col gap-3 text-amber-50">
            <nav className="flex gap-8">
              <ul className="flex flex-col items-start justify-between gap-4 text-white">
                <li className="text-white">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white">About us</li>
                <li className="text-white"> How it works</li>
                <li className="text-white"> Contact </li>
              </ul>
            </nav>

            <div className="flex flex-col gap-3 mt-10">
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                <Link to="/Login">Log in</Link>
              </button>

              <button
                className="bg-black text-white px-6 py-2 rounded-lg"
                onClick={handleDashboardClick}
              >
                <p>Dashboard</p>
              </button>

              <button className="bg-orange-400 text-white px-6 py-2 rounded-lg">
                Get started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Nav;
