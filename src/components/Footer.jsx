import React from "react";
import facebook from "../assets/SVGS/facebook.svg";
import instagram from "../assets/SVGS/instagram.svg";
import x from "../assets/SVGS/x.svg";
import youtube from "../assets/SVGS/youtube.svg";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-[#000000] text-white px-6 sm:px-10 lg:px-[65px] font-['Gadugi',_sans-serif]">
      <div className="max-w-[1440px] mx-auto py-12 sm:py-16 lg:py-[80px] flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-[320px] lg:w-[400px] flex flex-col gap-6">
          <h2 className="text-[24px] font-bold">FutureForge</h2>
          <p className="text-[14px] leading-[22px] opacity-90">
            Explore a world of trusted information on child and maternal
            vaccinations. From recommended immunization schedules to answers for
            common concerns, we make it easy for you to stay updated, confident,
            and in control of your family’s health journey.
          </p>
          <div className="flex gap-[10px]">
            {[facebook, youtube, x, instagram].map((src, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center"
              >
                <img
                  src={src}
                  className="w-full h-full object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 md:gap-[40px] lg:gap-[120px]">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[18px] mb-2">Explore</h3>
            <a href="#" className="text-[14px] hover:underline">
              Home
            </a>
            <a href="#" className="text-[14px] hover:underline">
              About Us
            </a>
            <a href="#" className="text-[14px] hover:underline">
              How it works
            </a>
            <a href="#" className="text-[14px] hover:underline">
              Features
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[18px] mb-2">Help</h3>
            <a href="#" className="text-[14px] hover:underline">
              FAQ
            </a>
            <a href="#" className="text-[14px] hover:underline">
              Privacy
            </a>
            <a href="#" className="text-[14px] hover:underline">
              Cookie
            </a>
            <a href="#" className="text-[14px] hover:underline">
              Terms of service
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[18px] mb-2">Contact</h3>
            <p className="text-[14px] w-[180px]">
              Eric Moore Road, Lagos Nigeria
            </p>
            <p className="text-[14px]">fforge@gmail.com</p>
            <p className="text-[14px]">012-800-200</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pb-8 border-t-[1px] border-white text-center text-[14px]">
        <div className="pt-8">All rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
