import { Link, useNavigate } from "react-router-dom";
import logo3 from "../assets/logo3.png";
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
      {/* Added pl-14 on mobile screens to create an intentional gap for the hamburger menu */}
      <nav className="flex justify-between items-center p-3 sm:p-4 pl-14 sm:pl-4 border-b border-gray-300">
        <Link to="/">
          <div className="w-32 h-8 sm:w-40 sm:h-10 md:w-48 flex items-center">
            <img
              src={logo3}
              className="object-contain w-full h-full"
              alt="futureforge logo"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <img src={Frame} className="w-8 h-8 sm:w-10 sm:h-10" alt="" />

          <div
            className="w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm rounded-full bg-orange-400 text-white flex items-center justify-center cursor-pointer"
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
