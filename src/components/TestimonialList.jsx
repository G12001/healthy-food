import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Arrow = ({ className, style, onClick, icon }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    {icon}
  </div>
);

const TestimonialList = ({ testimonials }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow icon=">" />,
    prevArrow: <Arrow icon="<" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    adaptiveHeight: true, // Ensure equal height for cards
  };

  return (
    <section id="testimonials" className="w-full bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold mb-12 text-[#74DF00]">
          Testimonials
        </h2>
        <div className="w-full">
          <Slider {...settings} className="flex justify-center items-center">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
