import Navbar from "../components2/Navbar.jsx";
import Sidebar from "../components2/Sidebar.jsx";
import Vec1 from "../assets/Vec1.png";
import Alarm from "../assets/Alarm.png";
import Vec2 from "../assets/Vec2.png";

function Resourcescontent() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <div className="flex-1 w-full p-4 md:p-6 md:mx-14">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Resources</h2>
            <p className="text-sm md:text-base mt-2">
              Access all links and materials for your track
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border p-4 md:p-6 border-gray-300 rounded-lg shadow-inner w-full">
              <p className="text-lg md:text-2xl font-bold py-2 flex justify-between items-center">
                {" "}
                Track Curriculum
                <img
                  src={Vec1}
                  className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                  alt=""
                />
              </p>
              <p className="text-sm md:text-base">
                View the complete curriculum and class modules
              </p>
            </div>
            <div className="border p-4 md:p-6 border-gray-300 rounded-lg shadow-inner w-full">
              <p className="text-lg md:text-2xl font-bold py-2 flex justify-between items-center">
                Class Schedule
                <img
                  src={Alarm}
                  className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                  alt=""
                />
              </p>
              <p className="text-sm md:text-base">
                View your class timetable and upcoming sessions
              </p>
            </div>
            <div className="border p-4 md:p-6 border-gray-300 rounded-lg shadow-inner w-full">
              <p className="text-lg md:text-2xl font-bold py-2 flex justify-between items-center">
                Cohort Calendar
                <img
                  src={Vec2}
                  className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                  alt=""
                />
              </p>
              <p className="text-sm md:text-base">
                Important dates, deadlines and cohort events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resourcescontent;
