import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import List from "../assets/List.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import vector1W from "../assets/vector1W.png";
import vector2W from "../assets/vector2W.png";
import vector3W from "../assets/vector3W.png";
import vector4W from "../assets/vector4W.png";
import Logout from "../components2/Logout.jsx";
import LogoutAlert from "../components2/LogoutAlert.jsx";
import X from "../assets/X.png";
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setShowLogout(false);
    localStorage.removeItem("token");
    navigate("/login", {replace: true});
  };
  return (
    <div
      className={`border-r border-gray-300 flex flex-col justify-between transition-all duration-300 ${
        isSidebarOpen ? "w-56" : "w-16"
      }`}
    >
      <div
        className={`flex flex-col gap-12 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "p-8 items-start" : "p-2 items-center"
        }`}
      >
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <div className="w-10 h-10 bg-white p-2 rounded-3xl shadow-inner hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:shadow-md transition-all duration-200 cursor-pointer">
            <img src={isSidebarOpen ? X : List} alt="" />
          </div>
        </button>
        <div className="flex flex-col gap-4 w-full">
          <NavLink to="/dashboard">
          {({ isActive}) =>(
            <div
              className={`group flex items-center rounded-lg transition-all duration-200 cursor-pointer ${
                isSidebarOpen
                  ? "gap-3 px-3 py-2 "
                  : "justify-center py-3 "
              }
              ${
                isActive
                  ? "bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:text-white"
                  :"hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430]"
              }`}
            >
              <div className="w-5 h-5">
                <img src={isActive? vector1W :Vector1} alt="" />
              </div>
              
              {isSidebarOpen && ( <p className={isActive? "text-white":"group-hover:text-white"}>Dashboard</p>
            )}
            </div>
            )}
          </NavLink>
          <NavLink to="/resourcescontent">
          {({ isActive}) =>(
            <div
              className={`group flex items-center rounded-lg transition-all duration-200 cursor-pointer ${
                isSidebarOpen
                  ? "gap-3 px-3 py-2 "
                  : "justify-center py-3 "
              }
              ${
                isActive
                  ? "bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:text-white"
                  :"hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430]"
              }`}
            >
               <div className="w-5 h-5">
                <img src={isActive? vector2W :Vector2} alt="" />
              </div>
              
              {isSidebarOpen && ( <p className={isActive? "text-white":"group-hover:text-white"}>Resources</p>
            )}
            </div>
            )}
            
          </NavLink>
          <NavLink to="/recordingscontent">
           {({ isActive}) =>(
            <div
              className={`group flex items-center rounded-lg transition-all duration-200 cursor-pointer ${
                isSidebarOpen
                  ? "gap-3 px-3 py-2 "
                  : "justify-center py-3 "
              }
              ${
                isActive
                  ? "bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:text-white"
                  :"hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430]"
              }`}
            >
               <div className="w-5 h-5">
                <img src={isActive? vector3W :Vector3} alt="" />
              </div>
              
              {isSidebarOpen && ( <p className={isActive? "text-white":"group-hover:text-white"}>Recordings</p>
            )}
            </div>
            )}
          </NavLink>
          <NavLink to="/account">
            {({ isActive}) =>(
            <div
              className={`group flex items-center rounded-lg transition-all duration-200 cursor-pointer ${
                isSidebarOpen
                  ? "gap-3 px-3 py-2 "
                  : "justify-center py-3 "
              }
              ${
                isActive
                  ? "bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:text-white"
                  :"hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430]"
              }`}
            >
              <div className="w-5 h-5">
                <img src={isActive? vector4W :Vector4} alt="" />
              </div>
              
              {isSidebarOpen && ( <p className={isActive? "text-white":"group-hover:text-white"}>Account</p>
            )}
            </div>
            )}
          </NavLink>
        </div>
      </div>
      <div>
        <Logout
          setShowLogout={setShowLogout}
          isSidebarOpen={isSidebarOpen}
        />
        <LogoutAlert
          showLogout={showLogout}
          setShowLogout={setShowLogout}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
}
export default Sidebar;
