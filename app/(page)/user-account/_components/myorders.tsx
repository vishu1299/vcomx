// app/(page)/orders/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrderItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  variant: string;
  status: "Delivered" | "Shipped" | "Processing";
  date: string;
  total: number;
}

const OrdersPage = () => {
  const orders: OrderItem[] = [
    {
      id: "ORD-2024-001",
      image: "/src/Assets/Images/seventh-page/car1.jpg",
      name: "Wireless Noise-Cancelling Headphones",
      price: 129.0,
      quantity: 1,
      variant: "Space Gray",
      status: "Delivered",
      date: "Jan 15, 2024",
      total: 299.99,
    },
    {
      id: "ORD-2024-002",
      image: "/src/Assets/Images/seventh-page/car4.jpg",
      name: "Smartwatch",
      price: 299.0,
      quantity: 2,
      variant: "Silver",
      status: "Shipped",
      date: "Jan 16, 2024",
      total: 299.99,
    },
    {
      id: "ORD-2024-003",
      image: "/src/Assets/Images/seventh-page/car3.jpg",
      name: "Bluetooth Speakers",
      price: 99.0,
      quantity: 3,
      variant: "Black",
      status: "Processing",
      date: "Jan 17, 2024",
      total: 299.99,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Shipped":
        return "bg-blue-100 text-blue-600";
      case "Processing":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="container w-full mx-auto   max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <ShoppingCart className="w-6 h-6 mr-2 text-gray-700" />
          <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-60"
              placeholder="Search orders..."
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-40 text-red-500">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-56">
              <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default sorting</SelectItem>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border rounded-md shadow-sm overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-between p-4 border-b bg-gray-50">
              <div className="mb-2 md:mb-0">
                <span className="text-sm text-gray-500">Order ID: </span>
                <span className="text-sm font-medium">{order.id}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Placed on </span>
                <span className="text-sm font-medium">{order.date}</span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex flex-col md:flex-row items-start">
                <div className="w-20 h-20 relative rounded-md overflow-hidden mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={order.image}
                    alt={order.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-800 mb-1 md:mb-0">
                      {order.name}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </div>
                  </div>

                  <div className="text-orange font-medium mb-2">
                    ${order.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    Quantity: {order.quantity} | Variant: {order.variant}
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-3 md:mb-0">
                      <span className="text-sm text-gray-500">Total: </span>
                      <span className="font-medium">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="text-xs">
                        Track order
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="text-xs bg-orange hover:bg-orange"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
