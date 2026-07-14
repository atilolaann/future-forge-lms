import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import logow from "../assets/logow.png";
import logiinn from "../assets/logiinn.png";

function LoginA() {
  return (
    <div className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] flex-1 mim-h-screen overflow-y-auto">
      <section className="p-10 text-white flex items-center flex-col  gap-10 min-h-screen bg-cover bg-center bg-no-repeat"
      
      style={{
        backgroundImage: `url(${logiinn})`
      }}>
        {/* Logo */}
        <motion.div
        initial={{opacity:0, x: -50}}
        animate={{opacity:1, x: 0}}
        transition={{duration: 0.8 }}
        className="w-136 h-25">
          <Link to="/">
            <img
              src={logow}
              className="w-60 cursor-pointer hover:opacity-90 transition-opacity"
              alt="futureforge logo"
            />
          </Link>
        </motion.div>

       

        {/* Description */}

        <div className="w-136">
          <h2 className="text-5xl font-bold py-5  mb-6">Onboard <br /> into our <span className="text-orange-500"> LMS </span></h2>
          <p className="text-xl font-normal mt-10 w-60  border-t border-t-orange-600 pt-4">
            Your personalized learning  hub for resources, recordings, progress
            tracking, and cohort collaboration , all in one place.
          </p>
        </div>
      </section>
    </div>
  );
}
export default LoginA;
