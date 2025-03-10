"use client";
import Button from "@/app/_components/button";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import { LucideEye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wooden Wind-Up Deer",
    price: 28.76,
    originalPrice: 34.99,
    rating: 4,
    reviews: 2,
    imageUrl: "/src/Assets/Images/productcard.png",
  },
  {
    id: 2,
    name: "Handcrafted Wooden Fox",
    price: 24.5,
    originalPrice: 30.0,
    rating: 5,
    reviews: 5,
    imageUrl: "/src/Assets/Images/productcard.png",
  },
  {
    id: 3,
    name: "Vintage Wooden Owl",
    price: 32.0,
    originalPrice: 40.0,
    rating: 3,
    reviews: 8,
    imageUrl: "/src/Assets/Images/productcard.png",
  },
];

const Livenow = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-[120px]">
        <h2 className="font-Oswald font-semibold text-[32px] md:text-[44px] leading-[40px] md:leading-[52px]">
          Live Now
        </h2>
        <hr className="hidden md:block w-[75%]" />
        <Button View="View All" />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[30px]">
        <div
          className="w-full md:w-[30%] bg-cover bg-center p-6 md:p-[40px]"
          style={{
            backgroundImage: `url("/src/Assets/Images/bagproduct.png")`,
          }}
        >
          <p className="bg-[#DB4444] px-2 py-1 text-white text-sm font-semibold w-max">
            Save 10%
          </p>
          <p className="font-poppins font-semibold text-lg md:text-[24px] leading-[28px] md:leading-[36px] mt-2">
            Ecommerce Live Stream
          </p>
          <p className="font-poppins font-semibold text-lg md:text-[24px] leading-[28px] md:leading-[36px]">
            Watch and Shop in Real-Time
          </p>
        </div>

        <div className="w-full md:w-[70%]">
          <Carousel>
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/3">
                  <div className="relative w-full rounded-lg shadow-lg overflow-hidden bg-white">
                    <div className="relative group overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={337}
                        height={337}
                        className="w-full h-[250px] md:h-[320px] object-cover"
                      />

                      <div className="absolute top-3 left-3 rounded-full bg-[#DB4444] px-3 py-1">
                        <p className="text-white text-sm font-medium">
                          Live Now
                        </p>
                      </div>

                      <div className="absolute w-[90%] bg-[#FF6F3C] left-1/2 -translate-x-1/2 border-2 border-white p-3 opacity-0 group-hover:opacity-100 group-hover:top-1/2 group-hover:-translate-y-1/2 transition-all duration-500">
                        <p className="text-center text-white font-bold text-sm">
                          Join Live
                        </p>
                      </div>

                      <div className="absolute bottom-2 left-3 flex gap-1 bg-[#B1B1B1B2] py-1 px-2 rounded-full text-white text-xs">
                        <LucideEye size={14} />
                        <p>800 views</p>
                      </div>
                    </div>

                    <div className="p-4 text-center">
                      <div className="flex justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`${
                              i < product.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            } text-lg`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="text-gray-600 text-sm ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <div className="text-red-600 font-bold text-lg">
                        ${product.price.toFixed(2)}
                        <span className="text-gray-500 line-through text-sm ml-2">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Livenow;
