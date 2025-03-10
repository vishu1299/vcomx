"use client";

import React, { useState } from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const customersCommentsData = [
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-1.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-2.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-3.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-4.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-5.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-6.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-1.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-2.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-3.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-4.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-5.png",
  },
  {
    title: "Maria Nyla",
    profe: "student",
    image: "/assets/Images/customersComments/customer-img-6.png",
  },
];
const CustomersComments = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 5;

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? customersCommentsData.length - visibleItems
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleItems >= customersCommentsData.length
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div>
      <div className=" text-center  lg:mt-[30px] mt-[10px]">
        <p className=" font-Oswald font-semibold text-[44px]  text-[#121212]">
          Customers Comments
        </p>
        <div className="relative  text-lg font-medium leading-relaxed">
          <img
            src="/assets/Images/customersComments/CustomersComments-1.svg"
            alt="Quote Open"
            className="absolute -top-2 left-0 w-8 md:w-12"
          />
          <div className=" font-Oswald  font-medium  text-[#727272] text-[16px]">
            <p>
              Great Service and Good Quality Product and it helped my wife
              osteoarthritis on her knees and hips and myself for arthritis. We
              have asked our
            </p>
            <p>
              doctor before we used it he said it is fine because we are on
              other medications. We have recommended to our friends and family
              in United States
            </p>
            <p>
              {" "}
              they have order and have been using Rumatis Cream. Thank You very
              much. Whoever has invented this cream. Kind Regards.
            </p>
          </div>
          <img
            src="/assets/Images/customersComments/customersComments-icon.svg"
            alt="Quote Close"
            className="absolute   top-0 right-0 w-8 md:w-12"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-4 py-6 mt-4">
        <button
          onClick={handlePrev}
          className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <MdKeyboardArrowLeft className="text-[#454545] text-2xl" />
        </button>

        <div className="  flex space-x-4">
          {customersCommentsData
            .slice(startIndex, startIndex + visibleItems)
            .map((item, index) => {
              const middleIndex = Math.floor(visibleItems / 2);
              return (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-16 h-16 rounded-full object-cover border-4  ${
                      index === middleIndex
                        ? "  border-dashed w-20 h-20 border-[#FF6F3C] "
                        : ""
                    }`}
                  />
                  {index === middleIndex && (
                    <div className="text-center">
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.profe}</p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <button
          onClick={handleNext}
          className="bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <MdKeyboardArrowRight className="text-[#454545] text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default CustomersComments;
