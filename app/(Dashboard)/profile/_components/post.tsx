// components/PostManagementTable.tsx
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
  SlidersHorizontal,
  Plus,
} from "lucide-react";

interface Post {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  pageViews: string;
  status: "Archived" | "Published" | "Unpublish";
  selected?: boolean;
}

const PostManagementTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(
    Array(10)
      .fill(0)
      .map((_, i) => ({
        id: i + 1,
        title: "Tips & Tricks on Upgrading Node.js",
        thumbnail: "/thumbnail.jpg",
        category: "Fashion Fashion",
        pageViews: "12.2k",
        status:
          i === 0 || i === 7
            ? "Archived"
            : i === 3 || i === 6 || i === 9
            ? "Unpublish"
            : "Published",
        selected: i === 1 || i === 2,
      }))
  );

  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [selectedCount, setSelectedCount] = useState(2);
  const totalItems = 512;
  const totalPages = Math.ceil(totalItems / perPage);

  const getStatusClassName = (status: string) => {
    switch (status) {
      case "Archived":
        return "bg-purple-100 text-purple-800";
      case "Published":
        return "bg-blue-100 text-blue-800";
      case "Unpublish":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const toggleSelectAll = (checked: boolean) => {
    setPosts(posts.map((post) => ({ ...post, selected: checked })));
    setSelectedCount(checked ? posts.length : 0);
  };

  const toggleSelect = (id: number, checked: boolean) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, selected: checked } : post
      )
    );
    setSelectedCount((prev) => (checked ? prev + 1 : prev - 1));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          {selectedCount > 0 && (
            <span className="text-sm text-gray-500">
              {selectedCount} Selected
            </span>
          )}
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            Delete
          </Button>
          <Button variant="outline" size="sm">
            Archive
          </Button>
          <Button variant="outline" size="sm">
            Publish
          </Button>
          <Button variant="outline" size="sm">
            Unpublish
          </Button>
        </div>

        <div className="flex space-x-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search order"
              className="pl-8 w-48"
            />
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
          </div>
          <Button variant="outline" className="flex items-center">
            Status <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center">
            <SlidersHorizontal className="mr-1 h-4 w-4" /> Filters
          </Button>
          <Button className="bg-orange hover:bg-orange text-white flex items-center">
            <Plus className="mr-1 h-4 w-4" /> Add Post
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
                Article <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Category <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Page Views <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead className="cursor-pointer">
                Status <ChevronDown className="inline h-4 w-4 ml-1" />
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <Checkbox
                    checked={post.selected}
                    onCheckedChange={(checked) =>
                      toggleSelect(post.id, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 overflow-hidden rounded">
                      <img
                        src="/src/Assets/Images/profileproducts.png"
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span>{post.title}</span>
                  </div>
                </TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.pageViews}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusClassName(
                      post.status
                    )}`}
                  >
                    {post.status}
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

          <Button
            variant="default"
            size="sm"
            className="h-8 w-8 bg-orange hover:bg-orange"
          >
            1
          </Button>

          <Button variant="outline" size="sm" className="h-8 w-8">
            2
          </Button>

          <Button variant="outline" size="sm" className="h-8 w-8">
            3
          </Button>

          <span className="px-2">...</span>

          <Button variant="outline" size="sm" className="h-8 w-8">
            52
          </Button>

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

export default PostManagementTable;
