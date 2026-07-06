import Mission3 from "../assets/Mission3.png";
import { motion } from "framer-motion";

function Mission() {
  return (
    <main id="mission" className="scroll-mt-24">
      <div className="w-full bg-white text-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-4 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-full md:max-w-[50%]">
            <div>
              <p className="text-white bg-black w-30 rounded-sm text-center mx-auto md:mx-0">
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

              <motion.button
                initial={{ x: 90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                onClick={() => window.open("https://futureforge-project-snx5.vercel.app/", "_blank")}
                className="bg-linear-to-b from-[#ffa914] via-[#F5891E] to-[#F67430] py-2 px-5 rounded-sm text-black mt-8 cursor-pointer"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          <div className="w-full md:flex-1 flex justify-center md:justify-end">
            <img
              src={Mission3}
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
