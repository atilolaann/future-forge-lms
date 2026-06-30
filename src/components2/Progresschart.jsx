import line3 from "../assets/line3.png";
function Progresschart() {
  return (
    <div className="w-full  ">
      <div
        className="m-0 sm:m-2 p-4 sm:p-6  h-full w-full border-gray-300 rounded-lg shadow-inner
       hover:-translate-y-3 hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div>
          <h2 className="text-lg sm:text-xl font-bold py-2 sm:py-4">
            Your Progress
          </h2>
          <p className="text-sm sm:text-base">
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
