import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  FiEdit,
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiCreditCard,
  FiSettings,
  FiHelpCircle,
  FiTrash2,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

interface OrderType {
  id: string;
  date: string;
  items: number;
  total: string;
  status: string;
}

const UserDashboard: React.FC = () => {
  const orders: OrderType[] = [
    {
      id: "ORD-7352",
      date: "Jan 15, 2024",
      items: 3,
      total: "$245.99",
      status: "ORD-7352",
    },
    {
      id: "ORD-7352",
      date: "Jan 15, 2024",
      items: 3,
      total: "$245.99",
      status: "ORD-7352",
    },
    {
      id: "ORD-7352",
      date: "Jan 15, 2024",
      items: 3,
      total: "$245.99",
      status: "ORD-7352",
    },
    {
      id: "ORD-7352",
      date: "Jan 15, 2024",
      items: 3,
      total: "$245.99",
      status: "ORD-7352",
    },
    {
      id: "ORD-7352",
      date: "Jan 15, 2024",
      items: 3,
      total: "$245.99",
      status: "ORD-7352",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full bg-[#F8F8F8] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl min-h-screen py-4">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 space-y-5">
          {/* User Profile Header */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative">
              <div className="bg-[#FF6A3D] h-24"></div>
              <div className="flex flex-col items-center -mt-12 pb-4 px-4">
                <div className="rounded-full overflow-hidden border-4 border-white w-24 h-24">
                  <Image
                    src="/src/Assets/Images/lady.png"
                    width={96}
                    height={96}
                    alt="Alex Coal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mt-2 text-center">
                  Alex Coal
                </h2>
                <p className="text-gray-500 text-sm text-center">
                  Member since Jan 2024
                </p>

                <button className="mt-3 flex items-center gap-1 text-orange border border-orange rounded-full px-4 py-1 text-sm">
                  <FiEdit className="w-4 h-4" /> Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-2 grid grid-cols-3 sm:grid-cols-1 gap-2">
              <div className="group flex items-center gap-3 p-3 hover:bg-[#fff2ed] rounded-md text-gray-700">
                <FiShoppingBag className="w-5 h-5 group-hover:text-orange" />
                <span className="hidden sm:inline">My Orders</span>
              </div>

              <div className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md">
                <FiHeart className="w-5 h-5 group-hover:text-orange" />
                <span className="hidden sm:inline">Wishlist</span>
              </div>

              <div className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md">
                <FiMapPin className="w-5 h-5 group-hover:text-orange" />
                <span className="hidden sm:inline">Saved Addresses</span>
              </div>

              <div className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md">
                <FiCreditCard className="w-5 h-5 group-hover:text-orange" />
                <span className="hidden sm:inline">Payment Methods</span>
              </div>

              <div className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md">
                <FiSettings className="w-5 h-5 group-hover:text-orange" />
                <span className="hidden sm:inline">Account Settings</span>
              </div>

              <Link href="/helpandsupport">
                <div className="group flex items-center gap-3 p-3 text-gray-700 hover:bg-[#fff2ed] rounded-md">
                  <FiHelpCircle className="w-5 h-5 group-hover:text-orange" />
                  <span className="hidden sm:inline">Help Center</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-6">
          {/* Welcome Card */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl sm:text-4xl font-semibold">
                Welcome Back
              </CardTitle>
              <p className="text-gray-600 text-sm sm:text-base">
                Youve earned 120 points this month. Keep shopping to reach Gold
                tier!
              </p>
            </CardHeader>
            <CardContent>
              <Progress value={25} className="h-2 bg-gray-200 text-orange" />
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                360 more points to Gold tier
              </p>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="mb-6">
            <CardHeader className="pb-0">
              <CardTitle className="text-xl">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-100 text-gray-700 text-sm">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium">
                        Order ID
                      </th>
                      <th className="text-left py-3 px-4 font-medium">Date</th>
                      <th className="text-left py-3 px-4 font-medium">Items</th>
                      <th className="text-left py-3 px-4 font-medium">Total</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-600">#{order.id}</td>
                        <td className="py-3 px-4 text-gray-600">
                          {order.date}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {order.items} items
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {order.total}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          #{order.status}
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-[#FF6A3D] text-sm hover:underline">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Saved Address */}
          <Card className="mb-6">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-0">
              <CardTitle className="text-xl mb-2 sm:mb-0">
                Saved Address
              </CardTitle>
              <button className="text-[#FF6A3D] text-sm hover:underline">
                + Add New Address
              </button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Shipping Address */}
                <div className="border rounded-md p-4 relative">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Default Shipping Address
                    </h3>
                    <button className="text-orange">
                      <FiEdit className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-lg">Sarah Johnson</p>
                    <div className="flex gap-2 text-gray-600 text-sm">
                      <FiMapPin className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                      <span>
                        123 Main Street, Apt 4B New York, NY 10001 United States
                      </span>
                    </div>
                    <div className="flex gap-2 text-gray-600 text-sm">
                      <FiCreditCard className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="border rounded-md p-4 relative">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Default Billing Address
                    </h3>
                    <button className="text-orange">
                      <FiEdit className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-lg">Sarah Johnson</p>
                    <div className="flex gap-2 text-gray-600 text-sm">
                      <FiMapPin className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                      <span>
                        123 Main Street, Apt 4B New York, NY 10001 United States
                      </span>
                    </div>
                    <div className="flex gap-2 text-gray-600 text-sm">
                      <FiCreditCard className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-0">
              <CardTitle className="text-xl mb-2 sm:mb-0">
                Payment Methods
              </CardTitle>
              <button className="text-[#FF6A3D] text-sm hover:underline">
                + Add New Card
              </button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-4">
                {/* Credit Card 1 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
                  <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <div className="bg-gray-200 w-12 h-8 rounded"></div>
                    <div>
                      <p className="font-medium">•••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/25</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-orange">
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                    <button className="text-orange">
                      <FiEdit className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Credit Card 2 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <div className="bg-gray-200 w-12 h-8 rounded"></div>
                    <div>
                      <p className="font-medium">•••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/25</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-orange">
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                    <button className="text-orange">
                      <FiEdit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
