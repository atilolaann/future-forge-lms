import radialn from "../assets/radialn.png";

function Welcomecard({ userData }) {
  return (
    <div className="w-full">
      <div className="m-0 sm:m-2 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between w-full h-full border-l-4 border-l-orange-400
       bg-white rounded-2xl border border-orange-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-orange-300 transition-all duration-300">
        <div className="flex flex-col gap-1">
         
          <h3 className="py-2 text-lg sm:text-xl font-bold text-gray-900">
            Week 6/20
          </h3>
          <p className="text-sm sm:text-base text-gray-600">6 of 20 lessons completed</p>
          <p className="text-sm text-gray-500 mt-0.5">
            {userData?.trackId?.name}
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 sm:mt-0 text-center">
          <div className="w-70">
            <img src={radialn} alt="" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Keep it up — you're off to a great start! 
          </p>
        </div>
      </div>
    </div>
  );
}
export default Welcomecard;
