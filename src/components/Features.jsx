import { motion } from "framer-motion"
import Vector from "../assets/Vector.png";
import GraduationCap from "../assets/GraduationCap.png";
import Microphone from "../assets/Microphone.png";

function Features() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
      <div className="py-5 w-full md:max-w-[70%] lg:max-w-[50%] text-center md:text-left">
        <motion.h3 
        initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
          viewport={{once: true}}
        className="font-bold text-3xl sm:text-4xl md:text-5xl pt-6">
          Explore our Features
        </motion.h3>
        <p className="py-4 text-sm sm:text-base max-w-full md:max-w-[80%] mx-auto md:mx-0">
          Discover powerful tools designed to help forgers learn efficiently,
          stay organised, and track their progress throughout every stage of the
          cohort journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full mt-6">
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
         whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
         viewport={{once: true}}
        className="border border-orange-400 rounded-sm p-5 w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={Vector}
            className="bg-orange-400 w-10 p-2 rounded-full my-2"
            alt=""
          />
          <h2 className="text-xl sm:text-2xl font-semibold pt-4">
            Track Progress
          </h2>
          <p className="text-sm sm:text-base mt-2 text-neutral-600">
            Monitor your weekly cohort progress and stay on top of your learning
            goal.
          </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
         viewport={{once: true}}
        className="border border-orange-400 rounded-sm p-5 w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={GraduationCap}
            className="bg-orange-400 w-10 p-2 rounded-full my-2"
            alt=""
          />
          <h2 className="text-xl sm:text-2xl font-semibold pt-4">
            Access Resources
          </h2>
          <p className="text-sm sm:tnext-base mt-2 text-neutral-600">
            Monitor your weekly cohort progress and stay on top of your learning
            goal.
          </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
         viewport={{once: true}}
        className="border border-orange-400 rounded-sm p-5 w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={Microphone}
            className="bg-orange-400 w-10 p-2 rounded-full my-2"
            alt=""
          />
          <h2 className="text-xl sm:text-2xl font-semibold pt-4">
            Watch Recordings
          </h2>
          <p className="text-sm sm:text-base mt-2 text-neutral-600">
            Monitor your weekly cohort progress and stay on top of your learning
            goal.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
