import { Link } from "react-router-dom";
import youtube from "../assets/youtube.png";

function Recordingscard() {
  return (
    <div className="w-full h-full">
      <div className="m-0 sm:m-2 p-4 sm:p-6 w-full lg:max-w-[507] h-full border-gray-300 rounded-lg shadow-inner flex flex-col justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-bold py-2 sm:py-6">
            Recordings
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pb-4 sm:pb-6 items-start sm:items-center">
            <p className="text-sm sm:text-base">
              Access all recorded sessions from your track
            </p>
            <img
              src={youtube}
              className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
              alt="youtube icon"
            />
          </div>
        </div>
        <div>
          <Link
            to="/Recordingscontent"
            className="block text-center bg-orange-500 text-white w-full p-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Watch Recordings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recordingscard;
