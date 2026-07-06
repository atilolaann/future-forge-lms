function StatsBar() {
  return (
    <div>
      <div className="flex">
        {/* On mobile: compact padding, smaller gaps, positive margin-top. On Desktop: margin-top added for spacing. */}
        <ul className="bg-black grid grid-cols-2 md:flex mx-4 sm:mx-6 rounded-2xl md:rounded-sm gap-y-4 gap-x-2 md:gap-12 w-full px-4 items-center text-white md:justify-between md:px-12 py-5 md:p-4 justify-items-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] md:shadow-none mt-8 mb-4 md:mt-12 md:mb-8 relative z-20">
          <li className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl md:text-base font-bold md:font-normal text-orange-400 md:text-white drop-shadow-sm md:drop-shadow-none tracking-wide md:tracking-normal">100+</span>
            <span className="text-[10px] md:text-[16px] text-gray-300 md:text-white uppercase tracking-wider md:normal-case md:tracking-normal mt-0.5 md:mt-0">Trained</span>
          </li>
          <li className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl md:text-base font-bold md:font-normal text-orange-400 md:text-white drop-shadow-sm md:drop-shadow-none tracking-wide md:tracking-normal">100+</span>
            <span className="text-[10px] md:text-[16px] text-gray-300 md:text-white uppercase tracking-wider md:normal-case md:tracking-normal mt-0.5 md:mt-0">Internship</span>
          </li>
          <li className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl md:text-base font-bold md:font-normal text-orange-400 md:text-white drop-shadow-sm md:drop-shadow-none tracking-wide md:tracking-normal">100+</span>
            <span className="text-[10px] md:text-[16px] text-gray-300 md:text-white uppercase tracking-wider md:normal-case md:tracking-normal mt-0.5 md:mt-0">On Job</span>
          </li>
          <li className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl md:text-base font-bold md:font-normal text-orange-400 md:text-white drop-shadow-sm md:drop-shadow-none tracking-wide md:tracking-normal">100+</span>
            <span className="text-[10px] md:text-[16px] text-gray-300 md:text-white uppercase tracking-wider md:normal-case md:tracking-normal mt-0.5 md:mt-0">Mentorship</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default StatsBar;