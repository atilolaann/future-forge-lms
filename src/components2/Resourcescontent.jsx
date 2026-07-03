import { useState, useEffect } from "react";
import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import Vec1 from "../assets/Vec1.png";
import Alarm from "../assets/Alarm.png";
import Vec2 from "../assets/Vec2.png";

const BASE_URL = "https://lms-be-kc72.onrender.com/api";

function Resourcescontent() {
  const [resources, setResources] = useState([]);
   const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  //resources fetch
  useEffect(() => {
    fetch(`${"https://lms-be-kc72.onrender.com/api"}/resources`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setResources(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
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
      <Navbar userData={userData} />
      {/* Side-by-side layout for Sidebar and Content */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1 w-full p-4 md:p-6 md:mx-6">
          {/* Page Header */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              Resources
            </h2>
            <p className="text-gray-500 mt-1.5 text-sm md:text-base">
              Access all links and materials for your track
            </p>
          </div>

          {loading ? (
            <div className="flex items-center gap-3 py-10">
              <div className="w-6 h-6 border-3 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 text-sm font-medium">Loading resources…</p>
            </div>
          ) : resources.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-base font-medium">No resources available yet.</p>
              <p className="text-gray-300 text-sm mt-1">Check back later or contact your instructor.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {resources.map((item) => (
                <a
                  key={item._id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border-l-4 border-l-orange-400 rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-orange-200 transition-all duration-200 group"
                >
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-orange-400 transition-colors duration-150">
                        {item.title}
                      </h3>
                      <span className="text-xs font-semibold border border-amber-200 bg-amber-50 rounded-full px-2.5 py-1 text-orange-400 shrink-0 whitespace-nowrap">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-0.5">{item.trackId?.name}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resourcescontent;

