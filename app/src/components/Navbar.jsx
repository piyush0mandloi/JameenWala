import React from "react";
import logo from "../assets/JameenWala2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#000000] text-white font-mono">
      {/* Top banner */}
      <div className="flex justify-center items-center px-6 py-2 text-sm bg-[#212429]">
        <p className="text-gray-300 pr-1">
          Discover Your Dream Property with JameenWala
        </p>
        <a href="#" className="text-blue-400 hover:underline">
          Learn More
        </a>
      </div>

      {/* Main navbar */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="JameenWala Logo"
            className="h-11 w-auto object-contain brightness-110"
          />
        </div>

        {/* Menu */}
        <div className="flex gap-8 text-gray-300 font-medium">
          <Link to="/" className="px-3 py-2 rounded-lg bg-[#212429] text-white cursor-pointer transition-all duration-300 hover:bg-[#41464e]">
            Home
          </Link>{" "}
          <Link to="/about" className="px-3 py-2 rounded-lg bg-[#212429] text-white cursor-pointer transition-all duration-300 hover:bg-[#41464e]">About Us</Link>
          <Link to="/properties" className="px-3 py-2 rounded-lg bg-[#212429] text-white cursor-pointer transition-all duration-300 hover:bg-[#41464e]">
            Properties
          </Link>
          <Link to="/services" className="px-3 py-2 rounded-lg bg-[#212429] text-white cursor-pointer transition-all duration-300 hover:bg-[#41464e]">Services</Link>
        </div>

        <div className="text-gray-300 font-medium px-4 py-2 rounded-lg bg-[#212429] text-white cursor-pointer transition-all duration-300 hover:bg-[#070707]">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
