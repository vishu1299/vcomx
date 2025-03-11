"use client";
import React, { useState } from "react";
// import Image from "next/image";
import {
  BookmarkMinus,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Search,
  X,
  Ellipsis,
  VolumeX,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const Fullpagereel = () => {
  const [selectedVolume, setSelectedVolume] = useState("100ml");
  const [activeTab, setActiveTab] = useState("Product Details");

  const galleryImages = [
    "/src/Assets/Images/products/product-1.jpeg",
    "/src/Assets/Images/products/product-1.jpeg",
    "/src/Assets/Images/products/product-1.jpeg",
    "/src/Assets/Images/products/product-1.jpeg",
  ];

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 p-3 sm:p-5 md:p-8 min-h-screen">
      <div className="flex flex-col lg:flex-row items-stretch justify-between w-full max-w-7xl bg-black shadow-xl overflow-hidden">
        <X className="text-white mx-auto w-5 h-5 ml-3 mt-3 " />
        {/* Left Side - Product Video/Image - UPDATED for equal width */}
        <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto bg-black">
          <div
            style={{
              backgroundImage: `url(${"/src/Assets/Images/productreel.png"})`,
            }}
            className="h-full w-[400px] bg-cover bg-center relative mx-auto"
          >
            {/* Top Overlay - Search */}
            <div className="absolute top-0 left-0 right-0 p-4 z-10">
              <div className="flex justify-between items-center">
                <div className="relative w-full max-w-xs mx-auto">
                  <Input
                    type="text"
                    placeholder="Search"
                    className="w-full placeholder:text-white pr-10 text-white border-2 rounded-full shadow-md bg-transparent border-white backdrop-blur-sm focus:outline-none"
                  />
                  <Search
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                    size={18}
                  />
                </div>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/30 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm p-4 h-14 w-14 sm:h-16 sm:w-16 rounded-full text-white flex justify-center items-center shadow-lg transform hover:scale-105">
                <FaPlay size={22} className="ml-1" />
              </button>
            </div>

            {/* Bottom Overlay - Product Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white bg-gradient-to-t from-black/80 to-transparent pt-16">
              <h2 className="text-2xl sm:text-3xl font-bold">Hair Cleaner</h2>
              <p className="text-sm sm:text-base line-clamp-2 mt-2 text-white/90">
                Elevate your style with our high-quality cleaner! #ShoeStyle
                #ComfortFirst #Cleaner #Accessories
              </p>
              <div className="flex items-center gap-3 mt-3">
                <ShoppingBag className="w-5 h-5" strokeWidth={2} />
                <p className="text-sm sm:text-base font-medium">2k+ sold</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chevron Navigation - Centered between sections (Desktop only) */}
        <div className="flex flex-col justify-between">
          <Ellipsis className="text-white mx-auto mt-2" />
          <div className="hidden lg:flex flex-col space-y-4 justify-center px-2 ">
            <button className=" rounded-full flex justify-center items-center cursor-pointer focus:outline-none shadow-md">
              <div className="bg-[#2e2e2e] rounded-full w-8 h-8 flex justify-center items-center">
                <ChevronUp className="text-white  w-6 h-6" />
              </div>
            </button>
            <button className=" rounded-full flex justify-center items-center cursor-pointer focus:outline-none shadow-md">
              <div className="bg-[#2e2e2e] rounded-full w-8 h-8 flex justify-center items-center">
                <ChevronDown className="text-white  w-6 h-6" />
              </div>
            </button>
          </div>
          <VolumeX className="text-white  mx-auto mb-2" />
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-6 h-full flex flex-col">
          <div className="w-full mx-auto p-4 rounded-xl border border-gray-200 shadow-sm bg-white mb-3">
            <div className="flex items-center gap-3">
              {/* Profile Image */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/src/Assets/Images/lady.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-bold text-base text-gray-900">
                      Natalya Undergrowth
                    </h2>
                    <p className="text-sm text-gray-700">New York</p>
                  </div>

                  {/* Follow Button */}
                  <button className="bg-orange hover:bg-orange transition-colors text-white text-sm font-medium px-5 py-1.5 rounded-full">
                    Follow
                  </button>
                </div>

                {/* Release Date */}
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">
                    <Clock size={12} className="mr-1 text-gray-500" />
                    <span>10 Feb 2022 release</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-2 text-xs text-gray-700">
                  <span>Tips & Tricks</span>
                  <span className="mx-1">•</span>
                  <span className="text-amber-500">#beauties</span>
                  <span className="text-amber-500">#fashion</span>
                </div>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex justify-between mb-4 border-b">
            <div
              onClick={() => setActiveTab("Product Details")}
              className={`mr-4 pb-2 cursor-pointer text-sm sm:text-base ${
                activeTab === "Product Details"
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Product Details
            </div>
            <div
              onClick={() => setActiveTab("Reviews")}
              className={`cursor-pointer text-sm sm:text-base ${
                activeTab === "Reviews"
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Reviews(12,078)
            </div>
          </div>

          {/* Tab Content Container with Consistent Height */}
          <div className="flex-grow flex flex-col">
            {activeTab === "Product Details" && (
              <>
                <div className="flex-grow flex flex-col">
                  {/* Product Title and Price */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                        Premium Watch Collection
                      </h1>
                      <p className="text-orange text-xl sm:text-2xl font-bold mt-1">
                        $299.99
                      </p>
                    </div>
                    <BookmarkMinus className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Product Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    Elegant timepiece featuring premium materials, water
                    resistance, and sophisticated design. Perfect for both
                    casual and formal occasions.
                  </p>

                  {/* Gallery */}
                  <div className="mb-4 mt-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      Gallery
                    </h3>
                    <div className="flex space-x-2">
                      {galleryImages.map((img, index) => (
                        <Image
                          key={index}
                          src={img}
                          alt={`Gallery ${index + 1}`}
                          width={70}
                          height={70}
                          className="rounded-lg w-14 h-14 sm:w-16 sm:h-16 object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Volume Selection */}
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      Volume
                    </h3>
                    <div className="flex space-x-2">
                      {["50ml", "100ml", "70ml"].map((volume) => (
                        <button
                          key={volume}
                          onClick={() => setSelectedVolume(volume)}
                          className={`
                        px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm
                        ${
                          selectedVolume === volume
                            ? "bg-black text-white"
                            : "bg-white text-black border border-gray-300"
                        }
                          `}
                        >
                          {volume}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Pushed to the bottom with flex-grow */}
                  <div className="mt-auto space-y-2">
                    <button className="w-full bg-orange text-white py-2 sm:py-3 rounded text-sm sm:text-base">
                      BUY NOW
                    </button>
                    <button className="w-full border border-orange text-orange py-2 sm:py-3 rounded text-sm sm:text-base">
                      ADD TO CART
                    </button>
                    <button className="w-full text-gray-600 py-2 text-sm sm:text-base">
                      Share
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Reviews Tab Content */}
            {activeTab === "Reviews" && (
              <div className="flex-grow flex flex-col">
                <h2 className="text-lg sm:text-xl font-bold mb-4">
                  Customer Reviews (12,078)
                </h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-sm sm:text-base">
                        Great Product!
                      </h3>
                      <div className="text-yellow-500 text-xs sm:text-base">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Excellent watch, very happy with the purchase.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-sm sm:text-base">
                        Nice Design
                      </h3>
                      <div className="text-yellow-500 text-xs sm:text-base">
                        ★★★★☆
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Looks great, works well for formal occasions.
                    </p>
                  </div>

                  {/* Adding more reviews to fill space */}
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-sm sm:text-base">
                        Worth Every Penny
                      </h3>
                      <div className="text-yellow-500 text-xs sm:text-base">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Quality is outstanding, very impressed with the attention
                      to detail.
                    </p>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-sm sm:text-base">
                        Reliable Product
                      </h3>
                      <div className="text-yellow-500 text-xs sm:text-base">
                        ★★★★☆
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Been using it for a month now, works perfectly as
                      described.
                    </p>
                  </div>
                </div>

                {/* Action Buttons for Reviews Tab - Maintains consistent layout */}
                <div className="mt-auto space-y-2 pt-4">
                  <button className="w-full bg-orange text-white py-2 sm:py-3 rounded text-sm sm:text-base">
                    WRITE A REVIEW
                  </button>
                  <button className="w-full border border-orange text-orange py-2 sm:py-3 rounded text-sm sm:text-base">
                    SEE ALL REVIEWS
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Chevron Navigation (only on mobile) */}
      <div className="lg:hidden fixed bottom-6 right-6 flex flex-col space-y-2">
        <button className="bg-orange-500 hover:bg-orange-600 transition-colors w-10 h-10 rounded-full flex justify-center items-center cursor-pointer focus:outline-none shadow-lg">
          <ChevronUp className="text-white w-5 h-5" />
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 transition-colors w-10 h-10 rounded-full flex justify-center items-center cursor-pointer focus:outline-none shadow-lg">
          <ChevronDown className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Fullpagereel;
