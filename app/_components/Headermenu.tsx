"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";

const Headermenu = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const cartItems = [
    {
      image: "/src/Assets/Images/cart.png",
      name: "Fashion Glasses Sunny Premium",
      price: 25,
      quantity: 2,
    },
    {
      image: "/src/Assets/Images/cart.png",
      name: "Apple Watch Series 5 MWV62VN/A",
      price: 517.79,
      quantity: 2,
    },
  ];

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle click outside to close elements
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchbar(false);
      }

      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearchbar = () => {
    setSearchbar(!searchbar);
  };

  interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  const CartItem: React.FC<CartItemProps> = ({
    name,
    price,
    quantity,
    image,
  }) => {
    const [qty, setQty] = useState<string | number>(quantity);

    return (
      <div className="flex items-center gap-2 sm:gap-4 border-b pb-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          <Image src={image} alt={name} fill className="object-cover rounded" />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-sm sm:text-base font-semibold truncate">
            {name}
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#FF6F3C]">
            ${price.toFixed(2)}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-12 sm:w-16 text-center p-1 sm:p-2 text-xs sm:text-sm h-8"
              min="1"
            />
            <Button
              size="sm"
              className="bg-[#FF6F3C] hover:bg-[#e5633c] text-xs sm:text-sm h-8 px-2 sm:px-4"
            >
              Update
            </Button>
          </div>
        </div>

        <button className="text-gray-400 hover:text-gray-600">
          <ImCross className="text-xs" />
        </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto  py-3 sm:py-4 md:py-5">
      <div className="flex justify-between items-center w-full relative">
        {/* Mobile Search Bar Overlay */}
        {searchbar && (
          <div
            ref={searchRef}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSearchbar(false)}
          >
            <div
              className="bg-white rounded-lg shadow-lg w-full max-w-md p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Search Products</h3>
                <button onClick={() => setSearchbar(false)}>
                  <ImCross className="text-gray-500" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="bg-[#142535] rounded-md w-full sm:w-auto">
                  <Select>
                    <SelectTrigger className="text-white font-medium text-sm border-none outline-none h-10 bg-transparent">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All products">All products</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Home Decor">Home Decor</SelectItem>
                      <SelectItem value="Travel">Travel</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                      <SelectItem value="Equipment">Equipment</SelectItem>
                      <SelectItem value="Fashion">Fashion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 flex">
                  <input
                    type="text"
                    className="w-full border rounded-l-md px-3 py-2 focus:outline-none"
                    placeholder="Search for products..."
                  />
                  <Link href="/searchresult">
                    <button
                      type="submit"
                      className="bg-[#142535] text-white font-medium px-4 py-2 rounded-r-md"
                    >
                      SEARCH
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Logo */}
        <div className="flex justify-start items-center w-auto sm:w-48 md:w-56 lg:w-64">
          <Image
            src="/src/Assets/Images/Logo.png"
            alt="Logo"
            width={190}
            height={42}
            className="w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex justify-center items-center w-full max-w-xl mx-4">
          <div className="bg-[#142535] w-[30%] rounded-l-md">
            <Select>
              <SelectTrigger className="text-white font-medium text-sm border-none outline-none h-12 bg-transparent">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All products">All products</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Home Decor">Home Decor</SelectItem>
                <SelectItem value="Travel">Travel</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
                <SelectItem value="Equipment">Equipment</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <form className="flex w-full">
              <input
                type="text"
                className="flex-1 h-12 px-4 border-y focus:outline-none"
                placeholder="Search for products..."
              />
              <Link href="/searchresult" className="block">
                <button
                  type="submit"
                  className="h-12 text-white font-medium text-sm bg-[#142535] px-4 rounded-r-md transition-colors hover:bg-[#1f3a4f]"
                >
                  SEARCH
                </button>
              </Link>
            </form>
          </div>
        </div>

        {/* User Action Icons */}
        <div className="flex gap-1 sm:gap-2 md:gap-4 lg:gap-6 items-center">
          {/* Mobile Search Icon */}
          <button
            className="md:hidden flex flex-col items-center justify-center p-1"
            onClick={toggleSearchbar}
          >
            <CiSearch className="text-xl sm:text-2xl" />
            <span className="text-[10px] hidden sm:block">Search</span>
          </button>

          {/* Sign In */}
          <Link href="/signIn">
            <div className="flex flex-col items-center justify-center p-1">
              <LogIn className="text-xl sm:text-2xl" />
              <span className="text-[10px] hidden sm:block">Sign In</span>
            </div>
          </Link>

          {/* Account */}
          <Link href="/user-account">
            <div className="flex flex-col items-center justify-center p-1">
              <GoPerson className="text-xl sm:text-2xl" />
              <span className="text-[10px] hidden sm:block">Account</span>
            </div>
          </Link>

          {/* Wishlist */}
          <div className="flex flex-col items-center justify-center p-1">
            <FaRegHeart className="text-xl sm:text-2xl" />
            <span className="text-[10px] hidden sm:block">Wishlist</span>
          </div>

          {/* Cart */}
          <div
            ref={cartRef}
            className="relative flex flex-col items-center justify-center p-1"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <div className="relative">
              <MdOutlineShoppingBag className="text-xl sm:text-2xl" />
              <span className="absolute -top-1 -right-1 bg-[#FF6F3C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
            <span className="text-[10px] hidden sm:block">Cart</span>

            {/* Cart Dropdown */}
            {cartOpen && (
              <div className="absolute top-full right-0 w-64 sm:w-80 md:w-96 bg-white shadow-lg rounded-lg p-4 z-50 mt-2 border border-gray-200">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                  <h3 className="font-semibold">Shopping Cart (2)</h3>
                  <button onClick={() => setCartOpen(false)}>
                    <ImCross className="text-gray-500 text-xs" />
                  </button>
                </div>

                <div className="max-h-64 overflow-y-auto space-y-4">
                  {cartItems.map((item, index) => (
                    <CartItem key={index} {...item} />
                  ))}
                </div>

                <div className="mt-4 pt-2 border-t">
                  <div className="flex justify-between items-center font-medium mb-4">
                    <span>Subtotal:</span>
                    <span className="text-[#FF6F3C]">
                      ${subTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Link href="/cart" className="block w-full">
                      <Button
                        variant="outline"
                        className="w-full border-[#FF6F3C] text-[#FF6F3C] hover:bg-[#FF6F3C] hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        View Cart
                      </Button>
                    </Link>
                    <Button className="w-full bg-[#FF6F3C] hover:bg-[#e5633c] transition-colors text-xs sm:text-sm">
                      Checkout
                    </Button>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs text-gray-600">
                      Free Shipping on orders over $75.00
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-[#FF6F3C]"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headermenu;
