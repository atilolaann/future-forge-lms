import React, { useState } from "react";
import { motion } from "framer-motion";
import sarah from "../assets/Sarah.png";
import michael from "../assets/Michael.png";
import amra from "../assets/Amra.png";

const allTestimonials = [
  {
    id: 1,
    review:
      "Before joining FutureForge, i struggled to stay consistent with learning online. The structuired class, progress tracking and access to session recordings helped me learn at my own pace without falling behind",
    name: "Sarah Keneddy",
    track: "UI/UX Design Track",
    avatar: sarah,
  },
  {
    id: 2,
    review:
      "FutureForge completely changed how i learn online. The lessons are well structured in a way that actually makes sense, and i am able to track my progress without feeling overwhelmed",
    name: "Michael Umoh",
    track: "Web Development Track",
    avatar: michael,
  },
  {
    id: 3,
    review:
      "Before joining FutureForge, i struggled to stay consistent with learning online. The structuired class, progress tracking and access to session recordings helped me learn at my own pace without falling behind",
    name: "Amra Johnsoon",
    track: "UI/UX Design Student",
    avatar: amra,
  },
  {
    id: 4,
    review:
      "I started with zero tech background, but futureforge made everything easy to follow. the bite-sized lessons and clear explanations helped me stay consistent. i feel like i’m making progress",
    name: "Sarah Keneddy",
    track: "UI/UX Design Track",
    avatar: sarah,
  },
  {
    id: 5,
    review:
      "Before joining FutureForge, i struggled to stay consistent with learning online. The structuired class, progress tracking and access to session recordings helped me learn at my own pace without falling behind",
    name: "Michael Umoh",
    track: "Web Development Track",
    avatar: michael,
  },
  {
    id: 6,
    review:
      "What i love about futureforge is how practical it is. it doesnt just teach theory- it pushes you to build real projects. my portfolio improved massively within weeks of joining that particular cohort ",
    name: "Amra Johnsoon",
    track: "UI/UX Design Student",
    avatar: amra,
  },
];

const StarRating = () => {
  return (
    <div className="flex gap-1 mt-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-[16px] h-[16px] text-orange-400"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="#F59E0B"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-8 sm:gap-[48px] lg:gap-[68px] w-full max-w-[393px] h-full mx-auto"
    >
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -10, scale: 1.02 }}
        className="border border-orange-300 rounded-[30px] p-6 bg-white flex flex-col justify-between grow shadow-[inset_0_0_20px_rgba(245,137,30,0.15),_0_10px_30px_-10px_rgba(245,137,30,0.05)]"
      >
        <p className="text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[28px] text-black font-normal m-0">
          {testimonial.review}
        </p>
        <StarRating />
      </motion.div>

      <div className="flex items-center gap-3 px-2">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div>
          <h4 className="text-[14px] font-bold text-black m-0 leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-[12px] text-gray-800 m-0 mt-1">
            {testimonial.track}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll
    ? allTestimonials
    : allTestimonials.slice(0, 3);

  return (
    <section id="testimonials" className="w-full bg-orange-100 scroll-mt-24">
      <div className="py-12 px-4 sm:px-8 md:px-10 max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-8 md:mb-12 max-w-[362] text-left"
        >
          Hear What They Say About Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-10 md:mt-14">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="bg-linear-to-b from-[#F59E0B] via-[#F5891E] to-[#F67430] hover:bg-orange-600
             text-black font-semibold py-3 px-10 rounded-lg text-sm transition-colors cursor-pointer"
          >
            {showAll ? "See less" : "See more"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
