import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FiEdit, FiMapPin, FiCreditCard, FiTrash2 } from "react-icons/fi";

interface OrderType {
  id: string;
  date: string;
  items: number;
  total: string;
  status: string;
}

const UserAccount: React.FC = () => {
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
    <div className="container w-full mx-auto max-w-4xl">
      {/* Main Content */}
      <div className="w-full">
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
            <CardTitle className="text-xl mb-4">Recent Orders</CardTitle>
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
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-600">#{order.id}</td>
                      <td className="py-3 px-4 text-gray-600">{order.date}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {order.items} items
                      </td>
                      <td className="py-3 px-4 text-gray-600">{order.total}</td>
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
  );
};

export default UserAccount;
