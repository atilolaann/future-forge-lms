import React from "react";
import { motion } from "framer-motion"

const CTA = () => {

   const handleGetStarted = () => {
    window.open(
      "https://futureforge-project-snx5.vercel.app/registration-form",
      "_blank",
    );
  };
  return (
    <section className="w-full bg-white py-8 md:py-16 flex justify-center font-['Gadugi',_sans-serif]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div
          className="w-full rounded-[10px] py-10 px-4 sm:px-8 md:py-14 md:px-12 lg:py-[72px] lg:px-[60px]
           flex shadow-inner flex-col md:flex-row items-center justify-between gap-8 md:gap-6 lg:gap-0 bg-linear-to-r from-orange-400 via-orange-100 to-orange-300"
        >
          <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-[36px] text-center md:text-left max-w-[600px]">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight md:leading-snug lg:leading-[78px] m-0">
              Ready To Start your Learning?
            </h2>

            <p className="text-black text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-relaxed md:leading-normal lg:leading-[26px] m-0">
              Join the FutureForge community and access your personalised learning
              portal.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-black text-white flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-neutral-800 transition-colors cursor-pointer no-underline shrink-0"
          >
            Get started
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
