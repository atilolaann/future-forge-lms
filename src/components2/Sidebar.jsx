import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
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
import SignOut from "../assets/SignOut.png";
import Logout from "../components2/Logout.jsx";
import LogoutAlert from "../components2/LogoutAlert.jsx";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showLogout, setShowLogout] = useState(false);


    const navigate = useNavigate();

   const handleLogout = () => {
    setShowLogout(false);
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div
      className={
        ' border-r border-gray-300 flex flex-col justify-between transition-all duration-300 ${isSidebarOpen ? "w-56": "w-16"}'
      }
    >
      <div className="p-8  max-w-[50] flex flex-col gap-12 min-h-screen">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <img src={List} className="w-5 h-5" alt=" " />
        </button>

        <div className="flex flex-col gap-4">
          <Link to="/Dashboard">
            <div className={`flex items-center  rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2 hover:px-8 hover:bg-orange-400 hover:text-white"
                :"justify-center py-3 hover:bg-orange-400"}`}>
              <img
               src={isSidebarOpen?vector1W:Vector1} 
               className="w-5 h-5 hover:text-white" alt="" />
               <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/Recordingscontent">
            <div className={`flex items-center  rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2 hover:px-8 hover:bg-orange-400 hover:text-white"
                :"justify-center p-3 hover:bg-orange-400"}`}>
              <img
               src={isSidebarOpen?vector2W:Vector2} 
               className="w-5 h-5" alt="" />
              {isSidebarOpen && <p> Recordings</p>}
            </div>
          </Link>

          <Link to="/Resourcescontent">
            <div className={`flex items-center  rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2 hover:px-8 hover:bg-orange-400 hover:text-white"
                :"justify-center py-3 hover:bg-orange-400"}`}>
              <img src={isSidebarOpen?vector3W:Vector3} className="w-5 h-5 hover:fill-white" alt="" />
              {isSidebarOpen && <p>Resources</p>}
            </div>
          </Link>

          <Link to="/Account">
            <div className={`flex items-center  rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2 hover:px-8 hover:bg-orange-400 hover:text-white"
                :"justify-center py-3 hover:bg-orange-400"}`}>
              <img src={isSidebarOpen?vector4W:Vector4} className="w-5 h-5" alt="" />

              {isSidebarOpen && <p>Account</p>}
            </div>
          </Link>
        </div>
      </div>

     <div>
         <Logout setShowLogout={setShowLogout} />

         <LogoutAlert
          showLogout={showLogout} 
          setShowLogout={setShowLogout}
           handleLogout={handleLogout} />
     </div>
    </div>
    
  );
}
export default Sidebar;
