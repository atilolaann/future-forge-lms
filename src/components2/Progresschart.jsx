function Progresschart() {
  return (
    <div className="w-full h-full">
      <div className="m-0 sm:m-2 p-4 sm:p-6 w-full lg:max-w-[507px] h-full border-gray-300 rounded-lg shadow-inner">
        <div>
          <h2 className="text-lg sm:text-xl font-bold py-2 sm:py-4">
            Your Progress
          </h2>
          <p className="text-sm sm:text-base">
            Track your program completion over time
          </p>
        </div>
        <div className="mt-4 sm:mt-0">Progress line chart</div>
      </div>
    </div>
  );
}
export default Progresschart;
