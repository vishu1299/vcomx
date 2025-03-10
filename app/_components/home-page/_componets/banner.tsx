
"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FiEye } from "react-icons/fi";
import Image from "next/image";

const bannerData = [
  { imagebanner: "/assets/Images/banner.png" },
  { imagebanner: "/assets/Images/banner.png" },
  { imagebanner: "/assets/Images/banner.png" },
  { imagebanner: "/assets/Images/banner.png" },
];

const carouselData = [
  {
    id: 1,
    liveText: "Live",
    watching: "3.2K Watching",
    user: "john fashion",
    buttonText: "Join Now",
  },
  {
    id: 2,
    liveText: "Live",
    watching: "1.8K Watching",
    user: "alex trends",
    buttonText: "View Now",
  },
  {
    id: 3,
    liveText: "Live",
    watching: "1.8K Watching",
    user: "alex trends",
    buttonText: "View Now",
  },
  {
    id: 4,
    liveText: "Live",
    watching: "1.8K Watching",
    user: "alex trends",
    buttonText: "View Now",
  },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-full mx-auto">
      <div className=" md:block hidden">
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="relative   overflow-visible carouselfix"
        >
          <CarouselContent
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {carouselData.map((item, index) => (
              <CarouselItem
                key={item.id}
                className={`w-full transition-transform duration-500 ease-in-out ${
                  activeSlide === index ? "scale-100" : "scale-95"
                }`}
              >
                <div className="relative w-full rounded-2xl h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center flex flex-col justify-end text-white ">
                  <img
                    src={bannerData[index].imagebanner}
                    alt="banner"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute top-2 left-4 flex items-center gap-2 text-xs md:text-sm">
                    <span className="bg-[#DB4444] text-white py-1 px-2 md:px-3 rounded-full">
                      {item.liveText}
                    </span>
                    <p className="flex items-center gap-1">
                      <FiEye /> {item.watching}
                    </p>
                  </div>
                  <div className="p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl relative z-10">
                    <p className="text-lg md:text-xl font-semibold">
                      New Fashion Collection Launch
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <Image
                        src="/src/Assets/Images/lady.png"
                        alt="profile"
                        width={35}
                        height={35}
                        className="rounded-full"
                      />
                      <p className="text-sm md:text-base font-light">
                        {item.user}
                      </p>
                      <button className="bg-[#DB4444] text-white py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm">
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 flex justify-between items-center">
            <CarouselPrevious
              onClick={() =>
                setActiveSlide(
                  (activeSlide - 1 + carouselData.length) % carouselData.length
                )
              }
            />
            <CarouselNext
              onClick={() =>
                setActiveSlide((activeSlide + 1) % carouselData.length)
              }
            />
          </div>
        </Carousel>
        <div className="flex justify-center mt-4">
          {carouselData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 md:h-3 md:w-3 mx-1 rounded-full cursor-pointer transition-all ${
                activeSlide === index ? "bg-[#FF6F3C]" : "bg-gray-400"
              }`}
              onClick={() => setActiveSlide(index)}
            ></div>
          ))}
        </div>

   
      </div>
   <div className="md:hidden">
   <Carousel opts={{ loop: true, align: "start" }} className="relative   ">
        <CarouselContent
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {carouselData.map((item, index) => (
            <CarouselItem
              key={item.id}
              className={`w-full transition-transform duration-500 ease-in-out ${
                activeSlide === index ? "scale-100" : "scale-95"
              }`}
            >
              <div className="relative w-full rounded-2xl h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center flex flex-col justify-end text-white ">
                <img
                  src={bannerData[index].imagebanner}
                  alt="banner"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-2 left-4 flex items-center gap-2 text-xs md:text-sm">
                  <span className="bg-[#DB4444] text-white py-1 px-2 md:px-3 rounded-full">
                    {item.liveText}
                  </span>
                  <p className="flex items-center gap-1">
                    <FiEye /> {item.watching}
                  </p>
                </div>
                <div className="p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl relative z-10">
                  <p className="text-lg md:text-xl font-semibold">
                    New Fashion Collection Launch
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <Image
                      src="/src/Assets/Images/lady.png"
                      alt="profile"
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <p className="text-sm md:text-base font-light">
                      {item.user}
                    </p>
                    <button className="bg-[#DB4444] text-white py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 flex justify-between items-center">
          <CarouselPrevious
            onClick={() =>
              setActiveSlide(
                (activeSlide - 1 + carouselData.length) % carouselData.length
              )
            }
          />
          <CarouselNext
            onClick={() =>
              setActiveSlide((activeSlide + 1) % carouselData.length)
            }
          />
        </div>
      </Carousel>
      <div className="flex justify-center mt-4">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 md:h-3 md:w-3 mx-1 rounded-full cursor-pointer transition-all ${
              activeSlide === index ? "bg-[#FF6F3C]" : "bg-gray-400"
            }`}
            onClick={() => setActiveSlide(index)}
          ></div>
        ))}
      </div>
   </div>
    </div>
  );
};

export default Banner;
