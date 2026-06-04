import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Nav() {
  return (
    <div>
      <header className="flex gap-8 w-full  items-center justify-between mt-4  py-6">
        <img src={logo} alt="futureforge logo" />
        <nav className="flex gap-8">
          <ul className="flex items-center justify-between gap-4">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>About us</li>
            <li> How it works</li>
            <li> Contact </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <button className="bg-black text-white px-6 py-2 rounded-lg">
            <Link to="/Login">Log in</Link>
          </button>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg">
            Get started
          </button>
        </div>
      </header>
    </div>
  );
}
export default Nav;
