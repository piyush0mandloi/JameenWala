import React from "react";

const PropertiesPreview = ({ item }) => {

  return (
    <div
      className="bg-[#1a1d22] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
    >

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <h3 className="text-lg font-semibold mb-1">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm mb-2">
          📍 {item.location}
        </p>

        <p className="text-[#e24ae0] font-bold text-lg mb-3">
          {item.price}
        </p>

        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>🛏 {item.beds}</span>
          <span>🛁 {item.baths}</span>
          <span>📐 {item.area} sqft</span>
        </div>

        <button className="w-full bg-[#e24ae0] hover:bg-[#a430a2] transition-all duration-300 py-2 rounded-lg">
          View Details
        </button>

      </div>
    </div>
  );
};

export default PropertiesPreview;