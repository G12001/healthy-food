import heroimg from "../assets/hero-img3.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-auto md:h-screen overflow-hidden flex justify-center items-center md:pt-0 pt-24 bg-gray-100"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="md:flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left py-12 md:py-0">
          <h2 className="text-[#74DF00] text-4xl md:text-6xl leading-tight font-bold mb-4">
            Fuel Your Workouts with{" "}
            <span className="block md:inline-block">G-DIET</span>
          </h2>
          <p className="text-[#333] text-lg md:text-xl mb-6 md:max-w-lg">
            Discover the best nutrition for gym enthusiasts
          </p>
          <a
            href="#products"
            className="text-white bg-[#74DF00] py-3 px-8 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition-colors duration-300"
          >
            Explore Now <FaArrowRight className="text-xl" />
          </a>
        </div>
        <div className="md:flex-1">
          <img
            src={heroimg}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
