"use client";
import Image from "next/image";
import React, { useState } from "react";
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
  const [searchbar, setsearchbar] = useState(false);

  const searchclick = () => {
    setsearchbar(true);
  };

  interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
  }

  const CartItem: React.FC<CartItemProps> = ({ name, price, quantity }) => {
    const [qty, setQty] = useState<string | number>(quantity);

    return (
      <div className="flex items-center gap-4 border-b pb-4">
        <Image
          src="/src/Assets/Images/cart.png"
          alt="Cart"
          width={100}
          height={100}
        />

        <div className="flex-1">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-xl font-bold">${price}</p>
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-12 text-center"
            />
            <Button className="bg-orange hover:bg-orange">Update</Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-between items-center w-full relative">
        <div
          className={`lg:hidden md:hidden ${
            searchbar ? "flex" : "hidden"
          } flex justify-center items-center w-[100%] z-30 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="bg-[#142535] lg:w-[200px] w-[120px] p-[6px] rounded-l-md">
            <Select>
              <SelectTrigger className="font-Oswald text-[#fff] font-bold lg:text-[16px] text-[10px] leading-[26px] w-full border-none outline-none lg:h-[40px] h-[25px] bg-transparent flex justify-between items-center">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="profile">Profile</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <form action="" className="flex relative">
              <span
                className="absolute right-0 top-[-24px]"
                onClick={() => setsearchbar(false)}
              >
                <ImCross />
              </span>
              <input
                type="text"
                className="lg:w-[370px] w-full lg:h-[52px] h-[30px] p-[15px]"
                placeholder="Search For Products"
              />
              <button
                type="submit"
                className="lg:h-[52px] h-[30px] font-Oswald text-[#fff] font-bold text-[16px] leading-[26px] bg-[#142535] w-[120px]  rounded-[0px_6px_6px_0px]"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-start items-center gap-[20px] w-[50%] lg:w-[20%]">
          <Image
            src="/src/Assets/Images/Logo.png"
            alt=""
            width={190}
            height={42}
            className="w-full"
          />
        </div>

        <div className="lg:flex md:hidden hidden justify-center items-center w-[60%]">
          <div className="bg-[#142535] w-[200px] p-[6px] rounded-[6px_0px_0px_6px]">
            <Select>
              <SelectTrigger className="font-Oswald text-[#fff] font-bold lg:text-[16px] text-[10px] leading-[26px] w-full border-none outline-none lg:h-[40px] h-[25px] bg-transparent flex justify-between items-center">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="profile">Profile</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <form action="" className="flex ">
              <input
                type="text"
                className="w-[370px] h-[52px] p-[15px]"
                placeholder="Search for products..."
              />
              <Link href="/searchresult">
                <button
                  type="submit"
                  className="h-[52px] font-Oswald text-[#fff] font-bold text-[16px] leading-[26px] bg-[#142535] w-[120px]  rounded-[0px_6px_6px_0px]"
                >
                  SEARCH
                </button>
              </Link>
            </form>
          </div>
        </div>

        <div className="w-[20%] flex gap-[15px] justify-end items-center">
          <div className="flex justify-center items-center flex-col">
            <span className="lg:hidden block" onClick={() => searchclick()}>
              <CiSearch className="text-2xl md:text-4xl lg:text-4xl" />
            </span>
          </div>
          <Link href="/signIn">
            <div className="flex justify-center items-center flex-col">
              <span>
                <LogIn size={30} className=" md:text-3xl lg:text-4xl" />
              </span>
              <p className="text-center hidden md:block lg:block">Signin</p>
            </div>
          </Link>
          <Link href="/user-account">
            <div className="flex justify-center items-center flex-col">
              <span>
                <GoPerson size={30} className=" md:text-3xl lg:text-4xl" />
              </span>
              <p className="text-center hidden md:block lg:block">Account</p>
            </div>
          </Link>
          <div className="flex justify-center items-center flex-col">
            <span>
              <FaRegHeart size={30} className=" md:text-3xl lg:text-4xl" />
            </span>
            <p className="text-center hidden md:block lg:block">Wishlist</p>
          </div>
          <Link href="/cart">
            <div
              className="relative"
              onMouseEnter={() => setCartOpen(true)}
              onMouseLeave={() => setCartOpen(false)}
            >
              <div className="flex flex-col items-center cursor-pointer">
                <MdOutlineShoppingBag className=" md:text-3xl lg:text-4xl" />
                <span className="text-sm">Cart</span>
              </div>
              {cartOpen && (
                <div className="absolute top-10 right-0 w-96 bg-white shadow-lg rounded-2xl p-6 space-y-4 z-50 border border-gray-200">
                  <button
                    onClick={() => setCartOpen(false)}
                    className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
                  >
                    ×
                  </button>
                  {cartItems.map((item, index) => (
                    <CartItem key={index} {...item} />
                  ))}
                  <div className="text-right font-bold text-lg text-gray-900">
                    Sub Total:{" "}
                    <span className="text-orange">${subTotal.toFixed(2)}</span>
                  </div>
                  <Link href="/cart">
                    <Button className="w-full border border-orange text-orange bg-white hover:bg-white hover:text-orange transition-all">
                      View and Edit Shopping Cart
                    </Button>
                  </Link>
                  <Button className="w-full bg-orange hover:bg-orange transition-all">
                    Payment Process
                  </Button>
                  <div>
                    <div className="text-sm text-gray-600">Free Shipping</div>
                    <div className="w-full h-2 bg-gray-200 rounded-md overflow-hidden mt-2">
                      <div
                        className="h-full bg-orange"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Headermenu;
