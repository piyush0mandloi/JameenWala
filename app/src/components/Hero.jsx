import React from "react";
import { useNavigate } from "react-router-dom";
import house from "../assets/SmartBuilding.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Content */}
      <div className="w-full md:w-1/2 bg-[#0e1013] p-10 flex flex-col justify-center space-y-8">
        
        {/* Heading */}
        <div className="pt-10 pl-10 text-white">
          <h1 className="text-4xl font-bold mb-2">
            Discover Your Dream
          </h1>

          <h1 className="text-4xl font-bold mb-4">
            Property With Jameen
            <span className="text-[#e24ae0]">Wala</span>
          </h1>

          <p className="text-gray-400 max-w-md">
            Explore the best properties with JameenWala. Buy, rent, or invest
            with confidence.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6 pl-10 text-white">
          <button
            className="px-5 py-2 rounded-lg bg-black border border-gray-700 hover:bg-[#1a1d22] transition-all duration-300"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

          <button
            className="px-5 py-2 rounded-lg bg-[#e24ae0] hover:bg-[#a430a2] transition-all duration-300"
            onClick={() => navigate("/properties")}
          >
            Browse Properties
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-4 flex-wrap pt-6 pl-10">
          <div className="bg-[#1a1d22] px-6 py-4 rounded-lg text-center flex-1 min-w-[120px]">
            <h2 className="text-3xl font-bold text-white">200+</h2>
            <p className="text-gray-400 text-sm">Happy Customers</p>
          </div>

          <div className="bg-[#1a1d22] px-6 py-4 rounded-lg text-center flex-1 min-w-[120px]">
            <h2 className="text-3xl font-bold text-white">10K+</h2>
            <p className="text-gray-400 text-sm">Properties</p>
          </div>

          <div className="bg-[#1a1d22] px-6 py-4 rounded-lg text-center flex-1 min-w-[120px]">
            <h2 className="text-3xl font-bold text-white">16+</h2>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 bg-[#1a1d22] flex items-center justify-center">
        <img
          src={house}
          alt="Smart Building"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;