import { Link } from "react-router-dom";
import doc from "../assets/doc.png";

function Resourcescard() {
  return (
    <div className="w-full h-full">
      <div className="m-0 sm:m-2 p-4 sm:p-6 w-full h-full bg-white rounded-2xl border border-l-4 border-l-orange-400 border-gray-100 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-amber-200 transition-all duration-300">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 py-2 sm:py-4">
            Resources
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pb-4 items-start sm:items-center">
            <p className="text-sm sm:text-base text-gray-600">
              Find important links, curriculum, schedules and more
            </p>
            <img
              src={doc}
              className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
              alt="document icon"
            />
          </div>
        </div>
        <div>
          <Link
            to="/Resourcescontent"
            className="block text-center bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] text-white font-semibold w-full py-2.5 rounded-xl hover:shadow-[0_4px_14px_rgba(245,137,30,0.4)] transition-all duration-200"
          >
            View Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Resourcescard;
