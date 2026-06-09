import landingpage2 from "../assets/landingpage2.png";

function Hero() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 mt-20">
      <main className="flex flex-col md:flex-row gap-10 md:gap-2 justify-between items-center min-h-[70vh] py-10 md:py-0">
        <div className="w-full md:flex-1 max-w-xl text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Learn, Track Progess,
            <br className="hidden sm:inline" /> Build Your Future
          </h3>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
            One central space for Forgers to access learning resources,{" "}
            <br className="hidden md:inline" />
            Watch session recordings, track cohort progress.
          </p>
          <button className="bg-orange-400 text-white px-6 py-3 rounded-lg mt-6">
            Begin Journey
          </button>
        </div>
        <div className="w-full md:flex-1 flex justify-center md:justify-end">
          <img
            src={landingpage2}
            className="max-w-137.5 w-full h-auto"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}

export default Hero;
