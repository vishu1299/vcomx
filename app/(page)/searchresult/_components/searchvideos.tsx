"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  BookmarkMinus,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Search,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { FaPlay } from "react-icons/fa";

const Fullpagereel = () => {
  const [selectedVolume, setSelectedVolume] = useState("100ml");
  const [activeTab, setActiveTab] = useState("Product Details");
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 p-3 sm:p-5 md:p-8 min-h-screen">
      <div className="flex flex-col lg:flex-row items-stretch justify-between w-full max-w-7xl bg-black rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side - Product Video/Image */}
        <div className="w-full lg:w-2/5 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto bg-black">
          <X />
          <div
            style={{
              backgroundImage: `url(${"/src/Assets/Images/productreel.png"})`,
            }}
            className="h-full w-full bg-cover bg-center relative ml-0 lg:ml-20"
          >
            {/* Top Overlay - Search */}
            <div className="absolute top-0 left-0 right-0 p-4 z-10">
              <div className="flex justify-between items-center">
                <div className="relative w-full max-w-xs mx-auto">
                  <Input
                    type="text"
                    placeholder="Search"
                    className="w-full pr-10 text-black border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md bg-white/90 backdrop-blur-sm"
                  />
                  <Search
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
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
        <div className="hidden lg:flex flex-col space-y-4 justify-center px-2">
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors w-10 h-10 rounded-full flex justify-center items-center cursor-pointer focus:outline-none shadow-md">
            <ChevronUp className="text-white w-6 h-6" />
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors w-10 h-10 rounded-full flex justify-center items-center cursor-pointer focus:outline-none shadow-md">
            <ChevronDown className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full lg:w-1/2 bg-black text-white p-5 sm:p-6 md:p-8 rounded-b-xl lg:rounded-none lg:rounded-r-xl">
          {/* Tabs */}
          <div className="flex justify-between border-b border-gray-700">
            <button
              onClick={() => setActiveTab("Product Details")}
              className={`pb-3 cursor-pointer text-base font-medium transition-colors ${
                activeTab === "Product Details"
                  ? "border-b-2 border-orange-500 font-semibold text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Product Details
            </button>
            <button
              onClick={() => setActiveTab("Reviews")}
              className={`pb-3 cursor-pointer text-base font-medium transition-colors ${
                activeTab === "Reviews"
                  ? "border-b-2 border-orange-500 font-semibold text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Reviews (12,078)
            </button>
          </div>

          {/* Product Details Tab Content */}
          {activeTab === "Product Details" && (
            <div className="mt-6 space-y-6">
              {/* Product Title and Price */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white">
                    Premium Hair Cleaner
                  </h1>
                  <p className="text-orange-500 text-2xl sm:text-3xl font-bold mt-2">
                    $299.99
                  </p>
                </div>
                <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <BookmarkMinus className="w-6 h-6" />
                </button>
              </div>

              {/* Product Description */}
              <div>
                <p className="text-sm sm:text-base text-gray-300">
                  Premium hair cleaner featuring high-quality ingredients,
                  gentle cleansing formula, and sophisticated packaging. Perfect
                  for both daily use and special treatments.
                </p>
              </div>

              {/* Gallery */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white">Gallery</h3>
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer ${
                        selectedImage === index ? "ring-2 ring-orange-500" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Volume Selection */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white">Volume</h3>
                <div className="flex flex-wrap gap-3">
                  {["50ml", "100ml", "150ml", "200ml"].map((volume) => (
                    <button
                      key={volume}
                      onClick={() => setSelectedVolume(volume)}
                      className={`
                        px-4 py-2 rounded-full text-sm transition-all duration-200
                        ${
                          selectedVolume === volume
                            ? "bg-orange-500 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }
                      `}
                    >
                      {volume}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white py-3 rounded-lg text-base font-semibold shadow-md">
                  BUY NOW
                </button>
                <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-gray-800 transition-colors py-3 rounded-lg text-base font-semibold">
                  ADD TO CART
                </button>
                <button className="w-full text-gray-300 hover:text-white py-2 text-sm transition-colors flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          )}

          {/* Reviews Tab Content */}
          {activeTab === "Reviews" && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">
                  Customer Reviews
                </h2>
                <div className="flex items-center gap-1 text-orange-500">
                  <span>★★★★★</span>
                  <span className="text-sm text-gray-400">(12,078)</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Review 1 */}
                <div className="border-b border-gray-700 pb-5">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-white">
                          Sarah K.
                        </h3>
                        <p className="text-gray-400 text-xs">Verified Buyer</p>
                      </div>
                    </div>
                    <div className="text-orange-500 text-sm">★★★★★</div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Excellent product, very happy with the purchase. The quality
                    is outstanding and it looks even better in person. My hair
                    feels refreshed after each use.
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-gray-500 text-xs">Posted 2 days ago</p>
                    <button className="text-xs text-gray-400 hover:text-gray-300">
                      Helpful (24)
                    </button>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="border-b border-gray-700 pb-5">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        M
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-white">
                          Michael T.
                        </h3>
                        <p className="text-gray-400 text-xs">Verified Buyer</p>
                      </div>
                    </div>
                    <div className="text-orange-500 text-sm">★★★★☆</div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Works great for my hair type. I would have given 5 stars but
                    the packaging feels a bit flimsy. The scent is pleasant and
                    not too strong.
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-gray-500 text-xs">Posted 1 week ago</p>
                    <button className="text-xs text-gray-400 hover:text-gray-300">
                      Helpful (12)
                    </button>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="pb-2">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        J
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-white">
                          Jennifer L.
                        </h3>
                        <p className="text-gray-400 text-xs">Verified Buyer</p>
                      </div>
                    </div>
                    <div className="text-orange-500 text-sm">★★★★★</div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Absolutely love this cleaner! My hair has never looked
                    better. Worth every penny and Ill definitely be purchasing
                    again.
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-gray-500 text-xs">Posted 2 weeks ago</p>
                    <button className="text-xs text-gray-400 hover:text-gray-300">
                      Helpful (37)
                    </button>
                  </div>
                </div>

                {/* Load More Button */}
                <button className="w-full py-3 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors mt-4">
                  Load more reviews
                </button>
              </div>
            </div>
          )}
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
