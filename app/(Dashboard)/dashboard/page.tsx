"use client";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaBox,
  FaShoppingCart,
  FaFileInvoice,
  FaComments,
  FaTruck,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useState } from "react";
import EcommerceDashboard from "./_components/dashhome";
import InvoiceDashboard from "./_components/invoice";
import ShipmentDashboard from "./_components/shipments";
import { Search, Settings } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import SettingsPage from "./_components/setting/page";

// Menu items.
const items = [
  { title: "Dashboard", url: "#", icon: FaTachometerAlt },
  { title: "Schedule", url: "#", icon: FaCalendarAlt },
  { title: "Products", url: "#", icon: FaBox },
  { title: "Orders", url: "#", icon: FaShoppingCart },
  { title: "Invoices", url: "#", icon: FaFileInvoice },
  { title: "Messages", url: "#", icon: FaComments },
  { title: "Shipments", url: "#", icon: FaTruck },
];

export default function AppSidebar() {
  const [link, setLink] = useState("Dashboard");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarContent className="bg-white h-full flex flex-col">
          <SidebarGroup className="h-full flex flex-col">
            {/* Logo & Title */}
            <SidebarGroupLabel className="text-xl font-semibold text-[#2a2b2a] flex gap-2">
              <Image
                src="/src/Assets/Images/dashboardLogo.png"
                width={25}
                height={25}
                alt="logo"
                className="my-auto"
              />
              Vcom
            </SidebarGroupLabel>

            {/* Sidebar Menu - Upar */}
            <SidebarGroupContent className="flex-grow">
              <SidebarMenu className="mt-5 flex flex-col gap-4">
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    onClick={() => setLink(item.title)}
                  >
                    <SidebarMenuButton asChild>
                      <a
                        className="hover:bg-orange hover:text-white flex items-center gap-2 p-2"
                        href={item.url}
                      >
                        <item.icon style={{ height: "22px", width: "22px" }} />
                        <span className="text-base">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>

            {/* Settings & Logout Button - Niche */}
            <div className="mt-auto p-3">
              <SidebarMenuItem className="list-none border rounded-md mb-3">
                <SidebarMenuButton asChild>
                  <div
                    onClick={() => setLink("setting")}
                    className="flex gap-3 p-2 cursor-pointer hover:bg-gray-100 "
                  >
                    <Settings />
                    <h1>Setting</h1>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="list-none border rounded-md">
                <SidebarMenuButton asChild>
                  <button className="w-full flex items-center gap-2 bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-600 p-2">
                    <FaSignOutAlt style={{ height: "22px", width: "22px" }} />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Navbar & Content */}
      <div className="flex-1">
        <nav className="flex mb-8 w-full items-center justify-between p-4 bg-white shadow-sm">
          <div className="flex items-center space-x-2">
            <SidebarTrigger className=" text-gray-900" />
            <span className="text-lg font-medium text-gray-900">Dashboard</span>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-medium">
                  Sabrine Josephine
                </span>
                <span className="text-gray-500 text-sm">sabrine@pay.com</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Conditional Components */}
        {link === "Dashboard" && <EcommerceDashboard />}
        {link === "Invoices" && <InvoiceDashboard />}
        {link === "Shipments" && <ShipmentDashboard />}
        {link === "setting" && <SettingsPage />}
      </div>
    </div>
  );
}
