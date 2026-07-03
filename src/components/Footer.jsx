import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/SVGS/facebook.svg";
import instagram from "../assets/SVGS/instagram.svg";
import x from "../assets/SVGS/x.svg";
import youtube from "../assets/SVGS/youtube.svg";

const socialLinks = [
  {
    name: "Facebook",
    icon: facebook,
    href: "https://www.facebook.com/profile.php?id=61583263831596",
  },
  {
    name: "YouTube",
    icon: youtube,
    href: "https://www.youtube.com/@FutureForgeLearning",
  },
  {
    name: "X",
    icon: x,
    href: "https://x.com/FutureforgeL",
  },
  {
    name: "Instagram",
    icon: instagram,
    href: "https://www.instagram.com/futureforgelearning?igsh=MXdiMWxjMW80bTgwbw%3D%3D",
  },
];

const Footer = () => {
  // Smooth scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full  bg-[#000000] text-white px-6 sm:px-10 lg:px-[65px] font-['Gadugi',_sans-serif]">
      <div className="max-w-[1440px] mx-auto py-12 sm:py-16 lg:py-[80px] flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-[320px] lg:w-[400px] flex flex-col gap-6">
          <h2 className="text-[24px] font-bold">FutureForge</h2>
          <p className="text-[14px] leading-[22px] opacity-90">
            At FutureForge, we are empowering learners to build future ready
            skills through structured, practical and accessible online
            experiences for our students. Stay connected, follow us for more
            updates.
          </p>
          <div className="flex gap-[10px]">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-8 h-8 flex items-center justify-center opacity-80 transition-all duration-200 hover:-translate-y-1 hover:opacity-100"
              >
                <img
                  src={social.icon}
                  alt={social.name}
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

            {/* UPDATED: Changed from Link to button for smooth top scroll */}
            <button
              onClick={scrollToTop}
              className="text-[14px] hover:underline text-left cursor-pointer"
            >
              Home
            </button>

            {/* UPDATED: Changed from Link to button for smooth scrolling */}
            <button
              onClick={() => scrollToSection("about")}
              className="text-[14px] hover:underline text-left cursor-pointer"
            >
              About Us
            </button>

            {/* UPDATED: Changed from Link to button for smooth scrolling */}
            <button
              onClick={() => scrollToSection("mission")}
              className="text-[14px] hover:underline text-left cursor-pointer"
            >
              Our mission
            </button>
          </div>

          <div id="contact" className="flex flex-col gap-4 scroll-mt-24">
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
