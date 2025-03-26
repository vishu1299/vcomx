"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsUpDown, Filter } from "lucide-react";

// Pagination Component
// const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

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
        out of 512
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

// Order Data
const orders = Array(10).fill({
  id: "#1001",
  product: "Classic Leather Jacket",
  image: "/src/Assets/Images/profileproducts.png",
  customer: "John Smith",
  rating: 4,
  review: "Ut enim ad minim veniam, nostrud exercitation ...",
  date: "April 26, 2024",
});

// OrderTable Component
const OrderTable = ({}: { currentPage: number }) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg overflow-x-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex gap-4 text-gray-600 items-center">
          <span className="text-red-500 font-semibold bg-[#FFF6F3] px-4 py-2 rounded-sm">
            All Reviews (1400)
          </span>
          <span>Pending (200)</span>
          <span>Approved (950)</span>
          <span>Trashed (150)</span>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search order"
            className="border p-2 rounded-lg bg-[#F3F3F3]"
          />
          <Button className="flex items-center gap-2 bg-[#F3F3F3] hover:bg-[#F3F3F3] px-3 py-2 rounded-lg text-[#555555]">
            <Filter className="w-4 h-4 text-[#555555]" /> Filters
          </Button>
          <Button className="flex items-center gap-2 bg-[#FF683A] text-white px-4 py-2 rounded-lg">
            Bulk Action
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="p-3 text-left">
              <Checkbox />
            </th>
            <th className="p-3 text-left">
              <div className="flex items-center gap-1">
                Type <ChevronsUpDown className="w-4 h-4" />
              </div>
            </th>
            <th className="p-3 text-left">
              <div className="flex items-center gap-1">
                Product Name <ChevronsUpDown className="w-4 h-4" />
              </div>
            </th>
            <th className="p-3 text-left">
              <div className="flex items-center gap-1">
                Customer Name <ChevronsUpDown className="w-4 h-4" />
              </div>
            </th>
            <th className="p-3 text-left">
              <div className="flex items-center gap-1">
                Rating <ChevronsUpDown className="w-4 h-4" />
              </div>
            </th>
            <th className="p-3 text-left">
              <div className="flex items-center gap-1">
                Review <ChevronsUpDown className="w-4 h-4" />
              </div>
            </th>
            <th className="p-3 text-left">
              <div className="flex items-center gap-1">
                Submitted On <ChevronsUpDown className="w-4 h-4" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={`border-t py-2 hover:bg-gray-50`}>
              <td className="p-3">
                <Checkbox />
              </td>
              <td className="p-3">Replies</td>
              <td className="p-3 flex items-center gap-2">
                <img
                  src={order.image}
                  alt="product"
                  className="w-8 h-8 rounded"
                />
                {order.product}
              </td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-500 ${
                      i < order.rating ? "" : "opacity-25"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </td>
              <td className="p-3 text-gray-600">{order.review}</td>
              <td className="p-3 text-gray-600">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 52;

  return (
    <div className=" space-y-4">
      <OrderTable currentPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;
