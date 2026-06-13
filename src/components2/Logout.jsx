
import SignOut from "../assets/SignOut.png";
import SignOutB from "../assets/SignOutB.png";

function Logout({setShowLogout, isSidebarOpen}) {

 

  return (
    <div className=" rounded-md flex m-4 p-2 max-w-[200] hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer">
      <button
       className="text-white flex items-center gap-3 p-2"
       onClick={() =>setShowLogout(true)}>
          <div className="group flex gap-1 text-black  hover:text-white transition-all duration-600 ">
            <div className=" block group-hover:hidden w-5 h-5">
            <img src={SignOutB}  alt="" />
          </div>
          <div className=" hidden group-hover:block w-5 h-5">
            <img src={SignOut}  alt="" />
          </div>
          {isSidebarOpen && <p >Logout</p>}
          </div>
      </button>
    </div>
  );
}

export default Logout;