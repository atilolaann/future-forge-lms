import { motion } from "framer-motion"
import Mission2 from "../assets/Mission2.png";

function About() {
  return (
    <div>
      {/* 1. Main Container: Stacked vertically on mobile, side-by-side on desktop */}
      <div
       className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto items-center">
        {/* 2. Image: Full width on mobile, 50% width on desktop */}
         <img src={Mission2} className="w-full md:w-[50%]" alt="" />
        {/* 3. Text Box: Adjusted margins so text doesn't touch the screen edges on mobile */}
        <motion.div 
        initial={{ x: 90, opacity:0}}
         whileInView={{ x: 0, opacity:1}}
         transition={{ duration: 0.8, delay: 0.3 }}
         viewport={{once: true}}
        className="mx-6 my-6 md:mx-8 md:my-0">
          {/* 4. Heading: Slightly smaller on mobile so it fits, large on desktop */}
          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
            Empowering Learners Through Structured Digital Learning
          </h3>

          <p className="py-6">
            At Future Forge, innovation is not just a buzzword, its the
            <br className="hidden md:inline" /> heartbeat of everything we do.
            We believe the future belongs
            <br className="hidden md:inline" /> to those who dare to create,
          </p>

          <motion.button
           initial={{ x: 90, opacity:0}}
           whileInView={{ x: 0, opacity:1}}
           transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{once: true}}
           className="bg-linear-to-b from-[#ffa914] via-[#F5891E] to-[#F67430] py-2 px-5 rounded-sm text-white">
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
