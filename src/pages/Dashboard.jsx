import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import Welcomecard from "../components2/Welcomecard.jsx";
import Progresschart from "../components2/Progresschart.jsx";
import Recordingscard from "../components2/Recordingscard.jsx";
import Resourcescard from "../components2/Resourcescard.jsx";
import Summarycard from "../components2/Summarycard.jsx";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("https://lms-be-kc72.onrender.com/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.data) {
          console.log(data);
          setDashboardData(data.data);
        }
      })
      .catch((err) => console.error("Error fetching dashboard:", err));
  }, [token, navigate]);

  if (!dashboardData) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar userData={dashboardData?.user} />

      {/* Side-by-side layout for Sidebar and Content */}
      <div className="flex">
        <Sidebar />

        {/* Content wrapper taking remaining horizontal space */}
        <div className="flex-1 w-full p-4 md:p-6 flex flex-col gap-6">
          <div className="mt-2 md:mt-4 px-2">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome back, {dashboardData?.user?.fullName || "Student"}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {dashboardData?.track?.name || "No track assigned yet"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            <Welcomecard />
            <Progresschart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            <Recordingscard />
            <Resourcescard />
          </div>

          <Summarycard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
