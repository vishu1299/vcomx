// pages/products.tsx
import React from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  Plus,
  Star,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Product type definition
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  sold: number;
  discount?: {
    type: "percentage" | "buyGet";
    value: string;
  };
  image: string;
}

export default function ProductsPage() {
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      title: "Classic Leather Jacket",
      category: "Men's Clothing",
      price: 50,
      rating: 4.8,
      reviews: 250,
      sold: 500,
      discount: {
        type: "percentage",
        value: "10% Off",
      },
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: 2,
      title: "Designer Handbag",
      category: "Accessories",
      price: 150,
      rating: 4.7,
      reviews: 100,
      sold: 350,
      discount: {
        type: "percentage",
        value: "15% Off",
      },
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: 3,
      title: "Running Sneakers",
      category: "Footwear",
      price: 75,
      rating: 4.6,
      reviews: 320,
      sold: 420,
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: 4,
      title: "Men's Denim Jeans",
      category: "Men's Clothing",
      price: 30,
      rating: 4.4,
      reviews: 420,
      sold: 600,
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: 5,
      title: "Women's Silk Scarf",
      category: "Accessories",
      price: 40,
      rating: 4.9,
      reviews: 100,
      sold: 280,
      discount: {
        type: "percentage",
        value: "5% Off",
      },
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: 6,
      title: "Designer Sunglasses",
      category: "Accessories",
      price: 120,
      rating: 4.8,
      reviews: 110,
      sold: 150,
      discount: {
        type: "percentage",
        value: "20% Off",
      },
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: 7,
      title: "Eco-Friendly T-Shirt",
      category: "Women's Clothing",
      price: 20,
      rating: 4.5,
      reviews: 150,
      sold: 800,
      discount: {
        type: "buyGet",
        value: "Buy 2 Get 1",
      },
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: 8,
      title: "Casual Slip-On Shoes",
      category: "Footwear",
      price: 55,
      rating: 4.3,
      reviews: 90,
      sold: 220,
      image: "/src/Assets/Images/profileproducts.png",
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header with Search, Filters and Add Product Button */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-8">
        <div className="flex gap-5">
          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <Input
              placeholder="Search placeholder"
              className="pl-10 h-10 text-sm border border-gray-200 rounded-md w-full"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 text-sm border border-gray-200 bg-white text-gray-700"
              >
                All Status <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Active</DropdownMenuItem>
              <DropdownMenuItem>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 text-sm border border-gray-200 bg-white text-gray-700"
              >
                All Categories <ChevronDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Categories</DropdownMenuItem>
              <DropdownMenuItem>Mens Clothing</DropdownMenuItem>
              <DropdownMenuItem>Womens Clothing</DropdownMenuItem>
              <DropdownMenuItem>Accessories</DropdownMenuItem>
              <DropdownMenuItem>Footwear</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-3 w-full md:w-auto">
          <Button
            variant="outline"
            className="h-10 px-4 text-sm border border-gray-200 bg-white text-gray-700"
          >
            <SlidersHorizontal size={16} className="mr-2" /> Filters
          </Button>

          <Button className="h-10 px-4 text-sm bg-orange hover:bg-orange text-white">
            <Plus size={16} className="mr-2" /> Add Product
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Product Image */}
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-white rounded-md text-xs font-medium">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{product.title}</h3>

              <div className="flex items-center mt-2">
                <div className="flex items-center text-amber-400">
                  <Star size={14} fill="currentColor" />
                  <span className="ml-1 text-sm font-medium text-gray-900">
                    {product.rating}
                  </span>
                </div>
                <span className="mx-2 text-xs text-gray-500">
                  ({product.reviews} Reviews)
                </span>
                <span className="text-xs text-gray-500">
                  {product.sold} Sold
                </span>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <span className="text-gray-900 font-semibold">
                    ${product.price}
                  </span>
                  {product.discount && (
                    <span className="ml-2 text-xs text-gray-500 flex items-center">
                      {product.discount.type === "percentage" && (
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {product.discount.value}
                        </span>
                      )}
                      {product.discount.type === "buyGet" && (
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {product.discount.value}
                        </span>
                      )}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 text-xs text-gray-600 hover:bg-gray-100"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-600 hover:bg-gray-100"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">Showing 14 of 20</p>

        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-gray-600 border-gray-200"
          >
            <ChevronLeft size={16} />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 text-gray-600 border-gray-200 px-0"
          >
            1
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 text-white bg-orange hover:bg-orange border-orange px-0"
          >
            2
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 text-gray-600 border-gray-200 px-0"
          >
            3
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 text-gray-600 border-gray-200 px-0"
          >
            4
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 text-gray-600 border-gray-200 px-0"
          >
            5
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 text-gray-600 border-gray-200 px-0"
          >
            6
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-gray-600 border-gray-200"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
