import React from "react";
import { motion } from "framer-motion"

const CTA = () => {

   const handleGetStarted = () => {
    window.open(
      "https://futureforge-project-snx5.vercel.app/",
      "_blank",
    );
  };
  return (
    <section className="w-full h-full px-4 py-8 bg-white sm:px-6 md:py-16 flex justify-center font-['Gadugi',_sans-serif]">
      <div
        className="w-full max-w-[1240] rounded-[10px] py-10 px-4 sm:px-8 md:py-14 md:px-12 lg:py-[72px] lg:px-[60px]
         flex shadow-inner flex-col md:flex-row items-center justify-between gap-8 md:gap-6 lg:gap-0 bg-linear-to-b from-[#ffa914] via-[#F5891E] to-[#F67430]"
      >
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-[36px] text-center md:text-left max-w-[600px]">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight md:leading-snug lg:leading-[78px] m-0">
            Ready To Start your Learning?
          </h2>

          <p className="text-white text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-relaxed md:leading-normal lg:leading-[26px] m-0">
            Join the FutureForge community and access your personalised learning
            portal.
          </p>
        </div>

        <motion.a
        whileHover={{scale:1.05, y: -2}}
        whileTap={{scale: 0.95}}
           onClick={handleGetStarted}
          className="bg-[#000000] text-white flex items-center justify-center w-[166px] h-[54px] rounded-[10px] hover:bg-neutral-800 transition-colors cursor-pointer no-underline shrink-0"
        >
          Get started
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;
