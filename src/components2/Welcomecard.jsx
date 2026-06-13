function Welcomecard() {
  return (
    <div className="w-full">
      <div className="m-0 sm:m-2 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between w-full lg:max-w-[507px] border border-gray-300 rounded-lg shadow-inner">
        <div>
          <h3 className="py-2 sm:py-4 text-lg sm:text-xl font-bold">
            Week 4/10
          </h3>
          <p className="text-sm sm:text-base">4 of 10 lessons completed</p>
          <p className="text-sm sm:text-base mt-1 sm:mt-0">
            Frontend Development Track
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 sm:mt-0 text-center">
          Radial Chart
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Keep it up you're up to a great start
          </p>
        </div>
      </div>
    </div>
  );
}
export default Welcomecard;
