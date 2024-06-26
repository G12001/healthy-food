import founder from "../assets/founder.png";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold mb-8 text-[#00FF00] text-center">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row md:gap-x-12 items-center">
          <div className="flex-1">
            <div className="text-gray-800 text-lg md:text-xl leading-relaxed">
              <FaQuoteLeft className="text-4xl text-[#00FF00] mb-4 mx-auto md:mx-0" />
              A lot of junk food is decaying our healthy soul and due to
              unhealthiness many people were feeling lonely in healthy cravings.
              Due to which the real person inside them is not getting enough
              potential to come out and show the world their real power.
              <br />
              <br />
              So, we started G-Diet as a mandatory craving partner for your
              health. You may raise your real power with proper Gangsta (G)-Diet
              and some sort of body training (exercise). Our another reason to
              start is offering pocket-friendly options with health and
              deliciousness in your diet.
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <div className="relative w-full max-w-[300px] md:max-w-[400px]">
              <img
                src={founder}
                alt="founder"
                className="w-full rounded-lg shadow-lg transform rotate-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
