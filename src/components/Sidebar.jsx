import React from "react";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ setToggle }) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-full bg-gray-900 block md:hidden z-20">
      <button
        onClick={() => setToggle(false)}
        className="w-full flex justify-end items-center p-[18px]"
      >
        <RxCross1 className="h-8 w-8 text-white" />
      </button>
      <ul className="flex flex-col items-center justify-center h-[calc(100vh-52px)] gap-y-8">
        <li className="">
          <a href="#home" className="font-semibold text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#products" className="font-semibold text-white">
            Products
          </a>
        </li>
        <li>
          <a href="#about" className="font-semibold text-white">
            About
          </a>
        </li>
        <li>
          <a href="#testimonials" className="font-semibold text-white">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" className="font-semibold text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
