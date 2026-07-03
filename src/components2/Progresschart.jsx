import line3 from "../assets/line3.png";

function Progresschart() {
  return (
    <div className="w-full">
      <div className="m-0 sm:m-2 p-4 sm:p-6 h-full w-full bg-white border-l-4 border-l-orange-400 rounded-2xl border border-amber-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-amber-300 transition-all duration-300 overflow-hidden">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 py-1 sm:py-2">
            Your Progress
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Track your program completion over time
          </p>
        </div>
        <div className="mt-2 sm:mt-0  w-full overflow-hidden">
          <img src={line3} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Progresschart;
