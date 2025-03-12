import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { CustomeScrollArea } from "@/components/ui/customeScroll";
import { DualRangeSlider } from "@/components/ui/dualRangeSliderProps";
import VideoProductItem from "./video_products";
import BrandFilter from "./brandfilter";
import Highlight from "./highlight";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const categories = [
  "Promotions",
  "Sweatshirts",
  "Jackets",
  "Denim Jeans",
  "Shorts",
  "Swimwear",
  "T-Shirts & Tops",
  "Trousers",
  "Jumpers & Cardigans",
  "Swimwear",
  "T-Shirts & Tops",
  "Trousers",
  "Jumpers & Cardigans",
];

const Search_videos = () => {
  const [values, setValues] = useState([18, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // This should be dynamically calculated based on your actual data

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top or to products section when changing pages
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="font-semibold text-2xl md:text-4xl text-gray-900">
          Products
        </p>
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2 cursor-pointer">
          <p className="text-sm md:text-base">Default Sorting</p>
          <IoFilterOutline className="text-lg" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[300px]">
          <div className="rounded-md mb-6">
            <p className="font-bold text-lg mb-4">ALL CATEGORIES</p>
            <div className="rounded-md bg-white shadow-md p-4">
              <CustomeScrollArea className="h-72 w-full p-2">
                <div className="flex flex-col gap-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center xl:gap-6 gap-3"
                    >
                      <label
                        htmlFor={`category-${index}`}
                        className="text-[#1C1F23] text-[14px] font-normal font-Oswald"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </CustomeScrollArea>
            </div>
          </div>

          <div className="mt-[40px]">
            <Highlight />
          </div>

          <div className="rounded-md bg-white shadow-md p-4 mt-[40px]">
            <p className="font-bold text-lg mb-4">PRICE</p>
            <DualRangeSlider
              label={(value) => value}
              value={values}
              onValueChange={setValues}
              min={0}
              max={100}
              step={1}
            />
            <div className="flex justify-between mt-2 text-sm">
              <p className="font-normal text-[12px] text-[#1C1F23] font-Oswald">
                Min: ${values[0]}
              </p>
              <p className="font-normal text-[12px] text-[#1C1F23] font-Oswald">
                Max: ${values[1]}
              </p>
            </div>
          </div>
          <div className="mt-[40px]">
            <BrandFilter />
          </div>
          <div className="mt-[20px]">
            <Image
              src="/src/Assets/Images/ads.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div id="products-section" className="w-full">
          <VideoProductItem />

          {/* Pagination */}
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;

                  // Display logic for pagination items
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 &&
                      pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={index}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(pageNumber);
                          }}
                          isActive={currentPage === pageNumber}
                          className={
                            currentPage === pageNumber
                              ? "bg-[#FF6F3C] text-white hover:bg-[#e5633c]"
                              : ""
                          }
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  // Show ellipsis if needed
                  if (
                    (pageNumber === currentPage - 2 && pageNumber > 1) ||
                    (pageNumber === currentPage + 2 && pageNumber < totalPages)
                  ) {
                    return (
                      <PaginationItem key={index}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }

                  return null;
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageChange(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search_videos;
