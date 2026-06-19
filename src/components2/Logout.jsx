import SignOut from "../assets/SignOut.png";
import SignOutB from "../assets/SignOutB.png";

function Logout({ setShowLogout, isSidebarOpen }) {
  return (
    <div className=" rounded-md flex m-2 sm:m-4 p-1 sm:p-2 max-w-[200px] hover:bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:text-white transition-all duration-200 cursor-pointer">
      <button
        className="text-white flex items-center gap-2 sm:gap-3 p-1 sm:p-2"
        onClick={() => setShowLogout(true)}
      >
        <div className="group flex items-center gap-1 sm:gap-2 text-black hover:text-white transition-all duration-600 ">
          <div className=" block group-hover:hidden w-4 h-4 sm:w-5 sm:h-5">
            <img src={SignOutB} alt="" />
          </div>

          <div className=" hidden group-hover:block w-4 h-4 sm:w-5 sm:h-5">
            <img src={SignOut} alt="" />
          </div>

          {isSidebarOpen && <p className="text-sm sm:text-base">Logout</p>}
        </div>
      </button>
    </div>
  );
}

export default Logout;
