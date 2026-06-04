import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Nav() {
  return (
    <div>
      <header className="flex gap-8 w-full  items-center justify-between mt-4  py-6">
        <img src={logo} alt="futureforge logo" />
        <nav className="flex gap-8">
          <ul className="flex items-center justify-between gap-4 text-gray-800">
            <li className="text-gray-600" >
              {" "}
              <Link to="/" >Home</Link>
            </li>
            <li className="text-gray-600">About us</li>
            <li className="text-gray-600"> How it works</li>
            <li className="text-gray-600"> Contact </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <button className="bg-black text-white px-6 py-2 rounded-lg">
            <Link to="/Login">Log in</Link>
          </button>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg">
            Get started
          </button>
        </div>
      </header>
    </div>
  );
}
export default Nav;
