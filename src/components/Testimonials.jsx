import React, { useState } from "react";
import sarah from "../assets/Sarah.png";
import michael from "../assets/Michael.png";
import amra from "../assets/Amra.png";

const allTestimonials = [
  {
    id: 1,
    review:
      "Before joining FutureForge, I struggled to stay consistent with learning online. The structured class, progress tracking and access to session recordings helped me learn at my own pace without falling behind.",
    name: "Sarah Keneddy",
    track: "UI/UX Design Track",
    avatar: sarah,
  },
  {
    id: 2,
    review:
      "Before joining FutureForge, I struggled to stay consistent with learning online. The structured class, progress tracking and access to session recordings helped me learn at my own pace without falling behind.",
    name: "Michael Umoh",
    track: "Web Development Track",
    avatar: michael,
  },
  {
    id: 3,
    review:
      "Before joining FutureForge, I struggled to stay consistent with learning online. The structured class, progress tracking and access to session recordings helped me learn at my own pace without falling behind.",
    name: "Amra Johnsoon",
    track: "UI/UX Design Student",
    avatar: amra,
  },
  {
    id: 4,
    review:
      "Before joining FutureForge, I struggled to stay consistent with learning online. The structured class, progress tracking and access to session recordings helped me learn at my own pace without falling behind.",
    name: "Sarah Keneddy",
    track: "UI/UX Design Track",
    avatar: sarah,
  },
  {
    id: 5,
    review:
      "Before joining FutureForge, I struggled to stay consistent with learning online. The structured class, progress tracking and access to session recordings helped me learn at my own pace without falling behind.",
    name: "Michael Umoh",
    track: "Web Development Track",
    avatar: michael,
  },
  {
    id: 6,
    review:
      "Before joining FutureForge, I struggled to stay consistent with learning online. The structured class, progress tracking and access to session recordings helped me learn at my own pace without falling behind.",
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
          className="w-[16px] h-[16px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F3D34"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-8 sm:gap-[48px] lg:gap-[68px] w-full max-w-[393px] h-full mx-auto">
      <div className="border border-orange-300 rounded-[30px] p-6 bg-white flex flex-col justify-between grow shadow-sm">
        <p className="text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[28px] text-[#1F3D34] font-normal m-0">
          {testimonial.review}
        </p>
        <StarRating />
      </div>

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
          <p className="text-[12px] text-neutral-500 m-0 mt-1">
            {testimonial.track}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll
    ? allTestimonials
    : allTestimonials.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-8 md:px-10 bg-white max-w-[1440px] mx-auto">
      <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-8 md:mb-12 max-w-[362px] text-left">
        Hear What They Say About Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="flex justify-center mt-10 md:mt-14">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-lg text-sm transition-colors cursor-pointer"
        >
          {showAll ? "See less" : "See more"}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
