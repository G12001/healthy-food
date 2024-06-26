import { useState } from "react";
import brandLogo from "../assets/brand-logo.jpeg";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="h-[68px] w-full flex justify-center items-center fixed top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <a href="/" className="flex items-center">
          <img
            src={brandLogo}
            className="h-12 w-12 rounded-md"
            alt="brand logo"
          />
          <span className="ml-2 text-xl font-bold">Your Brand</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-grow justify-end items-center gap-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="block md:hidden" onClick={() => setToggle(!toggle)}>
          <IoMenu className="h-8 w-8 text-gray-800" />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {toggle && <Sidebar setToggle={setToggle} />}
    </header>
  );
};

// NavLink Component for Menu Links
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="font-semibold text-gray-800 hover:text-[#00FF00] transition-colors duration-300"
  >
    {children}
  </a>
);

export default Header;
