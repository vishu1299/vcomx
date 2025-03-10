"use client";

import { CiDeliveryTruck } from "react-icons/ci";
import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import cart from "@/public/Assets/Images/cart.png";

export default function CancelOrder() {
  const [reason, setReason] = useState("");

  return (
    <div className="bg-[#F8F8F8] min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Header Section */}
        <div className="mb-2">
          <h2 className="text-xl sm:text-2xl font-bold">Cancel Order</h2>
          <p className="text-gray-600 text-sm sm:text-md">Order #12345-67890</p>
        </div>

        {/* Product Card */}
        <div className="bg-white text-black p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4">
            <div className="flex-shrink-0">
              <Image
                src={cart}
                alt="Product"
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">Nike Air Max</h3>
              <p className="text-gray-700 text-sm">
                Color: Black | Quantity: 1
              </p>
              <div className="flex items-center gap-2 mt-1">
                <CiDeliveryTruck
                  size={20}
                  className="text-green-600 flex-shrink-0"
                />
                <p className="text-green-600 font-medium text-sm">
                  Estimated Delivery: Feb 15, 2025
                </p>
              </div>
            </div>
            <p className="text-xl font-bold mt-2 sm:mt-0 ">$199.99</p>
          </div>
        </div>

        {/* Cancellation Form */}
        <div className="bg-white text-black p-4 sm:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Cancellation Details</h3>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="cancel-reason"
                className="block text-gray-600 text-sm mb-2"
              >
                Reason for Cancellation
              </label>
              <Select onValueChange={setReason}>
                <SelectTrigger
                  id="cancel-reason"
                  className="w-full border-gray-300 focus:ring-[#FF6F3C] focus:border-none"
                >
                  {reason || "Select a reason"}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Changed Mind">Changed My Mind</SelectItem>
                  <SelectItem value="Found Better">
                    Found a Better Deal
                  </SelectItem>
                  <SelectItem value="Ordered by Mistake">
                    Ordered by Mistake
                  </SelectItem>
                  <SelectItem value="Shipping Delay">Shipping Delay</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label
                htmlFor="comments"
                className="block text-gray-600 text-sm mb-2"
              >
                Additional Comments (Optional)
              </label>
              <Textarea
                id="comments"
                className="w-full border-gray-300 focus:ring-[#FF6F3C] focus:border-[#FF6F3C] min-h-32"
                placeholder="Please provide any additional information about your cancellation..."
              />
            </div>

            {/* Warning Message */}
            <div className="bg-[#FFECC5] border-2 border-[#CA8A04] text-yellow-700 p-4 rounded-md flex gap-3">
              <FiAlertTriangle className="flex-shrink-0 my-auto" size={20} />
              <span className="text-sm">
                Cancellation is only possible if your order hasnt been shipped.
                Once shipped, youll need to initiate a return instead.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-start gap-3 pt-2">
              <Button className="bg-[#FF6F3C] hover:bg-[#ff6c37] text-white order-2 w-56 sm:order-1">
                Cancel Order
              </Button>
              <Button
                variant="outline"
                className="order-1 w-56 sm:order-2 border-2 border-[#ADADAD]"
              >
                Keep Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
