import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import info from "../assets/info.png";

function Recordingscontent() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="p-4 md:p-6 w-full flex-1">
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold">Recordings</h2>
            <p className="py-2 md:py-4 text-sm md:text-base">
              All session recordings are organized in a YouTube playlist
            </p>
          </div>

          <div className="flex gap-2 md:gap-3 border border-orange-400 py-3 items-start md:items-center rounded-lg w-full px-4 md:px-10 lg:px-20 mt-2 md:mt-0">
            <img
              src={info}
              className="w-5 h-5 shrink-0 mt-0.5 md:mt-0"
              alt="info icon"
            />
            <p className="text-sm md:text-base">
              The playlist will open in a new tab so you can come back here
              anytime
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold mt-6 md:mt-8 mb-2 md:mb-4">
              All Recorded Sessions
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recordingscontent;
