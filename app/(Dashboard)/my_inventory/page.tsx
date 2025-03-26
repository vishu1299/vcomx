"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ChevronDown,
  Sliders,
  MoreVertical,
  Star,
} from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  productId: string;
  price: number;
  rating: number;
  reviews: number;
  sales: number;
  earnings: number;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  image: string;
}

const ProductManagementTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Classic Leather Jacket",
      category: "Men's Clothing",
      productId: "CLJ-1023",
      price: 50.0,
      rating: 4.8,
      reviews: 250,
      sales: 500,
      earnings: 25000,
      stock: 150,
      status: "In Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "2",
      name: "Designer Handbag",
      category: "Accessories",
      productId: "DHB-3056",
      price: 150.0,
      rating: 4.7,
      reviews: 180,
      sales: 350,
      earnings: 52500,
      stock: 80,
      status: "Low Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "3",
      name: "Running Sneakers",
      category: "Footwear",
      productId: "RNS-7892",
      price: 75.0,
      rating: 4.6,
      reviews: 320,
      sales: 420,
      earnings: 31500,
      stock: 200,
      status: "In Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "4",
      name: "Men's Denim Jeans",
      category: "Men's Clothing",
      productId: "MDJ-2210",
      price: 30.0,
      rating: 4.4,
      reviews: 400,
      sales: 600,
      earnings: 18000,
      stock: 0,
      status: "Out of Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "5",
      name: "Women's Silk Scarf",
      category: "Accessories",
      productId: "WSS-3345",
      price: 40.0,
      rating: 4.9,
      reviews: 100,
      sales: 280,
      earnings: 11200,
      stock: 0,
      status: "Out of Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "6",
      name: "Eco-Friendly T-Shirt",
      category: "Women's Clothing",
      productId: "EFT-4521",
      price: 20.0,
      rating: 4.5,
      reviews: 150,
      sales: 800,
      earnings: 16000,
      stock: 500,
      status: "In Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "7",
      name: "Designer Sunglasses",
      category: "Accessories",
      productId: "DSG-6789",
      price: 120.0,
      rating: 4.8,
      reviews: 210,
      sales: 150,
      earnings: 18000,
      stock: 15,
      status: "Low Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "8",
      name: "Casual Slip-On Shoes",
      category: "Footwear",
      productId: "CSS-9821",
      price: 55.0,
      rating: 4.3,
      reviews: 90,
      sales: 220,
      earnings: 12100,
      stock: 250,
      status: "In Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "9",
      name: "Women's Silk Scarf",
      category: "Accessories",
      productId: "WSS-3345",
      price: 40.0,
      rating: 4.9,
      reviews: 100,
      sales: 280,
      earnings: 11200,
      stock: 0,
      status: "Out of Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
    {
      id: "10",
      name: "Running Sneakers",
      category: "Footwear",
      productId: "RNS-7892",
      price: 75.0,
      rating: 4.6,
      reviews: 320,
      sales: 420,
      earnings: 31500,
      stock: 200,
      status: "In Stock",
      image: "/src/Assets/Images/profileproducts.png",
    },
  ]);

  console.log(setProducts);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-blue-100 text-blue-800";
      case "Low Stock":
        return "bg-orange-100 text-orange-800";
      case "Out of Stock":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full bg-white p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search product"
              className="pl-8 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white">
              <span className="mr-2">All Status</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="relative">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white">
              <span className="mr-2">All Categories</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white">
            <Sliders className="h-4 w-4 mr-2" />
            <span>Filters</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>

          <div className="relative">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white">
              <span className="mr-2">Sort by:</span>
              <span className="font-medium mr-2">Newest</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <Link href="/create_product">
            <button className="flex items-center px-3 py-2 bg-[#FF683A] text-white rounded-md">
              <span className="mr-2">+</span>
              <span>Add Product</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Product Name
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Product ID
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Price
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Rating
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Sales
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Earnings
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Stock
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Status
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                </div>
              </th>
              <th className="py-3 px-4 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-md object-cover mr-3"
                    />
                    <div>
                      <Link href="/product_detail">
                        <p className="font-medium text-gray-800">
                          {product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {product.category}
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{product.productId}</td>
                <td className="py-4 px-4 text-gray-600">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                    <span className="ml-1 text-gray-400">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{product.sales}</td>
                <td className="py-4 px-4 text-gray-600">
                  ${product.earnings.toLocaleString()}
                </td>
                <td className="py-4 px-4 text-gray-600">{product.stock}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="text-gray-600">
          Showing
          <select className="mx-1 px-1 py-1 border border-gray-300 rounded-md">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          out of 512
        </div>

        <div className="flex items-center space-x-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300">
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-500 text-white">
            1
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300">
            2
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300">
            3
          </button>

          <span className="px-2">...</span>

          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300">
            52
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementTable;
