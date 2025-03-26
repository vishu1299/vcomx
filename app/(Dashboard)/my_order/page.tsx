"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronsUpDown,
  Filter,
  Calendar,
  MoreVertical,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// StatsCard Component
const StatsCard = ({
  title,
  value,
  yesterday,
  icon,
  bgColor,
}: {
  title: string;
  value: number;
  yesterday: number;
  icon: React.ReactNode;
  bgColor: string;
}) => {
  return (
    <div
      className={`p-4 rounded-lg ${bgColor} flex justify-between items-center w-full sm:w-1/4`}
    >
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-xs text-gray-500">Yesterday: {yesterday}</p>
      </div>
      <div className="p-2 bg-white rounded-lg shadow">{icon}</div>
    </div>
  );
};
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Pagination Component

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
      <div className="text-gray-600 text-sm flex items-center gap-2 mb-2 sm:mb-0">
        Showing
        <div className="relative">
          <select
            className="border rounded px-2 py-1 text-sm"
            defaultValue="10"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        out of {totalPages * 2}
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="px-3 py-1 rounded border bg-white"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt;
        </button>
        {pages.slice(0, 5).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded border ${
              currentPage === page ? "bg-[#FF683A] text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded border bg-white"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

const orders = [
  {
    id: "#1001",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Classic Leather Jacket",
    date: "April 25, 2024",
    customer: "John Smith",
    total: "$50.00",
    payment: "Paid",
    status: "Completed",
    statusColor: "bg-blue-200 text-blue-700",
  },
  {
    id: "#1002",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Designer Handbag",
    date: "April 26, 2024",
    customer: "Emma Brown",
    total: "$150.00",
    payment: "Paid",
    status: "Return",
    statusColor: "bg-red-200 text-red-700",
  },
  {
    id: "#1003",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Running Sneakers",
    date: "April 27, 2024",
    customer: "Michael Green",
    total: "$75.00",
    payment: "Pending",
    status: "Shipped",
    statusColor: "bg-purple-200 text-purple-700",
  },
  {
    id: "#1004",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Women's Silk Scarf",
    date: "April 27, 2024",
    customer: "Sarah Johnson",
    total: "$40.00",
    payment: "Paid",
    status: "Canceled",
    statusColor: "bg-[#FFD7CB] text-[#FF683A]",
  },
  {
    id: "#1005",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Leather Wallet",
    date: "April 28, 2024",
    customer: "David Lee",
    total: "$35.00",
    payment: "Paid",
    status: "Completed",
    statusColor: "bg-blue-200 text-blue-700",
  },
  {
    id: "#1006",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Sports Watch",
    date: "April 29, 2024",
    customer: "Olivia Taylor",
    total: "$120.00",
    payment: "Pending",
    status: "Shipped",
    statusColor: "bg-purple-200 text-purple-700",
  },
  {
    id: "#1007",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Travel Backpack",
    date: "April 30, 2024",
    customer: "James Wilson",
    total: "$80.00",
    payment: "Paid",
    status: "Completed",
    statusColor: "bg-blue-200 text-blue-700",
  },
  {
    id: "#1008",
    image: "/src/Assets/Images/profileproducts.png",
    product: "Wireless Earbuds",
    date: "May 01, 2024",
    customer: "Sophia Martinez",
    total: "$60.00",
    payment: "Paid",
    status: "Return",
    statusColor: "bg-red-200 text-red-700",
  },
];

// OrderTable Component
const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 4;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4 text-gray-600 items-center">
          <span className="text-red-500 font-semibold bg-[#FFF6F3] px-4 rounded-sm">
            All Status (1400)
          </span>
          <span>Shipped (200)</span>
          <span>Completed (950)</span>
          <span>Canceled (150)</span>
          <span>Return (100)</span>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search order"
            className="border p-2 rounded-lg bg-[#F3F3F3]"
          />
          <Button className="flex items-center gap-2 bg-[#F3F3F3] px-3 py-2 rounded-lg text-[#555555]">
            <Filter className="w-4 h-4 text-[#555555]" /> Filters
          </Button>
          <Button className="flex items-center gap-2 bg-[#FF683A] text-white px-4 py-2 rounded-lg">
            <Calendar className="w-4 h-4" /> Today
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="p-3 text-left">
              <Checkbox />
            </th>
            <th className="p-3 text-left">
              Order ID <ChevronsUpDown className="w-4 h-4 inline" />
            </th>
            <th className="p-3 text-left">
              Product Name <ChevronsUpDown className="w-4 h-4 inline" />
            </th>
            <th className="p-3 text-left">
              Date <ChevronsUpDown className="w-4 h-4 inline" />
            </th>
            <th className="p-3 text-left">
              Customer Name <ChevronsUpDown className="w-4 h-4 inline" />
            </th>
            <th className="p-3 text-left">
              Total <ChevronsUpDown className="w-4 h-4 inline" />
            </th>
            <th className="p-3 text-left">
              Payment Status <ChevronsUpDown className="w-4 h-4 inline" />
            </th>
            <th className="p-3 text-left">
              Order Status <ChevronsUpDown className="w-4 h-4 inline" />
            </th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr
              key={index}
              className="border-t py-2 hover:bg-gray-50 my-3 text-left"
            >
              <td className="p-3">
                <Checkbox />
              </td>
              <td className="p-3">{order.id}</td>
              <div className="flex gap-2  p-3">
                <img src={order.image} className="h-10 my-auto" />
                <Link href="/order_detail">
                  <td className="">{order.product}</td>
                </Link>
              </div>
              <td className="p-3">{order.date}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.total}</td>
              <td className="p-3 text-gray-600">{order.payment}</td>
              <td
                className={`p-6 my-3 text-sm font-semibold rounded-full text-center min-w-[120px]`}
              >
                <p className={`${order.statusColor} rounded py-1`}>
                  {order.status}
                </p>
              </td>
              <td className="p-3 text-center">
                <button>
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Section */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div className=" space-y-4">
      <div className="flex gap-4">
        <StatsCard
          title="Total Orders"
          value={1200}
          yesterday={1135}
          icon={<span>📜</span>}
          bgColor="bg-purple-100"
        />
        <StatsCard
          title="Completed"
          value={950}
          yesterday={912}
          icon={<span>✅</span>}
          bgColor="bg-blue-100"
        />
        <StatsCard
          title="Canceled"
          value={150}
          yesterday={168}
          icon={<span>❌</span>}
          bgColor="bg-red-100"
        />
        <StatsCard
          title="Return"
          value={100}
          yesterday={105}
          icon={<span>🔄</span>}
          bgColor="bg-gray-100"
        />
      </div>
      <OrderTable />
    </div>
  );
};

export default Dashboard;
