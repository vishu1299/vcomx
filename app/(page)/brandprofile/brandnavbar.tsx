"use client";
import React, { useState } from "react";
import BrandProductDetails from "./brandProductDetails";
import AboutStore from "./aboutStore";
import Upcomming from "./upcomming";
import ReviewUpcomming from "./reviewupcomming";

const BrandNavbar = () => {
  const [activeTab, setActiveTab] = useState("Product");
  return (
    <div className="border-t-2 border-[#E7E7E7] mt-6">
      <div className="w-full mt-4">
        <div className="flex lg:gap-2 gap-3 justify-between w-full lg:max-w-[400px] flex-wrap">
          {["Product", "About", "Reviews", "Upcoming"].map((tab, index) => (
            <div className="text-[#88888C] text-[18px] font-Oswald" key={index}>
              <p
                className={`cursor-pointer text-center  transition-all duration-300 ${
                  activeTab === tab
                    ? "border-b-2 text-[#FF6F3C] text-[19px] border-[#FF6F3C] font-semibold"
                    : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          {activeTab === "Product" && <BrandProductDetails />}
          {activeTab === "About" && <AboutStore />}
          {activeTab === "Upcoming" && <Upcomming />}
          {activeTab === "Reviews" && <ReviewUpcomming />}
        </div>
      </div>
    </div>
  );
};

export default BrandNavbar;
