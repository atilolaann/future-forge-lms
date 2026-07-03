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
      <nav className="flex justify-between items-center p-3 sm:p-4 pl-14 sm:pl-4 border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
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
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-1.5 rounded-full hover:bg-orange-50 transition-colors duration-200"
            >
              <img
                src={Frame}
                className="w-9 h-9 sm:w-9 sm:h-9"
                alt="notifications"
              />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white font-bold text-[10px] rounded-full w-6 h-6 flex items-center justify-center ring-2 ring-white">
                {notifications.length}
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-2xl border border-gray-100 z-50 overflow-hidden">
                <div className="p-3.5 border-b border-orange-100 bg-orange-50/60 flex justify-between items-center">
                  <h3 className="font-semibold text-sm text-gray-800">Notifications</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-500 border border-orange-200">
                    {notifications.length} new
                  </span>
                </div>
                <div className="max-h-60 overflow-y-auto divide-y divide-gray-50">
                  {notifications.map((note, index) => (
                    <div
                      key={index}
                      className="p-3.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-gray-900 transition-colors duration-150 cursor-pointer"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            className="w-8 h-8 sm:w-9 sm:h-9 text-xs sm:text-sm font-bold rounded-full bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-[0_0_14px_rgba(245,137,30,0.45)] ring-2 ring-white"
            onClick={() => navigate("/Account")}
          >
            {initials}
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
