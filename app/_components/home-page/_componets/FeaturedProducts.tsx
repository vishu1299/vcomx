"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTriggers } from "./tabstrigger";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import Image from "next/image";
import HomeData from "@/data/Home/home";
import { CiHeart } from "react-icons/ci";
import { LiaCartArrowDownSolid } from "react-icons/lia";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
};

const FeaturedProducts = () => {
  return (
    <div className="w-full md:py-12 py-4">
      <div className="flex justify-between gap-16 items-center md:mb-16">
        <h2 className="font-Oswald font-semibold text-4xl leading-tight text-[#142535]">
          Featured Products
        </h2>

        <div className="flex-1 justify-around lg:border-b border-gray-400"></div>
        <div className="xl:w-[90px]"></div>
      </div>
      <div className="w-full flex gap-8">
        <Tabs
          defaultValue="All items"
          className="w-full flex justify-between items-start gap-8 lg:flex-row flex-col"
        >
          <TabsList className="lg:w-1/4 h-full w-full flex flex-col justify-start items-start rounded-2xl bg-[#142535] py-4 gap-y-2">
            <TabsTriggers
              value="All items"
              className="w-full flex justify-start items-center font-oswald font-semibold text-2xl md:leading-7 text-white p-3 px-4 rounded-lg bg-[#FF6B50]"
            >
              • All Items
            </TabsTriggers>
            <TabsTriggers
              value="Lipstick"
              className="w-full flex justify-start items-center font-oswald font-semibold text-2xl md:leading-7 text-white p-3 px-4"
            >
              Lipstick
            </TabsTriggers>
            <TabsTriggers
              value="Powder"
              className="w-full flex justify-start items-center font-oswald font-semibold text-2xl md:leading-7 text-white p-3 px-4"
            >
              Powder
            </TabsTriggers>
            <TabsTriggers
              value="Mascara"
              className="w-full flex justify-start items-center font-oswald font-semibold text-2xl md:leading-7 text-white p-3 px-4"
            >
              Mascara
            </TabsTriggers>
            <TabsTriggers
              value="EyeLiner"
              className="w-full flex justify-start items-center font-oswald font-semibold text-2xl md:leading-7 text-white p-3 px-4"
            >
              Eyeliner
            </TabsTriggers>
            <TabsTriggers
              value="Brush"
              className="w-full flex justify-start items-center font-oswald font-semibold text-2xl md:leading-7 text-white p-2 px-4"
            >
              Brush
            </TabsTriggers>
            <TabsTriggers
              value="Concealer"
              className="w-full flex justify-start items-center font-oswald font-semibold text-2xl md:leading-7 text-white p-3 px-4"
            >
              Concealer
            </TabsTriggers>
          </TabsList>
          <div className="lg:w-3/4 w-full relative">
            <TabsContent value="All items">
              <Carousel className="relative w-full mt-2">
                <div className="absolute right-8 -top-24 flex z-10 mt-20 md:mt-0">
                  <CarouselPrevious className="bg-[#FF6B50] text-white hover:bg-[#FF8672] mr-2" />
                  <CarouselNext className="bg-[#FF6B50] text-white hover:bg-[#FF8672]" />
                </div>
                <CarouselContent className="-ml-4">
                  {HomeData.featuredProducts.map((product: Product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-4 md:basis-1/3 lg:basis-1/3"
                    >
                      <div className="relative rounded-lg shadow-lg overflow-hidden bg-white">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={337}
                            height={337}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6f6d6d80] flex justify-center items-center rounded-full">
                            <TbTriangleInvertedFilled className="rotate-[26deg] text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <p className="font-Oswald text-[#727272] font-normal text-[14px]">
                              Cosmetic
                            </p>
                            <CiHeart className="text-2xl text-[#727272] cursor-pointer" />
                          </div>
                          <h3 className="font-Oswald font-medium text-[#303341] text-[16px]">
                            Garnier Skin Active BB Cream All In One Perfecting
                          </h3>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < product.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              02 Reviews
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div>
                              <span className="text-[#FF9C9F] font-bold text-lg mr-2">
                                $22.00
                              </span>
                              <span className="text-[#727272] text-sm line-through">
                                $35.00
                              </span>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-full cursor-pointer hover:bg-gray-200">
                              <LiaCartArrowDownSolid className="text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
            <TabsContent value="Powder">
              <Carousel className="relative w-full">
                <div className="absolute right-8 -top-24 flex z-10 mt-20 md:mt-0">
                  <CarouselPrevious className="bg-[#FF6B50] text-white hover:bg-[#FF8672] mr-2" />
                  <CarouselNext className="bg-[#FF6B50] text-white hover:bg-[#FF8672]" />
                </div>
                <CarouselContent className="-ml-4">
                  {HomeData.featuredProducts.map((product: Product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-4 md:basis-1/3 lg:basis-1/3"
                    >
                      <div className="relative rounded-lg shadow-lg overflow-hidden bg-white">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={337}
                            height={337}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6f6d6d80] flex justify-center items-center rounded-full">
                            <TbTriangleInvertedFilled className="rotate-[26deg] text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <p className="font-Oswald text-[#727272] font-normal text-[14px]">
                              Cosmetic
                            </p>
                            <CiHeart className="text-2xl text-[#727272] cursor-pointer" />
                          </div>
                          <h3 className="font-Oswald font-medium text-[#303341] text-[16px]">
                            Garnier Skin Active BB Cream All In One Perfecting
                          </h3>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < product.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              02 Reviews
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div>
                              <span className="text-[#FF9C9F] font-bold text-lg mr-2">
                                $22.00
                              </span>
                              <span className="text-[#727272] text-sm line-through">
                                $35.00
                              </span>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-full cursor-pointer hover:bg-gray-200">
                              <LiaCartArrowDownSolid className="text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
            <TabsContent value="Mascara">
              <Carousel className="relative w-full">
                <div className="absolute right-8 -top-24 flex z-10 mt-20 md:mt-0">
                  <CarouselPrevious className="bg-[#FF6B50] text-white hover:bg-[#FF8672] mr-2" />
                  <CarouselNext className="bg-[#FF6B50] text-white hover:bg-[#FF8672]" />
                </div>
                <CarouselContent className="-ml-4">
                  {HomeData.featuredProducts.map((product: Product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-4 md:basis-1/3 lg:basis-1/3"
                    >
                      <div className="relative rounded-lg overflow-hidden bg-white border-2 border-[#D6D6D6]">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={337}
                            height={337}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6f6d6d80] flex justify-center items-center rounded-full">
                            <TbTriangleInvertedFilled className="rotate-[26deg] text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <p className="font-Oswald text-[#727272] font-normal text-[14px]">
                              Cosmetic
                            </p>
                            <CiHeart className="text-3xl text-[#727272] cursor-pointer" />
                          </div>
                          <h3 className="font-Oswald font-medium text-[#303341] text-[16px]">
                            Garnier Skin Active BB Cream All In One Perfecting
                          </h3>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < product.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              02 Reviews
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div>
                              <span className="text-[#FF9C9F] font-bold text-lg mr-2">
                                $22.00
                              </span>
                              <span className="text-[#727272] text-sm line-through">
                                $35.00
                              </span>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-full cursor-pointer hover:bg-gray-200">
                              <LiaCartArrowDownSolid className="text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
            <TabsContent value="EyeLiner">
              <Carousel className="relative w-full">
                <div className="absolute right-8 -top-24 flex z-10 mt-20 md:mt-0">
                  <CarouselPrevious className="bg-[#FF6B50] text-white hover:bg-[#FF8672] mr-2" />
                  <CarouselNext className="bg-[#FF6B50] text-white hover:bg-[#FF8672]" />
                </div>
                <CarouselContent className="-ml-4">
                  {HomeData.featuredProducts.map((product: Product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-4 md:basis-1/3 lg:basis-1/3"
                    >
                      <div className="relative rounded-lg shadow-lg overflow-hidden bg-white">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={337}
                            height={337}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6f6d6d80] flex justify-center items-center rounded-full">
                            <TbTriangleInvertedFilled className="rotate-[26deg] text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <p className="font-Oswald text-[#727272] font-normal text-[14px]">
                              Cosmetic
                            </p>
                            <CiHeart className="text-2xl text-[#727272] cursor-pointer" />
                          </div>
                          <h3 className="font-Oswald font-medium text-[#303341] text-[16px]">
                            Garnier Skin Active BB Cream All In One Perfecting
                          </h3>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < product.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              02 Reviews
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div>
                              <span className="text-[#FF9C9F] font-bold text-lg mr-2">
                                $22.00
                              </span>
                              <span className="text-[#727272] text-sm line-through">
                                $35.00
                              </span>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-full cursor-pointer hover:bg-gray-200">
                              <LiaCartArrowDownSolid className="text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>

            <TabsContent value="Brush">
              <Carousel className="relative w-full">
                <div className="absolute right-8 -top-24 flex z-10 mt-20 md:mt-0">
                  <CarouselPrevious className="bg-[#FF6B50] text-white hover:bg-[#FF8672] mr-2" />
                  <CarouselNext className="bg-[#FF6B50] text-white hover:bg-[#FF8672]" />
                </div>
                <CarouselContent className="-ml-4">
                  {HomeData.featuredProducts.map((product: Product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-4 md:basis-1/3 lg:basis-1/3"
                    >
                      <div className="relative rounded-lg shadow-lg overflow-hidden bg-white">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={337}
                            height={337}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6f6d6d80] flex justify-center items-center rounded-full">
                            <TbTriangleInvertedFilled className="rotate-[26deg] text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <p className="font-Oswald text-[#727272] font-normal text-[14px]">
                              Cosmetic
                            </p>
                            <CiHeart className="text-2xl text-[#727272] cursor-pointer" />
                          </div>
                          <h3 className="font-Oswald font-medium text-[#303341] text-[16px]">
                            Garnier Skin Active BB Cream All In One Perfecting
                          </h3>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < product.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              02 Reviews
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div>
                              <span className="text-[#FF9C9F] font-bold text-lg mr-2">
                                $22.00
                              </span>
                              <span className="text-[#727272] text-sm line-through">
                                $35.00
                              </span>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-full cursor-pointer hover:bg-gray-200">
                              <LiaCartArrowDownSolid className="text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
            <TabsContent value="Concealer">
              <Carousel className="relative w-full">
                <div className="absolute right-8 -top-24 flex z-10 mt-20 md:mt-0">
                  <CarouselPrevious className="bg-[#FF6B50] text-white hover:bg-[#FF8672] mr-2" />
                  <CarouselNext className="bg-[#FF6B50] text-white hover:bg-[#FF8672]" />
                </div>
                <CarouselContent className="-ml-4">
                  {HomeData.featuredProducts.map((product: Product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-4 md:basis-1/3 lg:basis-1/3"
                    >
                      <div className="relative rounded-lg shadow-lg overflow-hidden bg-white">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={337}
                            height={337}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6f6d6d80] flex justify-center items-center rounded-full">
                            <TbTriangleInvertedFilled className="rotate-[26deg] text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <p className="font-Oswald text-[#727272] font-normal text-[14px]">
                              Cosmetic
                            </p>
                            <CiHeart className="text-2xl text-[#727272] cursor-pointer" />
                          </div>
                          <h3 className="font-Oswald font-medium text-[#303341] text-[16px]">
                            Garnier Skin Active BB Cream All In One Perfecting
                          </h3>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < product.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              02 Reviews
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div>
                              <span className="text-[#FF9C9F] font-bold text-lg mr-2">
                                $22.00
                              </span>
                              <span className="text-[#727272] text-sm line-through">
                                $35.00
                              </span>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-full cursor-pointer hover:bg-gray-200">
                              <LiaCartArrowDownSolid className="text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
            <TabsContent value="Lipstick">
              <Carousel className="relative w-full">
                <div className="absolute right-8 -top-24 flex z-10 mt-20 md:mt-0">
                  <CarouselPrevious className="bg-[#FF6B50] text-white hover:bg-[#FF8672] mr-2" />
                  <CarouselNext className="bg-[#FF6B50] text-white hover:bg-[#FF8672]" />
                </div>
                <CarouselContent className="-ml-4">
                  {HomeData.featuredProducts.map((product: Product) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-4 md:basis-1/3 lg:basis-1/3"
                    >
                      <div className="relative rounded-lg shadow-lg overflow-hidden bg-white">
                        <div className="relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={337}
                            height={337}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6f6d6d80] flex justify-center items-center rounded-full">
                            <TbTriangleInvertedFilled className="rotate-[26deg] text-white" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <p className="font-Oswald text-[#727272] font-normal text-[14px]">
                              Cosmetic
                            </p>
                            <CiHeart className="text-2xl text-[#727272] cursor-pointer" />
                          </div>
                          <h3 className="font-Oswald font-medium text-[#303341] text-[16px]">
                            Garnier Skin Active BB Cream All In One Perfecting
                          </h3>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i < product.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">
                              02 Reviews
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div>
                              <span className="text-[#FF9C9F] font-bold text-lg mr-2">
                                $22.00
                              </span>
                              <span className="text-[#727272] text-sm line-through">
                                $35.00
                              </span>
                            </div>
                            <div className="bg-[#F5F5F5] p-3 rounded-full cursor-pointer hover:bg-gray-200">
                              <LiaCartArrowDownSolid className="text-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default FeaturedProducts;
