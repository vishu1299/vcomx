"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  BookmarkMinus,
  ChevronDown,
  ChevronUp,
  Heart,
  MessageCircle,
  Share2,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const ProductPageReplica = () => {
  const [selectedVolume, setSelectedVolume] = useState("100ml");
  const [activeTab, setActiveTab] = useState("Product Details");

  const galleryImages = [
    "/assets/Images/products/product-1.jpeg",
    "/assets/Images/products/product-1.jpeg",
    "/assets/Images/products/product-1.jpeg",
    "/assets/Images/products/product-1.jpeg",
  ];

  return (
    <div className="flex justify-center items-center w-full bg-[#f8f8f8] p-4 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto w-full">
        {/* Chevron Buttons - Hidden on mobile, shown on larger screens */}
        <div className="hidden lg:flex justify-center flex-col space-y-5 self-center">
          <div className="bg-orange w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <ChevronUp className="text-white" />
          </div>
          <div className="bg-orange w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <ChevronDown className="text-white" />
          </div>
        </div>

        {/* Left Side - Product Image */}
        <div className="w-full lg:w-1/2 relative">
          <div
            style={{ backgroundImage: `url("/src/Assets/Images/lady.png")` }}
            className="h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center rounded-xl relative"
          >
            {/* Top Overlay */}

            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center bg-[#eadcdb]/70 p-2 rounded-3xl space-x-2">
                  <Link href="/storeProfile">
                    <Image
                      src="/src/Assets/Images/lady.png"
                      alt="Roxana Michelle"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="hidden sm:block">
                      <p className="text-xs sm:text-sm text-white font-semibold">
                        Roxana Michelle
                      </p>
                      <p className="text-xs text-white font-medium">
                        100 Followers
                      </p>
                    </div>
                  </Link>
                  <button className="bg-orange text-white text-xs px-2 sm:px-4 py-1 sm:py-2 rounded-3xl">
                    Follow
                  </button>
                </div>
                <div className="text-orange bg-[#eadcdb]/70 p-2 sm:p-3 rounded-full">
                  <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/50 p-4 h-14 w-14 rounded-full text-white flex justify-center items-center">
                <FaPlay size={25} className="mx-auto" />
              </div>
            </div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="text-2xl sm:text-4xl font-bold">Hair cleaner</h2>
              <p className="text-xs sm:text-sm line-clamp-2 mt-1">
                Elevate your style with our high-quality shoes! #ShoeStyle
                #ComfortFirst #Cleaner #Accessories
              </p>
              <div className="flex items-center gap-2 mt-2">
                <ShoppingBag
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  strokeWidth={2}
                />
                <p className="text-xs sm:text-base">2k+ sold</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Sidebar Icons - Hidden on mobile, shown on larger screens */}
        <div className="hidden lg:flex justify-between items-center w-fit">
          <div className="flex flex-col space-y-4 border-2 border-[#dddddd] rounded-3xl p-3">
            <Image
              src="/src/Assets/Images/lady.png"
              alt="Roxana Michelle"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col items-center space-y-1">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-sm">24.6K</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm">13.1K</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <BookmarkMinus className="w-6 h-6" strokeWidth={2} />
              <span className="text-sm">13.1K</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Share2 className="w-6 h-6" />
              <span className="text-sm">1.3K</span>
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-6 rounded-lg">
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

          {/* Conditional Rendering Based on Active Tab */}
          {activeTab === "Product Details" && (
            <>
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
                Elegant timepiece featuring premium materials, water resistance,
                and sophisticated design. Perfect for both casual and formal
                occasions.
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

              {/* Action Buttons */}
              <div className="space-y-2">
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
            </>
          )}

          {/* Reviews Tab Content */}
          {activeTab === "Reviews" && (
            <div>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPageReplica;
