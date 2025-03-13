"use client";
import React, { useState } from "react";
import {
  FiEdit,
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiCreditCard,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Myorders from "./_components/myorders";
import UserAccount from "./_components/userAccount";
import Paymentmethods from "./_components/paymentmethods";
import SavedAddresses from "./_components/savedAddress";
import Editprofile from "./_components/editprofile";
import Wishlist from "./_components/wishlist";

const UserDashboard: React.FC = () => {
  const [changefield, setchangefield] = useState("AccountSetting");
  return (
    <div className="flex justify-center items-center w-full bg-[#F8F8F8] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl min-h-screen py-6 justify-center items-start">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 space-y-5 ">
          {/* User Profile Header */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative">
              <div className="bg-[#FF6A3D] h-24"></div>
              <div className="flex flex-col items-center -mt-12 pb-4 px-4">
                <div className="rounded-full overflow-hidden border-4 border-white w-24 h-24">
                  <Image
                    src="/src/Assets/Images/lady.png"
                    width={96}
                    height={96}
                    alt="Alex Coal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mt-2 text-center">
                  Alex Coal
                </h2>
                <p className="text-gray-500 text-sm text-center">
                  Member since Jan 2024
                </p>

                <button
                  onClick={() => {
                    setchangefield("editprofile");
                  }}
                  className="mt-3 flex items-center gap-1 text-orange border border-orange rounded-full px-4 py-1 text-sm"
                >
                  <FiEdit className="w-4 h-4" /> Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 grid grid-cols-3 sm:grid-cols-1 gap-2 ">
              <div
                onClick={() => {
                  setchangefield("AccountSetting");
                }}
                className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md"
              >
                <FiSettings className="w-5 h-5 group-hover:text-orange mx-auto md:mx-0" />
                <span className="hidden sm:inline">Account Settings</span>
              </div>
              <div
                onClick={() => {
                  setchangefield("OrdersPage");
                }}
                className="group flex items-center gap-3 p-3 hover:bg-[#fff2ed] rounded-md text-gray-700"
              >
                <FiShoppingBag className="w-5 h-5 group-hover:text-orange mx-auto md:mx-0" />
                <span className="hidden sm:inline">My Orders</span>
              </div>

              <div
                onClick={() => {
                  setchangefield("Wishlist");
                }}
                className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md"
              >
                <FiHeart className="w-5 h-5 group-hover:text-orange mx-auto md:mx-0" />
                <span className="hidden sm:inline">Wishlist</span>
              </div>

              <div
                onClick={() => {
                  setchangefield("SavedAddresses");
                }}
                className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md"
              >
                <FiMapPin className="w-5 h-5 group-hover:text-orange mx-auto md:mx-0" />
                <span className="hidden sm:inline">Saved Addresses</span>
              </div>

              <div
                onClick={() => {
                  setchangefield("Paymentmethods");
                }}
                className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md"
              >
                <FiCreditCard className="w-5 h-5 group-hover:text-orange mx-auto md:mx-0" />
                <span className="hidden sm:inline">Payment Methods</span>
              </div>

              <Link href="/helpandsupport">
                <div className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md">
                  <FiHelpCircle className="w-5 h-5 group-hover:text-orange mx-auto md:mx-0" />
                  <span className="hidden sm:inline">Help Center</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {changefield === "AccountSetting" && <UserAccount />}
        {changefield === "editprofile" && <Editprofile />}
        {changefield === "OrdersPage" && <Myorders />}
        {changefield === "Paymentmethods" && <Paymentmethods />}
        {changefield === "SavedAddresses" && <SavedAddresses />}
        {changefield === "Wishlist" && <Wishlist />}
      </div>
    </div>
  );
};

export default UserDashboard;
