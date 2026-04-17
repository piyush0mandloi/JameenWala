import React from "react";
import { ArrowUpRight } from "lucide-react"; // install: npm i lucide-react
import house from "../assets/SmartBuilding.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="font-mono w-full min-h-screen bg-[#0d0f13] text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 bg-[#0e1013] p-10 flex flex-col justify-center space-y-8">
          {/* Heading */}
          <div className="pt-10 pl-10">
            <h1 className="text-4xl font-bold mb-2">Discover Your Dream</h1>
            <h1 className="text-4xl font-bold mb-4">
              Property With Jameen<span className="text-[#e24ae0]">Wala</span>
            </h1>

            <p className="text-gray-400 max-w-md">
              Explore the best properties with JameenWala. Buy, rent, or invest
              with confidence.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6 pl-10">
            {/* Black Button */}
            <button className="px-5 py-2 rounded-lg bg-black border border-gray-700 hover:bg-[#1a1d22] transition-all duration-300" onClick={()=> navigate('/about')}>
              Learn More
            </button>

            {/* Purple Button */}
            <button className="px-5 py-2 rounded-lg bg-[#e24ae0] hover:bg-[#a430a2] transition-all duration-300" onClick={()=> navigate("/properties")}>
              Browse Properties
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-4 flex-wrap pt-6 pl-10">
            {/* Box 1 */}
            <div className="bg-[#1a1d22] px-6 py-4 rounded-lg text-center flex-1 min-w-[120px]">
              <h2 className="text-3xl font-bold">200+</h2>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#1a1d22] px-6 py-4 rounded-lg text-center flex-1 min-w-[120px]">
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-400 text-sm">Properties</p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#1a1d22] px-6 py-4 rounded-lg text-center flex-1 min-w-[120px]">
              <h2 className="text-3xl font-bold">16+</h2>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-[#1a1d22] flex items-center justify-center">
          <img src={house} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom 4 Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {[
  { text: "Find Your Dream House", path: "/properties" },
  { text: "Unlock Property Value", path: "/services" },
  { text: "Effortless Property Management", path: "/services" },
  { text: "Smart Investment, Informed Decisions", path: "/about" }
].map((item, index) => (
          <div
            key={index}
            className="relative bg-[#1a1d22] rounded-xl p-6 flex flex-col items-center justify-center hover:bg-[#242830] transition-all duration-300 cursor-pointer"
          >
            {/* Arrow Top Right */}
            <ArrowUpRight
              className="absolute top-3 right-3 text-gray-400"
              size={25} onClick={()=> navigate(item.path)}
            />

            {/* Icon (placeholder circle) */}
            <div className="w-10 h-10 bg-gray-600 rounded-full mb-3"></div>

            {/* Text */}
            <p className="text-gray-200">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
