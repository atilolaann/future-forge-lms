import { useState, useEffect } from "react"
import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import Vec1 from "../assets/Vec1.png";
import Alarm from "../assets/Alarm.png";
import Vec2 from "../assets/Vec2.png";



    const BASE_URL = "https://lms-be-kc72.onrender.com/api";

function Resourcescontent() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${"https://lms-be-kc72.onrender.com/api"}/resources`, {
      headers: { Authorization: `Bearer ${token}`
     },
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
    
    return(
             <div className="w-full overflow-x-hidden">
            <Navbar />
             <div className="flex flex-col md:flex-row">
                 <Sidebar />
                  <div className="flex-1 w-full p-4 md:p-6 md:mx-14">
                     <div className='mb-8 '>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Resources
                            </h2>
                            <p className= "text-gray-600 mt-2">
                                Access all links and materials for your track
                            </p>
                        </div>
                        
                       {loading ? (
            <p>Loading resources...</p>
          ) : resources.length === 0 ? (
            <p className="text-gray-500">No resources available yet.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {resources.map((item) => (
                <a
                  key={item._id}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-300 rounded-lg p-6 shadow-inner flex items-center gap-4 cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-xs border border-gray-400 rounded px-2 py-1 text-gray-500">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.trackId?.name}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

                 </div>
                
            </div>

        </div>
    )
}         
           
export default Resourcescontent;
