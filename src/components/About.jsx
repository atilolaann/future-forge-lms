import { motion } from "framer-motion";
import hero2 from "../assets/hero2.png";

function About() {
  return (
    <main id="about" className="scroll-mt-24">
      <div className="w-full bg-white text-black py-10 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* 1. Image: Full width on mobile, 50% width on desktop */}
          <div className="w-full md:w-[50%] shrink-0">
            <img src={hero2} className="w-full rounded-lg h-auto" alt="" />
          </div>

          {/* 2. Text Box */}
          <motion.div
            initial={{ x: 90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-white mb-6 bg-black w-30 py-1.5 rounded-sm text-center mx-auto md:mx-0">
              About Us
            </p>
            {/* 3. Heading: Slightly smaller on mobile so it fits, large on desktop */}
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              Empowering Learners Through Structured Digital Learning
            </h3>

            <p className="py-6">
              FutureForge is a platform that help learners gain practical
              career ready skills through expert led courses, hands on
              projects, and personalized learning paths designed for the
              future work
            </p>

            <motion.button
              initial={{ x: 90, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://futureforge-project-snx5.vercel.app/", "_blank")}
              className="bg-gradient-to-b from-[#F59E0B] via-[#F5891E] to-[#E3621D] text-white px-8 py-3.5 rounded-full mt-2 text-[15px] font-semibold shadow-[0_8px_20px_-6px_rgba(245,158,11,0.6)] cursor-pointer"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default About;
