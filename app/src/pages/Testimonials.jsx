import React, { useState } from "react";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // show only 3 testimonials at a time
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  // next testimonials
  const handleNext = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // previous testimonials
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <section className="bg-[#0d0f13] text-white px-6 md:px-12 py-20">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Read the success stories. Discover how JameenWala helped families
            and investors find their dream properties with confidence and ease.
          </p>
        </div>

      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1d22] border border-[#2a2f37] rounded-2xl p-6 hover:scale-[1.02] transition-all duration-500 ease-in-out"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-xl mb-5">
              {"⭐".repeat(item.rating)}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            {/* Review */}
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {item.review}
            </p>

            {/* Extra Details */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#242830] text-xs px-3 py-1 rounded-full">
                {item.propertyType}
              </span>

              <span className="bg-[#242830] text-xs px-3 py-1 rounded-full">
                {item.purchaseType}
              </span>

              <span className="bg-[#242830] text-xs px-3 py-1 rounded-full">
                {item.date}
              </span>
            </div>

            {/* User */}
            <div className="flex items-center gap-4">
              
              {/* Profile */}
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              {/* Info */}
              <div>
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between mt-14 border-t border-[#2a2f37] pt-6">
        
        {/* Count */}
        <p className="text-gray-400">
          {String(currentIndex + 1).padStart(2, "0")}
          <span className="text-white">
            /{String(testimonials.length).padStart(2, "0")}
          </span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          
          {/* Previous */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full transition-all duration-300 ${
              currentIndex === 0
                ? "bg-[#111] text-gray-600 cursor-not-allowed"
                : "bg-[#1a1d22] hover:bg-[#242830]"
            }`}
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= testimonials.length}
            className={`w-10 h-10 rounded-full transition-all duration-300 ${
              currentIndex + 3 >= testimonials.length
                ? "bg-[#111] text-gray-600 cursor-not-allowed"
                : "bg-[#e24ae0] hover:bg-[#a430a2]"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;