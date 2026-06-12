
import SignOut from "../assets/SignOut.png";

function Logout({setShowLogout}) {

 

  return (
    <div className="bg-orange-400 rounded-md flex m-4 p-2 max-w-[200] hover:bg-gray-700  cursor-pointer">
      <button
       className="text-white flex items-center gap-3 p-2"
       onClick={() =>setShowLogout(true)}>
          <img src={SignOut} className="w-5 h-5" alt="" />
           <p>Logout</p>
      </button>
    </div>
  );
}

export default Logout;