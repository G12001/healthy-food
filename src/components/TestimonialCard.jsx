import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-full p-6 bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex justify-center items-center mb-4">
        <img
          className="w-16 h-16 rounded-full object-cover border-2 border-[#00FF00]"
          src={testimonial.image}
          alt={`${testimonial.name}'s testimonial`}
        />
      </div>
      <div className="text-center">
        <FaQuoteLeft className="text-[#00FF00] text-3xl mb-4" />
        <p className="text-gray-700 text-base italic mb-4">
          {testimonial.message}
        </p>
        <FaQuoteRight className="text-[#00FF00] text-3xl mb-4" />
        <div className="font-bold text-xl text-gray-900">
          {testimonial.name}
        </div>
        <div className="text-gray-600">{testimonial.designation}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
