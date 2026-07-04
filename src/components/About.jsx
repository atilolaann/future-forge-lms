import { motion } from "framer-motion";
import hero2 from "../assets/hero2.png";

function About() {
  return (
    <main id="about" className="scroll-mt-24">
      <div className="w-full p-4 bg-orange-50">
        <div>
          {/* 1. Main Container: Stacked vertically on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row items-center">
            {/* 2. Image: Full width on mobile, 50% width on desktop */}

            <img src={hero2} className="w-full rounded-lg md:w-[50%]" alt="" />

            {/* 3. Text Box: Adjusted margins so text doesn't touch the screen edges on mobile */}
            <motion.div
              initial={{ x: 90, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-6 my-6 md:mx-8 md:my-0"
            >
              <p className="text-white mb-10 bg-black w-30 rounded-sm text-center mx-auto md:mx-0">
                About Us
              </p>
              {/* 4. Heading: Slightly smaller on mobile so it fits, large on desktop */}
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Empowering Learners Through Structured Digital Learning
              </h3>

              <p className="py-6">
                FutureForge is a platform that help learners gain practical
                career ready skills through expert led courses, hands on
                projects, and personalized learning paths designed for the
                future work
                <br className="hidden md:inline" />
                <br className="hidden md:inline" />
              </p>

              <motion.button
                initial={{ x: 90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-linear-to-b from-[#ffa914] via-[#F5891E] to-[#F67430] py-2 px-5 rounded-sm text-white"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
