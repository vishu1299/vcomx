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

// import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: FaTachometerAlt,
  },
  {
    title: "Schedule",
    url: "#",
    icon: FaCalendarAlt,
  },
  {
    title: "Products",
    url: "#",
    icon: FaBox,
  },
  {
    title: "Orders",
    url: "#",
    icon: FaShoppingCart,
  },
  {
    title: "Invoices",
    url: "#",
    icon: FaFileInvoice,
  },
  {
    title: "Messages",
    url: "#",
    icon: FaComments,
  },
  {
    title: "shipments",
    url: "#",
    icon: FaTruck,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent className="bg-white h-full flex flex-col">
        <SidebarGroup className="h-full flex flex-col">
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
          <SidebarGroupContent className="flex-grow">
            <SidebarMenu className="mt-5 flex flex-col gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      className="hover:bg-orange hover:text-white flex items-center gap-2"
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
          {/* Logout button at the bottom */}
          <SidebarMenuItem className="list-none border rounded-md">
            <SidebarMenuButton asChild>
              <button className="w-full flex items-center gap-2 bg-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-500 p-2">
                <FaSignOutAlt style={{ height: "22px", width: "22px" }} />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// <div className="max-w-sm bg-blue-100 p-3 rounded-lg  shadow-md hidden">
//                 {/* Icon */}
//                 <div className="flex justify-start mb-4">
//                   <Image
//                     src="/src/Assets/Images/dashboardLogo.png"
//                     width={30}
//                     height={30}
//                     alt="Picture of the author"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Discover New Features!
//                 </h2>

//                 {/* Description */}
//                 <p className="text-gray-700 mt-2">
//                   Unlock new features and take your sales to the next level
//                 </p>

//                 {/* Button */}
//                 <button className="mt-4 px-4 py-2 bg-orange text-white rounded-lg font-medium hover:bg-orange-600">
//                   Explore Upgrades
//                 </button>
//               </div>
