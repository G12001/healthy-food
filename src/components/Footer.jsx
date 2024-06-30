import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:gap-x-1">
          {/* Company Info */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">G-DIET</h2>
            <p className="text-gray-400">
              Fuel your workouts with our healthy and delicious diet options.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#products" className="hover:underline">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: info@gdiet.com</p>
            <p className="text-gray-400 mb-2">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} G-DIET. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
