"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  BookmarkMinus,
  CirclePlay,
  Maximize,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Discoverreel = () => {
  const [selectedVolume, setSelectedVolume] = useState("100ml");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollability);
      // Initial check
      checkScrollability();

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollability);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.querySelector("div[data-product-card]")
          ?.clientWidth || 200;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.querySelector("div[data-product-card]")
          ?.clientWidth || 200;
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  const galleryImages = [
    "/src/Assets/Images/products/product-1.jpeg",
    "/src/Assets/Images/products/product-1.jpeg",
    "/src/Assets/Images/products/product-1.jpeg",
    "/src/Assets/Images/products/product-1.jpeg",
  ];

  const relatedProducts = [
    {
      title: "Apple iPhone X 256GB 3GB RAM",
      price: "$100",
      originalPrice: "$120",
      imageUrl: "/src/Assets/Images/products/product-1.jpeg",
      itemsSold: "1K+ item sold",
      discount: "17% OFF",
    },
    {
      title: "Apple iPhone X 256GB 3GB RAM",
      price: "$100",
      originalPrice: "$120",
      imageUrl: "/src/Assets/Images/products/product-1.jpeg",
      itemsSold: "1K+ item sold",
      discount: "17% OFF",
    },
    {
      title: "Apple iPhone X 256GB 3GB RAM",
      price: "$100",
      originalPrice: "$120",
      imageUrl: "/src/Assets/Images/products/product-1.jpeg",
      itemsSold: "1K+ item sold",
      discount: "17% OFF",
    },
    {
      title: "Apple iPhone X 256GB 3GB RAM",
      price: "$100",
      originalPrice: "$120",
      imageUrl: "/src/Assets/Images/products/product-1.jpeg",
      itemsSold: "1K+ item sold",
      discount: "17% OFF",
    },
    {
      title: "Apple iPhone X 256GB 3GB RAM",
      price: "$100",
      originalPrice: "$120",
      imageUrl: "/src/Assets/Images/products/product-1.jpeg",
      itemsSold: "1K+ item sold",
      discount: "17% OFF",
    },
    {
      title: "Apple iPhone X 256GB 3GB RAM",
      price: "$100",
      originalPrice: "$120",
      imageUrl: "/src/Assets/Images/products/product-1.jpeg",
      itemsSold: "1K+ item sold",
      discount: "17% OFF",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 p-3 sm:p-5 md:p-8 min-h-screen font-Oswald">
      <div className="w-full max-w-6xl bg-transparent p-2 sm:p-8 border-2 border-gray-300 rounded-xl">
        <div className="flex flex-col lg:flex-row items-stretch justify-between">
          {/* Left Side - Product Video/Image - UPDATED for equal width */}
          <div
            className="w-full lg:w-[70%] relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto 
        "
          >
            <div
              style={{
                backgroundImage: `url(${"/src/Assets/Images/products/product-1.jpeg"})`,
              }}
              className="h-full w-full bg-cover bg-center relative mx-auto rounded-2xl "
            >
              {/* Top Overlay - Search */}
              <div className="absolute top-0 left-0 right-0 p-4 z-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center bg-[#eadcdb]/70 p-2 rounded-3xl space-x-2">
                    <Link href="/storeProfile" className="flex gap-1">
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
                  <button className="bg-red-600 text-white text-sm px-2 sm:px-5 py-1 sm:py-2 rounded-xl font-semibold">
                    Live
                  </button>
                </div>
              </div>

              {/* Bottom Overlay - Product Info */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 pt-16">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <div className="text-white bg-[#979595] p-2 rounded-full">
                      <VolumeX
                        strokeWidth={2.5}
                        className="w-2 h-2 sm:w-4 sm:h-4"
                      />
                    </div>
                    <div className="text-white bg-[#979595] p-2 rounded-full">
                      <CirclePlay
                        strokeWidth={2.5}
                        className="w-2 h-2 sm:w-4 sm:h-4"
                      />
                    </div>
                  </div>
                  <div className="">
                    <Link href="/fullpagereel">
                      <div className="text-white bg-[#979595] p-2 rounded-full">
                        <Maximize
                          strokeWidth={2.5}
                          className="w-2 h-2 sm:w-4 sm:h-4"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="w-full lg:w-1/2 px-4 p-1 sm:px-6 h-full flex flex-col">
            {/* Tab Content Container with Consistent Height */}
            <>
              <div className="flex-grow flex flex-col">
                {/* Product Title and Price */}
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                      Premium Watch Collection
                    </h1>
                    <p className="text-orange text-2xl sm:text-3xl font-bold mt-1">
                      $299.99
                    </p>
                  </div>
                  <BookmarkMinus className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Product Description */}
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Elegant timepiece featuring premium materials, water
                  resistance, and sophisticated design. Perfect for both casual
                  and formal occasions.
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
                  <button className="w-full bg-orange text-white py-2 sm:py-3 rounded text-sm sm:text-base font-semibold">
                    BUY NOW
                  </button>
                  <button className="w-full border border-orange text-orange py-2 sm:py-3 rounded text-sm sm:text-base font-semibold">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>

        {/* product carousel */}
        <div className="mt-16 ">
          <div className="w-full pb-2">
            <h2 className="text-lg sm:text-3xl font-bold text-gray-800 mb-4">
              Products include in videos
            </h2>

            <div className="relative">
              <button
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white p-1 sm:p-2 rounded-full shadow-2xl ${
                  !canScrollLeft
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
                onClick={scrollLeft}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div
                ref={scrollContainerRef}
                className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[50%] md:auto-cols-[33%] lg:auto-cols-[calc(25%-12px)] gap-4 overflow-x-auto pb-4 pt-2 px-1 scrollbar-hide scroll-smooth snap-x"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {relatedProducts.map((product, index) => (
                  <div
                    key={index}
                    data-product-card
                    className="snap-start bg-white rounded-lg overflow-hidden border border-gray-100"
                  >
                    <div className="relative">
                      <div className="h-full w-full flex items-center justify-center p-3 ">
                        <Image
                          src={product.imageUrl}
                          alt={product.title}
                          width={200}
                          height={200}
                          className="h-full w-full object-contain rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 line-clamp-2 h-8">
                        {product.title}
                      </h3>
                      <p className="sm:text-lg font-bold text-gray-500 mt-1">
                        {product.itemsSold}
                      </p>
                      <div className="flex items-end justify-between mt-2">
                        <div>
                          <p className="text-orange font-bold sm:text-2xl">
                            {product.price}
                          </p>
                        </div>
                        <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors duration-200">
                          <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 border-2 bg-white p-1 sm:p-2 rounded-full shadow-2xl ${
                  !canScrollRight
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
                onClick={scrollRight}
                disabled={!canScrollRight}
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discoverreel;
