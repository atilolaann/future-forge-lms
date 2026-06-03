import React from "react";

const CTA = () => {
  return (
    <section className="w-full px-6 py-12 flex justify-center font-['Gadugi',_sans-serif]">
      {/* 
        Container Specs:
        - Padding: 72px Top/Bottom, 60px Left/Right
        - Background: #F67430
      */}
      <div
        className="w-full max-w-[1240px] rounded-[10px] py-[72px] px-[60px] flex flex-col md:flex-row items-center justify-between"
        style={{
          background: "#F67430",
        }}
      >
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-[36px] text-left max-w-[600px]">
          <h2 className="text-white text-[56px] font-bold leading-[78px] m-0">
            Ready To Start your Learning?
          </h2>

          <p className="text-white text-[20px] font-normal leading-[26px] m-0">
            Join the FutureForge community and access your personalised learning
            portal.
          </p>
        </div>

        {/* Right Side: Black Button */}
        <a
          href="/login"
          className="bg-[#000000] text-white flex items-center justify-center w-[166px] h-[54px] rounded-[10px] hover:bg-neutral-800 transition-colors cursor-pointer no-underline shrink-0 mt-8 md:mt-0"
        >
          Get started
        </a>
      </div>
    </section>
  );
};

export default CTA;
