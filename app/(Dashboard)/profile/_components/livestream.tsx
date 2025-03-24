// components/StreamManagementTable.tsx
"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

interface Stream {
  id: number;
  title: string;
  date: string;
  time: string;
  price: number;
  status: "Scheduled" | "Draft" | "Cancelled";
  selected?: boolean;
}

const StreamManagementTable: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>(
    Array(10)
      .fill(0)
      .map((_, i) => ({
        id: i + 1,
        title: "Tips & Tricks on Upgrading Node.js",
        date: "2024-02-20",
        time: "14:00",
        price: 50.0,
        status: i === 2 ? "Cancelled" : i % 3 === 1 ? "Draft" : "Scheduled",
        selected: i === 1 || i === 2,
      }))
  );

  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const totalItems = 512;
  const totalPages = Math.ceil(totalItems / perPage);

  const getStatusClassName = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Draft":
        return "bg-purple-100 text-purple-800";
      case "Cancelled":
        return "bg-orange text-white";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const toggleSelectAll = (checked: boolean) => {
    setStreams(streams.map((stream) => ({ ...stream, selected: checked })));
  };

  const toggleSelect = (id: number, checked: boolean) => {
    setStreams(
      streams.map((stream) =>
        stream.id === id ? { ...stream, selected: checked } : stream
      )
    );
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="relative flex gap-5">
          <Input type="text" placeholder="Search order" className="pl-8 w-48" />
          <svg
            className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Button variant="outline" className="flex items-center">
            Status <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center">
            <SlidersHorizontal className="mr-1 h-4 w-4" /> Filters
          </Button>
          <Button className="flex items-center bg-orange">
            <Plus className="mr-1 h-4 w-4" /> Add Streams
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  onCheckedChange={(checked) =>
                    toggleSelectAll(checked as boolean)
                  }
                />
              </TableHead>
              <TableHead className="cursor-pointer">
                Stream Title <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Date & Time <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Products <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Status <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {streams.map((stream) => (
              <TableRow key={stream.id}>
                <TableCell>
                  <Checkbox
                    checked={stream.selected}
                    onCheckedChange={(checked) =>
                      toggleSelect(stream.id, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell>{stream.title}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {stream.date}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {stream.time}
                    </span>
                  </div>
                </TableCell>
                <TableCell>${stream.price.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusClassName(
                      stream.status
                    )}`}
                  >
                    {stream.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                  >
                    Action <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="text-gray-500">
          Showing {perPage} out of {totalItems}
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <Button
                key={pageNum}
                variant={pageNum === page ? "default" : "outline"}
                size="sm"
                className="h-8 w-8"
                onClick={() => setPage(pageNum)}
              >
                {pageNum}
              </Button>
            );
          })}

          {totalPages > 5 && (
            <>
              <span className="px-2">...</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8"
                onClick={() => setPage(totalPages)}
              >
                {totalPages}
              </Button>
            </>
          )}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StreamManagementTable;
