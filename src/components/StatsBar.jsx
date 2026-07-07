function StatsBar() {
  return (
    <div>
      <div className="flex justify-center w-full px-4 sm:px-6 relative z-30">
        {/* On mobile: compact padding, smaller gaps, negative margin-top. On Desktop: negative margin-top added for overlapping. */}
        <ul className="bg-black backdrop-blur-md border border-orange-500/20 grid grid-cols-2 md:flex rounded-2xl gap-y-4 gap-x-2 md:gap-12 w-full max-w-5xl px-4 items-center text-white md:justify-between md:px-12 py-5 md:p-6 justify-items-center shadow-[0_15px_35px_-5px_rgba(245,137,30,0.25),_0_10px_20px_-10px_rgba(0,0,0,0.5)] -mt-10 sm:-mt-14 md:-mt-16 mb-4 md:mb-8 relative z-20">
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