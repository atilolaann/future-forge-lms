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
    <div className="w-full overflow-x-hidden bg-gray-50 min-h-screen font-sans">
      <Navbar userData={userData}/>
      {/* Side-by-side layout for Sidebar and Content */}
      <div className="flex">
        <Sidebar />
        <div className="p-4 md:p-6 w-full flex-1">
          {/* Page Header */}
          <div className="w-full mb-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Recordings</h2>
            <p className="py-1.5 text-sm md:text-base text-gray-500">
              All session recordings are organised as a YouTube playlist
            </p>
          </div>

          {/* Info Banner */}
          <div className="flex gap-2.5 md:gap-3 bg-orange-50 border border-orange-200 py-3 items-start md:items-center rounded-xl w-full px-4 md:px-8 mt-2 mb-6">
            <img
              src={info}
              className="w-5 h-5 shrink-0 mt-0.5 md:mt-0 opacity-80"
              alt=""
            />
            <p className="text-sm md:text-base text-orange-400">
              The playlist will open in a new tab so you can come back here anytime
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mt-2 mb-4">
              All Recorded Sessions
            </h2>
            {loading ? (
              <div className="flex items-center gap-3 py-10">
                <div className="w-6 h-6 border-3 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm font-medium">Loading recordings…</p>
              </div>
            ) : recordings.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-base font-medium">No recordings available yet</p>
                <p className="text-gray-300 text-sm mt-1">Check back after your next session.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {recordings.map((recording) => (
                  <div
                    key={recording._id}
                    className="bg-white border border-l-4 border-l-orange-400 border-gray-100 rounded-2xl p-4 w-full shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-orange-400 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                      <img
                        src={`https://img.youtube.com/vi/${new URL(recording.url).searchParams.get("v")}/0.jpg`}
                        alt={recording.title}
                        className="w-full md:w-28 h-44 md:h-20 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex flex-col flex-1 gap-2">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base md:text-lg font-semibold text-gray-900">
                            {recording.title}
                          </h3>
                          <div>
                            <a
                              href={recording.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-black justify-center gap-2 md:w-fit shrink-0 rounded-xl border border-orange-400 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm whitespace-nowrap  font-semibold hover:shadow-[0_4px_12px_rgba(245,137,30,0.4)] transition-all duration-200"
                            >
                              <img
                                src={Group}
                                alt="play icon"
                                className="w-4 h-4 md:w-4 md:h-4 brightness-200"
                              />
                              Watch on Youtube
                            </a>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm">
                          {recording.trackid?.name}
                        </p>
                        {recording.duration && (
                          <p className="text-gray-400 text-xs font-medium">
                            ⏱ {recording.duration}
                          </p>
                        )}
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

