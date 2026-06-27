import Vision2 from "../assets/Vision2.png";

function Mission() {
  return (
    <main>
      <div className="w-full bg-orange-400 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-full md:max-w-[50%]">
            <div>
              <p className="text-black bg-white w-30 rounded-sm text-center mx-auto md:mx-0">
                Our Mission
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 leading-tight md:leading-[64px]">
                Building A Smarter <br className="hidden md:inline" /> Future
                Through <br className="hidden md:inline" /> Learning
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                FutureForge LMS exists to make learning more{" "}
                <br className="hidden md:inline" /> engaging, organised, and
                accessible for every <br className="hidden md:inline" /> Forger.
                We are committed to supporting Learners{" "}
                <br className="hidden md:inline" /> with structured tools
              </p>
            </div>
          </div>

          <div className="w-full md:flex-1 flex justify-center md:justify-end">
            <img
              src={Vision2}
              className="self-center my-2 md:my-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Mission;
