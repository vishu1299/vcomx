"use client";

import { Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  return (
    <div className="w-full flex justify-end items-end">
      <nav className="flex w-[83%] items-center justify-between p-4 bg-white shadow-sm ">
        <div className="flex items-center space-x-2">
          <SidebarTrigger className=" text-gray-900" />
          <span className="text-lg font-medium text-gray-900">Dashboard </span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right: User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-medium ">
                Sabrine Josephine
              </span>
              <span className="text-gray-500 text-sm">sabrine@pay.com</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
