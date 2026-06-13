
import SignOut from "../assets/SignOut.png";
import SignOutB from "../assets/SignOutB.png";

function Logout({setShowLogout, isSidebarOpen}) {

 

  return (
    <div className=" rounded-md flex m-4 p-2 max-w-[200] hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer">
      <button
       className="text-white flex items-center gap-3 p-2"
       onClick={() =>setShowLogout(true)}>
          <div className="flex gap-1 text-black  hover:text-white transition-all duration-600 ">
            <div className="w-5 h-5">
            <img src={isSidebarOpen?SignOut:SignOutB}  alt="" />
          </div>
          {isSidebarOpen && <p >Logout</p>}
          </div>
      </button>
    </div>
  );
}

export default Logout;