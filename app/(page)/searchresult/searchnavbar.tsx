"use client";
import React, { useState } from "react";
import AllSearchResult from "./allsearchResult";

const SearchNavbar = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="mt-6 ">
      <div className="w-full mt-4">
        <div className="flex flex-wrap  gap-6 sm:gap-12 w-full">
          {["All", "Stores", "Videos"].map((tab, index) => (
            <div
              className="text-[#88888C] text-base sm:text-lg font-Oswald"
              key={index}
            >
              <p
                className={`cursor-pointer text-center transition-all duration-300 ${
                  activeTab === tab
                    ? "border-b-2 text-[#FF6F3C] sm:text-[19px] border-[#FF6F3C] font-semibold"
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
          {activeTab === "All" && <AllSearchResult />}
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
