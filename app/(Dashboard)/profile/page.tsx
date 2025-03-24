// pages/profile.tsx
import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe, Edit, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsPage from "./_components/products";
import StreamManagementTable from "./_components/livestream";
import PostManagementTable from "./_components/post";

export default function ProfilePage() {
  return (
    <div className="container mx-auto ">
      {/* Profile Section */}
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      {/* Main Profile Card */}
      <div className="flex flex-col md:flex-row rounded-xl  mb-8 gap-5">
        {/* Left Section: Profile Info */}
        <div className="w-full md:w-2/3 p-6 bg-white">
          {/* Banner Image and Profile Photo */}
          <div className="relative">
            <div className="h-24 rounded-t-lg overflow-hidden relative">
              <Image
                src="/src/Assets/Images/dashboardprofile.png"
                alt="Profile Banner"
                fill
                sizes="100%"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="absolute -bottom-12 left-4">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden relative">
                <Image
                  src="/src/Assets/Images/lady.png"
                  alt="Profile Avatar"
                  fill
                  sizes="96px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-16 flex justify-between">
            <div className="">
              <h2 className="text-xl font-bold">Sarah Alexandra Zou</h2>
              <p className="text-gray-500 text-sm mt-1">
                UI/UX Designer at Amran Studio
              </p>

              <div className="flex items-center mt-3 text-gray-500 text-sm">
                <MapPin size={16} className="mr-1" />
                <span>Toronto, CA</span>
              </div>
            </div>

            <div className="mt-6">
              <Button className="bg-orange hover:bg-orange text-white rounded-xl px-8">
                Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Details */}
        <div className="w-full md:w-1/3 p-6 bg-white rounded-r-xl">
          <h3 className="text-lg font-medium mb-6">About</h3>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mr-4">
                <Mail size={18} className="text-white" />
              </div>
              <span>sarahalexzou@gmail.com</span>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mr-4">
                <MapPin size={18} className="text-white" />
              </div>
              <span>Modern House Suites No. 187, Toronto, CA</span>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mr-4">
                <Phone size={18} className="text-white" />
              </div>
              <span>+12 3456 7890</span>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mr-4">
                <Globe size={18} className="text-white" />
              </div>
              <span>https://sarahzou.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="border-b w-full justify-between rounded-none bg-transparent mb-6">
          <TabsTrigger
            value="about"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:text-orange px-6 py-2"
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="products"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:text-orange px-6 py-2"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            value="livestreams"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:text-orange px-6 py-2"
          >
            Live Streams
          </TabsTrigger>
          <TabsTrigger
            value="post"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange data-[state=active]:text-orange px-6 py-2"
          >
            Post
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">About Store</h2>
            <Button
              size="sm"
              variant="outline"
              className="bg-orange hover:bg-orange border-0 text-white rounded-md"
            >
              <Edit size={16} className="mr-1" /> Edit
            </Button>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id,
            ultricies vel nibh.
          </p>

          <div className="relative rounded-xl overflow-hidden w-full h-96">
            <Image
              src="/src/Assets/Images/dashboardprofileshop.png"
              alt="Store"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center cursor-pointer">
                <Play size={28} className="text-white ml-1" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="products">
          <ProductsPage />
        </TabsContent>

        <TabsContent value="livestreams">
          <StreamManagementTable />
        </TabsContent>

        <TabsContent value="post">
          <PostManagementTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
