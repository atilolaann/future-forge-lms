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
import X from "../assets/X.png";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showLogout, setShowLogout] = useState(false);


    const navigate = useNavigate();

   const handleLogout = () => {
    setShowLogout(false);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div
      className={
        ' border-r border-gray-300 flex flex-col justify-between transition-all duration-300 ${isSidebarOpen ? "w-56": "w-16"}'
      }
    >
      <div className="p-8  max-w-[50] flex flex-col items-start  gap-12 min-h-screen">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
         <div  className="w-10 h-10 bg-white p-2 rounded-3xl shadow-inner">
           <img
           src={isSidebarOpen?X:List} 
           alt=" " />
         </div>
        </button>

        <div className="flex flex-col gap-4">
          
          <Link to="/Dashboard">
            <div className={`group flex items-start justify-center rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2  hover:bg-orange-400 hover:text-white"
                :"justify-center py-3 hover:bg-orange-400"}`}>

              <div className= "flex items-center gap-2">
                <div  className="block group-hover:hidden w-5 h-5">
                <img
               src={Vector1} 
               alt="" />
                </div>
                <div  className="hidden group-hover:block w-5 h-5">
                <img
               src={vector1W} 
               alt="" />
                </div>
               {isSidebarOpen && <p>Dashboard</p>}
             
              </div>
            </div>
          </Link>
          <Link to="/Recordingscontent">
            <div className={`group flex items-start justify-center rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2  hover:bg-orange-400 hover:text-white"
                :"justify-center p-3 hover:bg-orange-400"}`}>
             <div className= "flex items-center gap-2">
               <div  className=" block group-hover:hidden  w-5 h-5">
                <img
               src={Vector3} 
                alt="" />
                  </div>
               <div  className=" hidden group-hover:block w-5 h-5">
                <img
               src={vector2W} 
                alt="" />
                  </div>
              {isSidebarOpen && <p> Recordings</p>}
             </div>
            
            </div>
          </Link>

          <Link to="/Resourcescontent">
            <div className={`group flex items-start justify-center rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2  hover:bg-orange-400 hover:text-white"
                :"justify-center py-3 hover:bg-orange-400"}`}>
              <div className= "flex items-center gap-2">
                <div className="block group-hover:hidden w-5 h-5">
                <img src={Vector2}  alt="" />
                 </div>
                <div className="hidden group-hover:block w-5 h-5">
                <img src={vector3W}  alt="" />
                 </div>
                {isSidebarOpen && <p>Resources</p>}
              </div>
             
            </div>
          </Link>

          <Link to="/Account">
            <div className={`group flex items-start justify-center rounded-lg transition-all duration-200 cursor-pointer
                ${isSidebarOpen?
                 "gap-3 px-3 py-2  hover:bg-orange-400 hover:text-white"
                :"justify-center py-3 hover:bg-orange-400"}`}>
              <div className= "flex items-center gap-2">
                <div className="block group-hover:hidden w-5 h-5">
                  <img src={Vector4} alt="" />
                </div>
                <div className="hidden group-hover:block w-5 h-5">
                  <img src={vector4W} alt="" />
                </div>
                {isSidebarOpen && <p>Account</p>}
              </div>
            </div>
          </Link>
        </div>
      </div>

     <div>
         <Logout setShowLogout={setShowLogout}
          isSidebarOpen={isSidebarOpen} />

         <LogoutAlert
          showLogout={showLogout} 
          setShowLogout={setShowLogout}
           handleLogout={handleLogout} />
     </div>
    </div>
    
  );
}
export default Sidebar;
