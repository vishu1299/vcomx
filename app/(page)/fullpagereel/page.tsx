"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  BookmarkMinus,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import productreel from "@/public/Assets/Images/productreel.png";
import lady from "@/public/Assets/Images/lady.png";
import { FaPlay } from "react-icons/fa";

const Fullpagereel = () => {
  const [selectedVolume, setSelectedVolume] = useState("100ml");
  const [activeTab, setActiveTab] = useState("Product Details");

  const galleryImages = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  return (
    <div className="flex justify-center items-center w-full bg-gray-50 p-2 sm:p-4 md:p-6 min-h-screen">
      <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-6xl w-full bg-black rounded-xl shadow-lg overflow-hidden">
        {/* Left Side - Product Video/Image */}
        <div className="w-full lg:w-2/5 relative">
          <div
            style={{ backgroundImage: `url(${productreel.src})` }}
            className="h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative rounded-lg lg:rounded-none lg:rounded-l-lg"
          >
            {/* Top Overlay */}
            <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 z-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center bg-black/30 backdrop-blur-sm p-1.5 sm:p-2 rounded-full space-x-1 sm:space-x-2">
                  <Image
                    src={lady}
                    alt="Roxana Michelle"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="hidden sm:block">
                    <p className="text-xs sm:text-sm text-white font-semibold">
                      Roxana Michelle
                    </p>
                    <p className="text-xs text-white/80">100 Followers</p>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                    Follow
                  </button>
                </div>
                <button className="text-orange-500 bg-black/30 backdrop-blur-sm p-2 rounded-full hover:bg-black/40 transition-colors">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/30 hover:bg-white/40 transition-all backdrop-blur-sm p-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full text-white flex justify-center items-center">
                <FaPlay size={20} className="mx-auto" />
              </button>
            </div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Hair cleaner
              </h2>
              <p className="text-xs sm:text-sm line-clamp-2 mt-1 text-white/90">
                Elevate your style with our high-quality shoes! #ShoeStyle
                #ComfortFirst #Cleaner #Accessories
              </p>
              <div className="flex items-center gap-2 mt-2">
                <ShoppingBag className="w-4 h-4" strokeWidth={2} />
                <p className="text-xs sm:text-sm">2k+ sold</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chevron Navigation - Centered between sections */}
        <div className="hidden lg:flex flex-col space-y-3 justify-center px-2">
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors w-8 h-8 rounded-full flex justify-center items-center cursor-pointer focus:outline-none">
            <ChevronUp className="text-white w-5 h-5" />
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors w-8 h-8 rounded-full flex justify-center items-center cursor-pointer focus:outline-none">
            <ChevronDown className="text-white w-5 h-5" />
          </button>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full lg:w-2/4 bg-white p-4 sm:p-5 md:p-6 rounded-b-lg lg:rounded-none lg:rounded-r-lg">
          {/* Tabs */}
          <div className="flex justify-between border-b border-gray-200">
            <button
              onClick={() => setActiveTab("Product Details")}
              className={`pb-2 cursor-pointer text-sm sm:text-base transition-colors ${
                activeTab === "Product Details"
                  ? "border-b-2 border-orange-500 font-semibold text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Product Details
            </button>
            <button
              onClick={() => setActiveTab("Reviews")}
              className={`pb-2 cursor-pointer text-sm sm:text-base transition-colors ${
                activeTab === "Reviews"
                  ? "border-b-2 border-orange-500 font-semibold text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Reviews (12,078)
            </button>
          </div>

          {/* Product Details Tab Content */}
          {activeTab === "Product Details" && (
            <div className="mt-4">
              {/* Product Title and Price */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                    Premium Watch Collection
                  </h1>
                  <p className="text-orange-500 text-xl sm:text-2xl font-bold mt-1">
                    $299.99
                  </p>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <BookmarkMinus className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Product Description */}
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Elegant timepiece featuring premium materials, water resistance,
                and sophisticated design. Perfect for both casual and formal
                occasions.
              </p>

              {/* Gallery */}
              <div className="my-5">
                <h3 className="text-sm sm:text-base font-semibold mb-3">
                  Gallery
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg"
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Volume Selection */}
              <div className="mb-5">
                <h3 className="text-sm sm:text-base font-semibold mb-3">
                  Volume
                </h3>
                <div className="flex space-x-3">
                  {["50ml", "100ml", "70ml"].map((volume) => (
                    <button
                      key={volume}
                      onClick={() => setSelectedVolume(volume)}
                      className={`
                        px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-colors
                        ${
                          selectedVolume === volume
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }
                      `}
                    >
                      {volume}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mt-6">
                <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold">
                  BUY NOW
                </button>
                <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold">
                  ADD TO CART
                </button>
                <button className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm sm:text-base transition-colors">
                  Share
                </button>
              </div>
            </div>
          )}

          {/* Reviews Tab Content */}
          {activeTab === "Reviews" && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-bold">
                  Customer Reviews
                </h2>
                <span className="text-sm text-gray-500">12,078 reviews</span>
              </div>

              <div className="space-y-4">
                {/* Review 1 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        Sarah K.
                      </h3>
                    </div>
                    <div className="text-orange-500 text-xs sm:text-sm">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    Excellent watch, very happy with the purchase. The quality
                    is outstanding and it looks even better in person.
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Posted 2 days ago
                  </p>
                </div>

                {/* Review 2 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        Michael T.
                      </h3>
                    </div>
                    <div className="text-orange-500 text-xs sm:text-sm">
                      ★★★★☆
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    Looks great and works well for formal occasions. I would
                    have given 5 stars but the clasp feels a bit flimsy.
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Posted 1 week ago
                  </p>
                </div>

                {/* Load More Button */}
                <button className="w-full py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  Load more reviews
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fullpagereel;
