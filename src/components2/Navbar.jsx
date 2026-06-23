import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo3 from "../assets/logo3.png";
import Frame from "../assets/Frame.png";

function Navbar({ userData }) {

  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    "New resources uploaded",
    " Week 5 recording is available"
  ];

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
          <div className="relative">
            <img
             onClick = {() => setShowNotifications(!showNotifications)}
            src={Frame} className="w-8 h-8 sm:w-10 sm:h-10" alt="" />
           

            <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notifications.length}
          </span>

          {showNotifications &&(
            <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
      <div className="p-3 border-b">
        <h3 className="font-semibold">Notifications</h3>
      </div>
      <div className="max-h-60 overflow-y-auto">
        {notifications.map((note, index) => (
          <div
            key={index}
            className="p-3 border-b hover:bg-gray-50"
          >
            {note}
          </div>
        ))}
      </div>
    </div>
          )}
          </div>
          

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
