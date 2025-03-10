"use client"
import React, { useState } from "react";
import Products from "./products";
import VideosComp from "./videosCom";
import PostStores from "./post";



const Storenavebar = () => {
  const [activeTab, setActiveTab] = useState("Product");
  return (
<div  className=" border-t-2 border-[#E7E7E7] mt-6">
<div className=" w-full mt-4 ">
      <div className="flex lg:gap-4 gap-3 justify-between  w-full lg:max-w-[500px]  ">
        {["Product", "Videos", "Posts"].map((tab, index) => (
          <div className=" text-[#88888C] font-medium text-[18px] font-Oswald " key={index}>
            <p
              className={` cursor-pointer text-center  lg:ml-[-14px] transition-all duration-300 ${
                activeTab === tab 
                  ? "border-b-2 text-[#0C0C0A] text-[18px] border-[#FF8C42] font-semibold"
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
        {activeTab === "Product" && <Products/>}
        {activeTab==="Videos" && <VideosComp/>}
        {activeTab==="Posts" && <PostStores/> }
       
        </div>
    </div>
</div>
  );
};

export default Storenavebar;


