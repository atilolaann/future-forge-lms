import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import info from "../assets/info.png";
import Group from "../assets/Group.png";
import { useState, useEffect } from "react";

function Recordingscontent() {
  const [recordings, setRecordings] = useState([]);
   const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${"https://lms-be-kc72.onrender.com/api"}/recordings`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setRecordings(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recordings:", err);
        setLoading(false);
      });
  }, [token]);

       //profile fetch
   useEffect(() => {
    fetch(`${"https://lms-be-kc72.onrender.com/api"}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setUserData(data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
      });
  }, [token]);

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar userData={userData}/>
      {/* Side-by-side layout for Sidebar and Content */}
      <div className="flex">
        <Sidebar />
        <div className="p-4 md:p-6 w-full flex-1">
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold">Recordings</h2>
            <p className="py-2 md:py-4 text-sm md:text-base">
              All session recordings are organized in as YouTube playlist
            </p>
          </div>
          <div className="flex gap-2 md:gap-3 border border-orange-400 py-3 items-start md:items-center rounded-lg w-full px-4 md:px-10 lg:px-20 mt-2 md:mt-0">
            <img
              src={info}
              className="w-5 h-5 shrink-0 mt-0.5 md:mt-0"
              alt=""
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
            {loading ? (
              <p>Loading recordings...</p>
            ) : recordings.length === 0 ? (
              <p className="text-gray-500">No recordings available yet</p>
            ) : (
              <div>
                {recordings.map((recording) => (
                  <div
                    key={recording._id}
                    className="border border-gray-300 rounded-lg p-4 w-full shadow-inner hover:shadow-md
                    transition-all duration-300  cursor-pointer mb-4"
                  >
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                      <img
                        src={`https://img.youtube.com/vi/${new URL(recording.url).searchParams.get("v")}/0.jpg`}
                        alt={recording.title}
                        className="w-full md:w-24 h-44 md:h-20 rounded-lg object-cover"
                      />
                      <div className="flex flex-col flex-1 gap-2">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base md:text-lg font-semibold ">
                            {recording.title}
                          </h3>
                          <div>
                               <a
                                href={recording.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 md:w-fit shrink-0 rounded-lg 
                                border border-orange-400 px-2 py-1 md:px-4 md:py-3 text-xs md:text-sm whitespace-nowrap"
                              >
                                <img
                                  src={Group}
                                  alt="play icon"
                                  className="w-4 h-4 md:w-5 md:h-5"
                                />
                                Watch on Youtube
                              </a>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                          {recording.trackid?.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {recording.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recordingscontent;
