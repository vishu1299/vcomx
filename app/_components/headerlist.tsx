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
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSitemenu(false);
      }
      if (
        !isMobile &&
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
  }, [isMobile]);

  const toggleMenu = () => {
    setSitemenu(!sitemenu);
  };

  return (
    <div className="w-full lg:h-[70px] h-[50px] flex lg:gap-[70px] relative bg-[#142535]">
      {/* Category Dropdown Button - Keeping original desktop behavior */}
      <div
        ref={dropdownRef}
        className="bg-[#FF6F3C] h-full lg:w-[266px] w-[60%] flex justify-center items-center p-[10px] relative"
        onMouseEnter={() => !isMobile && setDropdown(true)}
        onMouseLeave={() => !isMobile && setDropdown(false)}
        onClick={() => isMobile && setDropdown(!dropdown)}
      >
        <p className="text-white lg:text-[16px] md:text-[12px] flex justify-between items-center w-full uppercase cursor-pointer">
          Browse Categories <FaChevronDown />
        </p>

        {dropdown && (
          <div className="absolute w-[250px] top-[50px] left-0 bg-white shadow-md z-50">
            {browsecategory.map((item, index) => (
              <div
                key={item.id}
                className="border-b hover:bg-gray-100 relative"
                onMouseEnter={() => !isMobile && setActiveSubmenu(index)}
                onMouseLeave={() => !isMobile && setActiveSubmenu(null)}
                onClick={(e) => {
                  if (isMobile) {
                    e.stopPropagation();
                    setActiveSubmenu(activeSubmenu === index ? null : index);
                  }
                }}
              >
                <div className="p-3 flex justify-between items-center cursor-pointer">
                  {item.item} <FaChevronRight />
                </div>

                {activeSubmenu === index && item.subcategories && (
                  <div
                    className={
                      isMobile
                        ? "w-full bg-gray-50 p-3"
                        : "absolute left-full top-0 bg-white shadow-md w-[200px] p-3 z-50"
                    }
                  >
                    {item.subcategories.map((sub, idx) => (
                      <p
                        key={idx}
                        className="p-1 hover:bg-gray-200 cursor-pointer"
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

      <div className="flex lg:justify-between justify-center items-center lg:w-full w-[40%] lg:flex-row flex-col relative">
        {/* Mobile Close Button */}
        {sitemenu && (
          <span
            onClick={() => setSitemenu(false)}
            className="z-[99] absolute left-[-38px] bg-[#142535] text-white p-[4px] rounded-[3px] lg:hidden"
          >
            <RxCross1 />
          </span>
        )}

        {/* Navigation Menu */}
        <div
          ref={menuRef}
          className={`flex items-center gap-[30px] lg:flex-row flex-col bg-[#142535] lg:bg-[unset] w-full lg:w-[unset] py-[15px] lg:[position:unset] absolute top-0 
            ${sitemenu ? "block" : "hidden"} lg:flex right-0 z-40`}
        >
          <ul className="flex lg:gap-[30px] gap-[10px] lg:flex-row flex-col">
            <li className="text-[#fff] uppercase hover:text-[#FF6F3C] transition-colors">
              <Link href="/">HomePage</Link>
            </li>
            <li className="text-[#fff] uppercase hover:text-[#FF6F3C] transition-colors">
              <Link href="/discover">Discover</Link>
            </li>
            <li className="text-[#fff] uppercase hover:text-[#FF6F3C] transition-colors">
              <Link href="/reels">Videos</Link>
            </li>
            <li className="text-[#fff] uppercase hover:text-[#FF6F3C] transition-colors">
              <Link href="/helpandsupport">Contact Us</Link>
            </li>
          </ul>

          <div className="bg-[#FF6F3C] rounded-[8px] h-[45px] flex justify-center items-center hover:bg-[#e5633c] transition-colors">
            <Link href="#" className="text-[#fff] uppercase p-[10px] py-[10px]">
              Start Selling
            </Link>
          </div>

          {/* Mobile Contact Info */}

          <div className="flex flex-col gap-[10px] lg:hidden w-full items-center mt-4">
            <Link href="/trackorder">
              <p className="flex text-white justify-center items-center gap-[12px]">
                <FaTruckFast className="text-xl" /> Track Your Order
              </p>
            </Link>
            <p className="flex text-white justify-center items-center gap-[12px]">
              <span>Hotline:</span> +1 (208) 703-6484
            </p>
          </div>
        </div>

        {/* Desktop Contact Info */}
        <div className="lg:flex gap-[30px] items-center justify-center hidden">
          <Link href="/trackorder">
            <p className="flex text-[#fff] justify-center items-center gap-[12px] cursor-pointer hover:text-[#FF6F3C] transition-colors">
              <span>
                <FaTruckFast className="text-2xl" />
              </span>{" "}
              Track Your Order
            </p>
          </Link>
          <p className="flex text-[#fff] justify-center items-center gap-[12px]">
            <span>Hotline: </span> +1 (208) 703-6484
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-end items-end w-full">
          <span className="pr-[10px]" onClick={toggleMenu}>
            <CiMenuFries className="text-[#fff] text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Headerlist;
