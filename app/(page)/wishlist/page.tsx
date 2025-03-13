// app/(page)/wishlist/page.tsx
"use client";

import React, { useState } from "react";
import { Heart, Eye, Trash } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

interface WishlistItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  originalPrice: number;
  inStock: boolean;
  rating: number;
  image: string;
}

const WishlistPage = () => {
  // Changed to const instead of useState since we're not modifying the array in this component
  const wishlistItems: WishlistItem[] = [
    {
      id: "1",
      name: "Exotic delicious",
      sku: "12345",
      price: 30.0,
      originalPrice: 39.0,
      inStock: true,
      rating: 5,
      image: "/src/Assets/Images/productcard.png",
    },
    {
      id: "2",
      name: "Exotic delicious",
      sku: "12345",
      price: 30.0,
      originalPrice: 39.0,
      inStock: false,
      rating: 5,
      image: "/src/Assets/Images/productcard.png",
    },
    {
      id: "3",
      name: "Exotic delicious",
      sku: "12345",
      price: 30.0,
      originalPrice: 39.0,
      inStock: true,
      rating: 5,
      image: "/src/Assets/Images/productcard.png",
    },
    {
      id: "4",
      name: "Exotic delicious",
      sku: "12345",
      price: 30.0,
      originalPrice: 39.0,
      inStock: false,
      rating: 5,
      image: "/src/Assets/Images/productcard.png",
    },
    {
      id: "5",
      name: "Exotic delicious",
      sku: "12345",
      price: 30.0,
      originalPrice: 39.0,
      inStock: true,
      rating: 5,
      image: "/src/Assets/Images/productcard.png",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // Fixed function to actually use the rating parameter
  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">
          ★
        </span>
      ));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col items-center mb-8">
        <Heart className="w-12 h-12 text-gray-700 mb-2" />
        <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left text-sm font-bold text-gray-800 w-1/2 sm:w-2/5">
                PRODUCT NAME
              </th>
              <th className="py-3 px-4 text-left text-sm font-bold text-gray-800 w-1/6 sm:w-1/5">
                PRICE
              </th>
              <th className="py-3 px-4 text-left text-sm font-bold text-gray-800 w-1/6 sm:w-1/5">
                STOCK STATUS
              </th>
              <th className="py-3 px-4 text-left text-sm font-bold text-gray-800 w-1/6 sm:w-1/5">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-4">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="w-20 h-20 mr-4 mb-2 sm:mb-0 flex-shrink-0 relative">
                      {/* Replaced img with Next.js Image component */}
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-gray-500 text-sm">SKU: {item.sku}</p>
                      <div className="flex mt-1">
                        {renderStars(item.rating)}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={cn(
                      "text-sm",
                      item.inStock ? "text-green-500" : "text-red-500"
                    )}
                  >
                    {item.inStock ? "In Stock" : "Out of stock"}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-sm"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      className="rounded-sm bg-orange hover:bg-orange"
                    >
                      <span className="text-xs">Add to Cart</span>
                    </Button>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-sm"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                isActive={currentPage === 1}
                onClick={() => setCurrentPage(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(2)}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setCurrentPage(3)}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>...</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default WishlistPage;
