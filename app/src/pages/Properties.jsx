import React, { useState } from "react";
import PropertiesPreview from "../components/PropertiesPreview";
import properties from "../data/properties";

const Properties = () => {

  const [showAll, setShowAll] = useState(false);

  // show only 5 initially
  const visibleProperties = showAll
    ? properties
    : properties.slice(0, 3);

  return (
    <div className="bg-[#0d0f13] text-white min-h-screen px-6 md:px-12 py-12">

      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Featured Properties
        </h2>

        <p className="text-gray-400 text-sm md:text-base">
          Explore our handpicked selection of featured properties.
          Each listing offers a glimpse into exceptional homes and
          investments available through Estatein.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {visibleProperties.map((item) => (
          <PropertiesPreview
            key={item.id}
            item={item}
          />
        ))}

      </div>

      {/* Button */}
      {!showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#e24ae0] hover:bg-[#a430a2] transition-all duration-300 px-6 py-3 rounded-lg"
          >
            Show More
          </button>
        </div>
      )}

    </div>
  );
};

export default Properties;