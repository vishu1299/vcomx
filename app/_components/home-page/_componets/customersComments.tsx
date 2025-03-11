"use client";

import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const customersCommentsData = [
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-1.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-2.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-3.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-4.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-5.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-6.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-1.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-2.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-3.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-4.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-5.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/src/Assets/Images/customersComments/customer-img-6.png",
  },
];

const CustomersComments = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(3);
      } else if (window.innerWidth < 768) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    };

    // Initial call and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? customersCommentsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= customersCommentsData.length ? 0 : prevIndex + 1
    );
  };

  // Get current visible items with proper wrapping
  const getCurrentItems = () => {
    const items = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (startIndex + i) % customersCommentsData.length;
      items.push({
        ...customersCommentsData[index],
        index,
      });
    }
    return items;
  };

  const currentItems = getCurrentItems();
  const middleIndex = Math.floor(visibleItems / 2);

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Testimonial content */}
      <div className="text-center flex flex-col justify-center items-center min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] w-full">
        <h2 className="font-Oswald font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#121212] mb-4 md:mb-8">
          Customers Comments
        </h2>

        <div className="relative px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
          {/* Quote opening icon */}
          <img
            src="/src/Assets/Images/customersComments/CustomersComments-1.svg"
            alt="Quote Open"
            className="absolute -top-2 left-0 w-6 sm:w-8 md:w-10 lg:w-12"
          />

          {/* Testimonial text */}
          <div className="font-Oswald font-medium text-[#727272] text-sm sm:text-base md:text-[16px] leading-relaxed">
            <p className="mb-2">
              Great Service and Good Quality Product and it helped my wife
              osteoarthritis on her knees and hips and myself for arthritis. We
              have asked our
            </p>
            <p className="mb-2">
              doctor before we used it he said it is fine because we are on
              other medications. We have recommended to our friends and family
              in United States
            </p>
            <p>
              they have order and have been using Rumatis Cream. Thank You very
              much. Whoever has invented this cream. Kind Regards.
            </p>
          </div>

          {/* Quote closing icon */}
          <img
            src="/src/Assets/Images/customersComments/customersComments-icon.svg"
            alt="Quote Close"
            className="absolute top-0 right-0 w-6 sm:w-8 md:w-10 lg:w-12"
          />
        </div>
      </div>

      {/* Customer images carousel */}
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 py-4 mt-2 md:mt-4">
        {/* Previous button */}
        <button
          onClick={handlePrev}
          aria-label="Previous customer"
          className="bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <MdKeyboardArrowLeft className="text-[#454545] text-xl md:text-2xl" />
        </button>

        {/* Customer images */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          {currentItems.map((item, index) => (
            <div key={item.index} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.title}
                className={`
                  ${
                    index === middleIndex
                      ? "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-dashed border-[#FF6F3C]"
                      : "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-4 border-transparent"
                  }
                  rounded-full object-cover
                `}
              />
              {index === middleIndex && (
                <div className="text-center mt-2">
                  <p className="text-sm md:text-base lg:text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.profe}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          aria-label="Next customer"
          className="bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <MdKeyboardArrowRight className="text-[#454545] text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default CustomersComments;
