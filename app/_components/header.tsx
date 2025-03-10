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
        <div className="w-full  bg-orange px-[20px] lg:px-[20px] ">
          <div className="lg:w-[85%] mx-auto  my-0 flex justify-between items-center flex-col lg:h-[44px] h-fit lg:flex-row gap-[5px] pb-[10px]">
            <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-[30px] gap-[5px]">
              <p className="flex justify-start items-center gap-[10px] font-Oswald text-white">
                {" "}
                <span>
                  <FaEnvelope />
                </span>{" "}
                hi.avitex@gmail.com
              </p>
              <p className="flex justify-start items-center gap-[10px] font-Oswald text-white">
                {" "}
                <span>
                  <SlLocationPin />
                </span>{" "}
                4140 Parker Rd. Allentown, NY
              </p>
            </div>

            <div className="lg:flex justify-end items-center gap-[20px] hidden">
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

        <div className="w-full bg-Bggray lg:h-[96px] h-[60px] lg:px-[20px] px-[20px]">
          <div
            className="lg:w-[85%] mx-auto my-0 flex justify-between items-center"
            style={{ height: "inherit" }}
          >
            <Headermenu />
          </div>
        </div>

        <div className="w-full bg-[#142535]">
          <div
            className="lg:w-[85%] mx-auto my-0 flex justify-between items-center"
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
