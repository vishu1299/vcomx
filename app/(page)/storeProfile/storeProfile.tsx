import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

import Storenavebar from "./storenavbar";

const ProfilePage = () => {
  return (
    <div className=" py-6 ">
      <div className="relative w-full h-48 md:h-64 lg:h-72 bg-blue-100 rounded-lg overflow-hidden ">
        <img
          src="/assets/Images/profilestore/bannerForProfile.jpeg"
          alt="Skincare products banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start px-4  lg:-mt-6">
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 overflow-hidden bg-gray-200 border-red-500">
            <img
              src="/assets/Images/profilestore/pro-img-1.png"
              alt="Profile avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <span className="px-3 py-1 text-xs md:text-sm text-white bg-red-500 rounded-full font-medium">
              Live
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-4 md:mt-8 md:pl-4">
          <div>
            <div className="flex items-center">
              <h1 className="font-Oswald text-[#1F1D2B] text-xl md:text-2xl font-semibold">
                Lorem
              </h1>
              <span className="ml-2 text-orange-500">
                <img src="/assets/Images/profilestore/verify.png" alt="" className="w-5 h-5 md:w-6 md:h-6" />
              </span>
            </div>
            <p className="font-Oswald text-[#1F1D2B] text-sm md:text-lg">
              4.4M <span className="text-[#88888C]">followers</span>
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4 md:mt-0">
            <button className="px-4 py-2 md:px-6 md:py-2 border bg-[#FFF5F1] border-[#FF6F3C] text-[#FF6F3C] rounded-full font-bold font-Oswald">
              Following
            </button>
            <button className="px-4 py-2 md:px-6 md:py-2 bg-white border border-[#CCCCCC] text-[#1F1D2B] text-sm md:text-md rounded-full font-medium">
              Chat
            </button>
            <button className="p-2 rounded-full">
              <BsThreeDotsVertical className="text-[#1F1D2B] text-lg" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0  ">
        <div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-2 items-center">
            <FaFacebookF className="text-[#FF6F3C] text-lg" />
            <p>Lorem</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaTwitter className="text-[#FF6F3C] text-lg" />
            <p>Lorem</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaInstagram className="text-[#FF6F3C] text-lg" />
            <p>Lorem</p>
          </div>
        </div>
      </div>
    <div>
     <Storenavebar/>
    </div>
    
    </div>
  );
};

export default ProfilePage;