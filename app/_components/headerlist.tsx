"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { FaTruckFast } from "react-icons/fa6";

const browsecategory = [
  {
    id: 1,
    item: "Real Estate",
    subcategories: ["Apartments", "Villas", "Plots"],
  },
  { id: 2, item: "Technology", subcategories: ["Gadgets", "Software", "AI"] },
  { id: 3, item: "Watch", subcategories: ["Luxury", "Smart", "Analog"] },
  {
    id: 4,
    item: "Home & Life",
    subcategories: ["Furniture", "Decor", "Kitchen"],
  },
  {
    id: 5,
    item: "Cosmetic Surgery",
    subcategories: ["Hair", "Skin", "Dental"],
  },
  {
    id: 6,
    item: "Fashion Accessories",
    subcategories: ["Bags", "Shoes", "Belts"],
  },
  {
    id: 7,
    item: "Products On Demand",
    subcategories: ["Custom Prints", "Handmade", "Personalized"],
  },
  {
    id: 8,
    item: "Luxury Food",
    subcategories: ["Caviar", "Truffles", "Fine Wine"],
  },
  { id: 9, item: "Jewelry", subcategories: ["Gold", "Diamonds", "Silver"] },
];

const Headerlist = () => {
  const [dropdown, setDropdown] = useState(false);
  const [sitemenu, setSitemenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
  });

  // Check screen size with more detailed breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 640, // sm breakpoint
        isTablet: window.innerWidth >= 640 && window.innerWidth < 1024, // md to lg breakpoint
      });
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSitemenu(false);
      }

      if (
        !(screenSize.isMobile || screenSize.isTablet) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [screenSize]);

  // Close dropdown when clicking outside on mobile/tablet
  useEffect(() => {
    if (dropdown && (screenSize.isMobile || screenSize.isTablet)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [dropdown, screenSize]);

  const toggleMenu = () => {
    setSitemenu(!sitemenu);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
    setActiveSubmenu(null);
  };

  const handleSubcategoryClick = (index: number) => {
    if (screenSize.isMobile || screenSize.isTablet) {
      setActiveSubmenu(activeSubmenu === index ? null : index);
    }
  };

  return (
    <div className="w-full h-auto lg:h-[70px] sm:h-[60px] h-[50px] flex flex-wrap relative bg-[#142535] shadow-md">
      {/* Category Dropdown Button */}
      <div
        ref={dropdownRef}
        className="bg-[#FF6F3C] h-full sm:w-[220px] w-[60%] flex justify-center items-center p-2 sm:p-[10px] relative cursor-pointer"
        onMouseEnter={() =>
          !(screenSize.isMobile || screenSize.isTablet) && setDropdown(true)
        }
        onMouseLeave={() =>
          !(screenSize.isMobile || screenSize.isTablet) && setDropdown(false)
        }
        onClick={toggleDropdown}
      >
        <p className="text-white text-sm sm:text-base lg:text-[16px] flex justify-between items-center w-full uppercase font-medium truncate">
          Browse Categories
          <FaChevronDown
            className={`ml-2 transition-transform duration-300 ${
              dropdown ? "rotate-180" : ""
            }`}
          />
        </p>

        {dropdown && (
          <div className="absolute w-full sm:w-[250px] top-full left-0 bg-white shadow-lg z-50 max-h-[70vh] overflow-y-auto">
            {browsecategory.map((item, index) => (
              <div
                key={item.id}
                className="border-b hover:bg-gray-100 relative"
                onMouseEnter={() =>
                  !(screenSize.isMobile || screenSize.isTablet) &&
                  setActiveSubmenu(index)
                }
                onMouseLeave={() =>
                  !(screenSize.isMobile || screenSize.isTablet) &&
                  setActiveSubmenu(null)
                }
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubcategoryClick(index);
                }}
              >
                <div className="p-3 flex justify-between items-center cursor-pointer">
                  <span className="truncate pr-2">{item.item}</span>
                  <FaChevronRight
                    className={`transition-transform duration-300 ${
                      activeSubmenu === index &&
                      (screenSize.isMobile || screenSize.isTablet)
                        ? "rotate-90"
                        : ""
                    }`}
                  />
                </div>

                {activeSubmenu === index && item.subcategories && (
                  <div
                    className={
                      screenSize.isMobile || screenSize.isTablet
                        ? "w-full bg-gray-50 py-2 px-4 border-t border-gray-200"
                        : "absolute left-full top-0 bg-white shadow-md w-[200px] p-3 z-50"
                    }
                  >
                    {item.subcategories.map((sub, idx) => (
                      <p
                        key={idx}
                        className="py-2 px-1 hover:bg-gray-200 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        {sub}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center h-full lg:flex-row flex-col w-[40%] sm:w-auto lg:w-full lg:flex-1 relative">
        {/* Mobile Close Button */}
        {sitemenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSitemenu(false)}
          >
            <div
              className="absolute right-4 top-4 bg-[#142535] text-white p-2 rounded-full lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setSitemenu(false);
              }}
            >
              <RxCross1 size={20} />
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <div
          ref={menuRef}
          className={`flex items-center gap-4 lg:gap-[30px] flex-col lg:flex-row bg-[#142535] w-full py-6 lg:py-0
            ${
              sitemenu
                ? "fixed top-0 right-0 bottom-0 z-50 w-[280px] h-full overflow-y-auto shadow-xl"
                : "hidden lg:flex"
            }`}
        >
          <ul className="flex lg:gap-[30px] gap-4 lg:flex-row flex-col w-full lg:w-auto px-6 lg:px-0">
            <li className="text-[#fff] text-sm sm:text-base uppercase hover:text-[#FF6F3C] transition-colors py-2 lg:py-0 border-b lg:border-0 border-gray-700">
              <Link href="/">HomePage</Link>
            </li>
            <li className="text-[#fff] text-sm sm:text-base uppercase hover:text-[#FF6F3C] transition-colors py-2 lg:py-0 border-b lg:border-0 border-gray-700">
              <Link href="#">Discover</Link>
            </li>
            <li className="text-[#fff] text-sm sm:text-base uppercase hover:text-[#FF6F3C] transition-colors py-2 lg:py-0 border-b lg:border-0 border-gray-700">
              <Link href="/reels">Videos</Link>
            </li>
            <li className="text-[#fff] text-sm sm:text-base uppercase hover:text-[#FF6F3C] transition-colors py-2 lg:py-0 border-b lg:border-0 border-gray-700">
              <Link href="#">Contact Us</Link>
            </li>
          </ul>

          <div className="bg-[#FF6F3C] rounded-[8px] h-[45px] flex justify-center items-center hover:bg-[#e5633c] transition-colors w-[80%] lg:w-auto mx-4 lg:mx-0 mt-4 lg:mt-0">
            <Link
              href="#"
              className="text-[#fff] text-sm sm:text-base uppercase px-4 py-2 w-full text-center"
            >
              Start Selling
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="flex flex-col gap-4 lg:hidden w-full items-center mt-6 px-4 border-t border-gray-700 pt-6">
            <Link href="/trackorder" className="w-full">
              <p className="flex text-white justify-start items-center gap-3 py-2">
                <FaTruckFast className="text-xl" /> Track Your Order
              </p>
            </Link>
            <p className="flex text-white justify-start items-center gap-3 py-2 w-full">
              <span>Hotline:</span> +01 1234 8888
            </p>
          </div>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex gap-6 items-center justify-end flex-1 pr-6">
          <Link href="/trackorder">
            <p className="flex text-[#fff] justify-center items-center gap-3 cursor-pointer hover:text-[#FF6F3C] transition-colors whitespace-nowrap">
              <FaTruckFast className="text-xl" /> Track Your Order
            </p>
          </Link>
          <p className="flex text-[#fff] justify-center items-center gap-2 whitespace-nowrap">
            <span>Hotline:</span> +01 1234 8888
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-end items-center h-full pr-4 absolute -right-5 top-5">
          <button
            className="p-2 text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <CiMenuFries className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headerlist;
