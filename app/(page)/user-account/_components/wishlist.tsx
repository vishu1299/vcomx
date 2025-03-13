// pages/wishlist.tsx
import { useState } from "react";
import {
  Search,
  Heart,
  ChevronDown,
  ShoppingCart,
  Forward,
} from "lucide-react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface WishlistItem {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

export default function Wishlist() {
  const [sorting, setSorting] = useState("Default sorting");
  //   const [currentPage, setCurrentPage] = useState(1);

  const wishlistItems: WishlistItem[] = [
    {
      id: "1",
      title: "Exotic delicious",
      price: "$99.8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      image: "/src/Assets/Images/products/product-1.jpeg",
    },
    {
      id: "2",
      title: "Exotic delicious",
      price: "$99.8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      image: "/src/Assets/Images/products/product-2.jpeg",
    },
    {
      id: "3",
      title: "Exotic delicious",
      price: "$99.8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      image: "/src/Assets/Images/products/product-1.jpeg",
    },
    {
      id: "4",
      title: "Exotic delicious",
      price: "$99.8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      image: "/src/Assets/Images/products/product-2.jpeg",
    },
    {
      id: "5",
      title: "Exotic delicious",
      price: "$99.8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      image: "/src/Assets/Images/products/product-1.jpeg",
    },
  ];

  return (
    <div className="container w-full mx-auto max-w-4xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 stroke-black" />
          <h1 className="text-xl font-bold">My Wishlist</h1>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              className="pl-8 pr-3 py-2 rounded-md border border-gray-300 w-full focus:outline-none"
              placeholder="Search wishlist"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative w-full md:w-auto">
            <select
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
              className="pl-3 pr-8 py-2 rounded-md border border-gray-300 appearance-none w-full focus:outline-none"
            >
              <option value="Default sorting">Default sorting</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-4 rounded-md shadow-sm"
          >
            <div className="w-full sm:w-32 h-full bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 border-r border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-md font-semibold text-orange">
                    {item.price}
                  </p>
                </div>
              </div>

              <p className="text-md text-gray-600 mt-2 line-clamp-3 sm:max-w-[95%]">
                {item.description}
              </p>
            </div>

            {/* Action icons on the right */}
            <div className="flex flex-row sm:flex-col justify-end gap-3 mt-2 sm:mt-0">
              <button className="p-1 bg-orange text-white rounded-full w-8 h-8 flex items-center justify-center">
                <Heart className="w-4 h-4 " />
              </button>
              <button className="p-1 bg-white shadow-lg text-black rounded-full w-8 h-8 flex items-center justify-center">
                <Forward className="w-4 h-4 " />
              </button>
              <button className="p-1 bg-white shadow-lg text-black rounded-full w-8 h-8 flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 " />
              </button>
              <button className="p-1 bg-white shadow-lg text-black rounded-full w-8 h-8 flex items-center justify-center">
                <Search className="w-4 h-4 " />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination using shadcn */}
      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
