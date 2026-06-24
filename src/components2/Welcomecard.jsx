import radial from "../assets/radial.png";
function Welcomecard() {
  return (
    <div className="w-full ">
      <div className="m-0 sm:m-2 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between w-full h-full rounded-lg shadow-inner hover:-translate-y-3 hover:shadow-lg transition-all duration-300">
        <div>
          <h3 className="py-2 sm:py-4 text-lg sm:text-xl font-bold">
            Week 9/20
          </h3>
          <p className="text-sm sm:text-base">9 of 10 lessons completed</p>
          <p className="text-sm sm:text-base mt-1 sm:mt-0">
            Frontend Development Track
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 sm:mt-0 text-center">
          <div className="w-70">
            <img src={radial} alt="" />
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Keep it up you're up to a great start
          </p>
        </div>
      </div>
    </div>
  );
}
export default Welcomecard;
