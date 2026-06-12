import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import Frame from "../assets/Frame.png";

function Navbar({ userData }) {
  const navigate = useNavigate();

  const initials = userData?.fullName
    ? userData.fullName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((name) => name[0].toUpperCase())
        .join("")
    : "";

  return (
    <div>
      <nav className="flex justify-between p-4 border-b border-gray-300">
        <Link to="/">
          <img src={logo2} className="w-30 h-10" alt="futureforge logo " />
        </Link>

        <div className="flex items-center ">
          <img src={Frame} className="w-10 h-10" alt="" />

          <div
            className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/Account")}
          >
            {initials}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
