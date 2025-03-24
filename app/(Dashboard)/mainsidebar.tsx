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

import { Settings } from "lucide-react";
import Link from "next/link";

// Menu items.
const items = [
  { title: "Dashboard", url: "/dashboard", icon: FaTachometerAlt },
  { title: "Schedule", url: "#", icon: FaCalendarAlt },
  { title: "Products", url: "#", icon: FaBox },
  { title: "Orders", url: "#", icon: FaShoppingCart },
  { title: "Invoices", url: "/invoice", icon: FaFileInvoice },
  { title: "Messages", url: "#", icon: FaComments },
  { title: "Shipments", url: "/shipments", icon: FaTruck },
];

export default function AppSidebar() {
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
                  <SidebarMenuItem key={item.title}>
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
                  <div className=" cursor-pointer hover:bg-gray-100 ">
                    <Link href="/setting" className="flex gap-3 ">
                      <Settings />
                      <h1>Setting</h1>
                    </Link>
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
    </div>
  );
}
