import Link from "next/link";
import React from "react";

import { SlLocationPin } from "react-icons/sl";
import { Socialicons } from "@/data/Header";
import { FaEnvelope } from "react-icons/fa";
import Headermenu from "./Headermenu";
import Headerlist from "./headerlist";

const Header = () => {
  return (
    <>
      <div className="">
        {/* Top orange bar with contact info and social icons */}
        <div className="w-full bg-orange px-4 sm:px-5 md:px-[20px] lg:px-[20px]">
          <div className="w-full md:w-[95%] lg:w-[85%] mx-auto my-0 flex flex-col sm:flex-row justify-between items-center lg:h-[44px] h-fit py-2 lg:py-0 gap-2 sm:gap-[5px]">
            {/* Contact information */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center w-full sm:w-auto lg:gap-[30px] gap-2 sm:gap-[5px]">
              <p className="flex justify-start items-center gap-[10px] font-Oswald text-white text-sm md:text-base">
                {" "}
                <span>
                  <FaEnvelope />
                </span>{" "}
                info@xcrino.com
              </p>
              <p className="flex justify-start items-center gap-[10px] font-Oswald text-white text-sm md:text-base">
                {" "}
                <span>
                  <SlLocationPin />
                </span>{" "}
                E 516 Goma Plaza sector 7 Dwarka, New Delhi
              </p>
            </div>

            {/* Social icons */}
            <div className="hidden sm:flex justify-center sm:justify-end items-center gap-[20px]">
              {Socialicons.map((item, index) => {
                return (
                  <span key={index} className="text-[#fff]">
                    <Link href="#"> {item.social} </Link>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Header menu section */}
        <div className="w-full bg-Bggray h-[60px] sm:h-[70px] md:h-[80px] lg:h-[96px] px-4 sm:px-5 md:px-[20px] lg:px-[20px]">
          <div
            className="w-full md:w-[95%] lg:w-[85%] mx-auto my-0 flex justify-between items-center"
            style={{ height: "inherit" }}
          >
            <Headermenu />
          </div>
        </div>

        {/* Navigation section */}
        <div className="w-full bg-[#142535]">
          <div
            className="w-full md:w-[95%] lg:w-[85%] mx-auto my-0 flex justify-between items-center px-4 sm:px-5 md:px-0"
            style={{ height: "inherit" }}
          >
            <Headerlist />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
