"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  PlusIcon,
  ShoppingCartIcon,
  PackageIcon,
  Settings2Icon,
  ClockIcon,
  ClipboardIcon,
  ListIcon,
  Mic,
} from "lucide-react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { name: "Jan 2021", new: 20000, overdue: 30000 },
  { name: "Feb 2021", new: 35000, overdue: 25000 },
  { name: "Mar 2021", new: 27850, overdue: 42000 },
  { name: "Apr 2021", new: 40000, overdue: 32000 },
  { name: "May 2021", new: 60000, overdue: 45000 },
  { name: "Jun 2021", new: 25000, overdue: 20000 },
];

const scheduleItems = [
  {
    id: 1,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "clipboard",
  },
  {
    id: 2,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "clock",
  },
  {
    id: 3,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "package",
  },
  {
    id: 4,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "list",
  },
  {
    id: 5,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "clock",
  },
  {
    id: 6,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "list",
  },
  {
    id: 7,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "package",
  },
  {
    id: 8,
    time: "09:00 AM",
    title: "Team Meeting",
    description: "Weekly progress review",
    icon: "clipboard",
  },
];

const EcommerceDashboard = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  // Handle client-side rendering
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render the chart only on client-side
  const renderChart = () => {
    if (!isMounted) {
      return (
        <div className="w-full h-[300px] flex items-center justify-center bg-gray-100">
          <p>Loading chart...</p>
        </div>
      );
    }

    return (
      <div className="w-full h-[300px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="new"
              stroke="#172554"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="overdue"
              stroke="#60a5fa"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
          <p className="text-xs mb-1">March 2020</p>
          <p className="text-2xl font-bold mb-1">$27,850</p>
          <div className="flex items-center justify-between">
            <p className="text-xs">Total Sales</p>
            <p className="text-xs text-green-400">+18.5%</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" w-full min-h-screen ">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              Overview Analytics <span className="ml-2">🍉</span>
            </h1>
            <p className="text-gray-500 text-sm">
              E-commerce sales statistics for your products 1 month ago
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
              <Mic className="h-4 w-4" /> Go Live
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" /> Schedule
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-base font-medium mb-1">Todays Sales</p>
                  <h2 className="text-3xl font-bold mb-0">$25k</h2>
                  <p className="text-xs text-green-500 font-semibold mt-1">
                    +$8,700
                  </p>
                  <p className="text-xs text-gray-500">Since last week</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <path
                      d="M10 20 L15 15 L25 30 L35 10"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-base font-medium mb-1">Orders Completed</p>
                  <h2 className="text-3xl font-bold mb-0">410</h2>
                  <p className="text-xs text-green-500 font-semibold mt-1">
                    +212
                  </p>
                  <p className="text-xs text-gray-500">Since last week</p>
                </div>
                <div className="bg-green-100 p-2 rounded-lg">
                  <ShoppingCartIcon className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-base font-medium mb-1">New Orders</p>
                  <h2 className="text-3xl font-bold mb-0">$135k</h2>
                  <p className="text-xs text-green-500 font-semibold mt-1">
                    +$2700
                  </p>
                  <p className="text-xs text-gray-500">Since last week</p>
                </div>
                <div className="bg-orange-100 p-2 rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-orange-500"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M20 20v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-base font-medium mb-1">Total Products</p>
                  <h2 className="text-3xl font-bold mb-0">$300</h2>
                  <p className="text-xs text-red-500 font-semibold mt-1">
                    -$120
                  </p>
                  <p className="text-xs text-gray-500">Since last week</p>
                </div>
                <div className="bg-purple-100 p-2 rounded-lg">
                  <PackageIcon className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            {/* Sales Report */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sales Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-900 mr-1"></span>
                      New
                    </span>
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-400 mr-1"></span>
                      Overdue
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    6 months
                  </Button>
                </div>
                {renderChart()}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-100 p-4 rounded-lg mb-2">
                      <PlusIcon className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium">Add Product</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-red-100 p-4 rounded-lg mb-2">
                      <ShoppingCartIcon className="h-6 w-6 text-red-500" />
                    </div>
                    <p className="text-sm font-medium">Manage Orders</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-purple-100 p-4 rounded-lg mb-2">
                      <PackageIcon className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="text-sm font-medium">Inventory Control</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-4 rounded-lg mb-2">
                      <Settings2Icon className="h-6 w-6 text-gray-500" />
                    </div>
                    <p className="text-sm font-medium">Settings Hub</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today's Schedule */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Todays Schedule</CardTitle>
              <Button variant="link" className="text-red-500">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[600px] overflow-y-auto">
              {scheduleItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      item.icon === "clipboard"
                        ? "bg-teal-100"
                        : item.icon === "clock"
                        ? "bg-red-100"
                        : item.icon === "package"
                        ? "bg-green-100"
                        : "bg-blue-100"
                    }`}
                  >
                    {item.icon === "clipboard" && (
                      <ClipboardIcon className="h-5 w-5 text-teal-500" />
                    )}
                    {item.icon === "clock" && (
                      <ClockIcon className="h-5 w-5 text-red-500" />
                    )}
                    {item.icon === "package" && (
                      <PackageIcon className="h-5 w-5 text-green-500" />
                    )}
                    {item.icon === "list" && (
                      <ListIcon className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.time}</p>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDashboard;
