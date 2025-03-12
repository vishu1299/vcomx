"use client";
import React from "react";
import Image from "next/image";
import {
  FaBox,
  FaCheckCircle,
  FaDownload,
  FaMapMarkerAlt,
  FaShippingFast,
} from "react-icons/fa";
import { Card } from "@/components/ui/card";

const OrderTracking = () => {
  // Order items
  const orderItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      quantity: 1,
      status: "SHIPPED",
      image: "/src/Assets/Images/productcard.png",
    },
    {
      id: 2,
      name: "Premium Wireless Headphones",
      price: 199.99,
      quantity: 1,
      status: "Processing",
      image: "/src/Assets/Images/productcard.png",
    },
    {
      id: 3,
      name: "Premium Wireless Headphones",
      price: 199.99,
      quantity: 1,
      status: "SHIPPED",
      image: "/src/Assets/Images/productcard.png",
    },
  ];

  // Order summary
  const orderSummary = {
    subtotal: 499.98,
    shipping: 9.99,
    tax: 41.25,
    total: 551.22,
  };

  // Tracking and delivery info
  const trackingInfo = {
    trackingNumber: "1Z999AA123456789O",
    carrier: "FedEx Express",
    service: "Priority Shipping",
    weight: "2.5 kg",
  };

  const deliveryInfo = {
    name: "John Doe",
    address: "123 Main Street Apt 4B New York, NY 10001 United States",
    phoneEmail: "+1 (555) 123-4567 & john.doe@example.com",
  };

  return (
    <div className="max-w-6xl mx-auto p-3 sm:p-4 md:p-6 font-sans">
      {/* Track Order Header */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Track Order</h1>
        <p className="text-xl text-gray-600">
          Your order number was included in your order confirmation email.
        </p>
      </div>

      {/* Track Order Form */}
      <div className="mt-5 flex flex-col sm:flex-row mb-10 max-w-[70%] mx-auto">
        <input
          type="text"
          placeholder="Enter your order number"
          className="flex-grow  px-4 py-3 text-lg text-gray-500 border border-gray-300 focus:outline-none"
        />
        <button className="bg-orange text-white font-semibold py-3 px-6 text-lg sm:px-8 uppercase tracking-wide hover:bg-[#FF6A35] transition-colors duration-200">
          Track Order
        </button>
      </div>
      {/* Header Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Order #ORD-2024-1234
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Placed on December 12, 2023 at 10:30 AM
            </p>
          </div>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 text-sm rounded-md flex items-center self-start">
            <FaDownload className="mr-2" /> DOWNLOAD INVOICE
          </button>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-200 rounded-full mb-8">
          <div className="absolute top-0 left-0 h-full w-3/4 bg-orange rounded-full"></div>
          <div className="absolute top-0 left-0 flex justify-between w-full">
            <div className="w-10 h-10 bg-blue-500 rounded-full -mt-4 flex items-center my-auto justify-center">
              <FaBox className="text-white text-lg mx-auto" />
            </div>
            <div className="w-10 h-10 bg-yellow-500 rounded-full -mt-4 flex items-center justify-center">
              <FaShippingFast className="text-white text-lg mx-auto" />
            </div>
            <div className="w-10 h-10 bg-purple-500 rounded-full -mt-4 flex items-center justify-center">
              <FaCheckCircle className="text-white text-lg mx-auto" />
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full -mt-4 flex justify-center items-center">
              <FaCheckCircle className="text-white text-lg mx-auto my-auto" />
            </div>
          </div>
        </div>

        {/* Order Status */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <p className="text-gray-600 font-medium">Order Placed</p>
            <p className="text-xs sm:text-sm text-gray-500">
              Dec 12, 2023, 10:30 AM
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 font-medium">Processing</p>
            <p className="text-xs sm:text-sm text-gray-500">
              Feb 26, 2024, 11:00 AM
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 font-medium">Shipped</p>
            <p className="text-xs sm:text-sm text-gray-500">
              Feb 22, 2024, 12:30 PM
            </p>
          </div>
          <div className="text-center opacity-60">
            <p className="text-gray-400 font-medium">Delivered</p>
            <p className="text-xs sm:text-sm text-gray-400">
              Feb 28, 2024, 1:00 PM
            </p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mt-8">
          Estimated Delivery: January 28, 2025
        </h2>
      </div>

      {/* Shipment Details */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold">Shipment Details</h2>
            <div className="flex items-center flex-wrap mt-2">
              <p className="text-gray-600 text-sm sm:text-base">
                Tracking Number:{" "}
              </p>
              <p className="ml-1 text-sm sm:text-base font-medium">
                1Z999AA123456789O
              </p>
              <FaMapMarkerAlt className="text-orange-500 ml-2" />
            </div>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-gray-600 text-xs sm:text-sm">Last Updated</p>
            <p className="font-semibold text-sm sm:text-base">
              Feb 25, 2024, 10:30 AM
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-200 rounded-lg overflow-hidden mb-6">
          <Image
            src="/src/Assets/Images/map.png"
            alt="Delivery Map"
            width={800}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Tracking and Delivery Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4 sm:p-6">
            <h3 className="text-md sm:text-lg font-bold mb-4">
              Tracking Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">Tracking Number</p>
                <p className="font-medium text-sm sm:text-base">
                  {trackingInfo.trackingNumber}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">Carrier</p>
                <p className="font-medium text-sm sm:text-base">
                  {trackingInfo.carrier}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">Service</p>
                <p className="font-medium text-sm sm:text-base">
                  {trackingInfo.service}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">Weight</p>
                <p className="font-medium text-sm sm:text-base">
                  {trackingInfo.weight}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6">
            <h3 className="text-md sm:text-lg font-bold mb-4">
              Delivery Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">Name</p>
                <p className="font-medium text-sm sm:text-base">
                  {deliveryInfo.name}
                </p>
              </div>
              <div className="flex justify-between items-start">
                <p className="text-gray-600 text-sm">Shipping Address</p>
                <p className="font-medium text-sm sm:text-base text-right max-w-[70%]">
                  {deliveryInfo.address}
                </p>
              </div>
              <div className="flex justify-between items-start">
                <p className="text-gray-600 text-sm">Phone & Email</p>
                <p className="font-medium text-sm sm:text-base text-right max-w-[70%]">
                  {deliveryInfo.phoneEmail}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Order Items and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm lg:col-span-2">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Order Items</h2>
          <div className="space-y-6">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center border-b pb-6"
              >
                <div className="w-full sm:w-24 h-32 sm:h-24 bg-gray-100 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-md sm:text-lg mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Quantity: {item.quantity}
                  </p>
                  <div
                    className={`inline-block px-3 py-1 text-xs rounded-full ${
                      item.status === "SHIPPED"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
                <div className="font-bold text-lg mt-4 sm:mt-0">
                  $ {item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Order Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">${orderSummary.subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Shipping</p>
              <p className="font-medium">${orderSummary.shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Tax</p>
              <p className="font-medium">${orderSummary.tax.toFixed(2)}</p>
            </div>
            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold text-lg">
                  ${orderSummary.total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
