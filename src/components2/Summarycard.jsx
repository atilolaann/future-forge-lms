function Summarycard() {
  return (
    <div className="m-0 sm:m-2 p-4 sm:p-6 w-full lg:max-w-[507px] h-full bg-white rounded-2xl border-l-4 border-l-orange-400 border border-orange-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 py-1 sm:py-2">
        Week 6 Summary
      </h2>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        You're <span className="text-orange-500 font-semibold">35%</span> through your learnings —{" "}
        <span className="font-medium text-gray-700">14 weeks</span> ahead. Keep building!
      </p>
    </div>
  );
}
export default Summarycard;
