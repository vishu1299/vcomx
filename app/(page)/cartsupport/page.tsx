"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPaperclip, FaSmile, FaPaperPlane, FaTimes } from "react-icons/fa";
import {
  FaBox,
  FaCalendarAlt,
  FaShoppingCart,
  FaTruck,
  FaBars,
  FaArrowLeft,
} from "react-icons/fa";

const initialMessages = [
  {
    id: 1,
    user: "Support Agent",
    avatar: "/src/Assets/Images/lady.png",
    text: "Hello John! I see you have a question about your Fashion Glasses order. How can I help you today?",
    time: "10:30 AM",
    sent: false,
  },
  {
    id: 2,
    user: "You",
    avatar: "/src/Assets/Images/lady.png",
    text: "Hi, I was wondering when my glasses will arrive. The tracking hasn't updated in 2 days.",
    time: "10:35 AM",
    sent: true,
  },
];

export default function ChatUI() {
  const [chatMessages, setChatMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      user: "You",
      avatar: "https://via.placeholder.com/40",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sent: true,
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessage("");

    // Mock response from support after 1 second
    setTimeout(() => {
      const responseMessage = {
        id: chatMessages.length + 2,
        user: "Support Agent",
        avatar: "/src/Assets/Images/lady.png",
        text: "I've checked your order status and see that your package is currently at our regional distribution center. There was a slight delay due to weather conditions, but it should resume transit within 24 hours. Your updated delivery estimate is now Jan 19, 2024. Would you like me to send you an email when it ships out?",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sent: false,
      };
      setChatMessages((prev) => [...prev, responseMessage]);
    }, 1000);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between bg-white p-3 shadow-md">
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {showSidebar ? (
              <FaTimes className="text-gray-600" />
            ) : (
              <FaBars className="text-gray-600" />
            )}
          </button>
          <h2 className="font-bold text-gray-800">Support Chat</h2>
        </div>
        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          Ticket #2024-1234
        </span>
      </div>

      {/* Order Details Sidebar - Mobile (Slide In) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 lg:hidden ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white h-full w-4/5 max-w-sm transform transition-transform duration-300 overflow-y-auto ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-bold text-lg text-gray-800">Order Details</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
          </div>

          {/* Sidebar Content for Mobile */}
          <div className="p-4 space-y-6 overflow-y-auto">
            {/* Order Product */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 shadow-sm border border-gray-100">
              <Image
                width={30}
                height={30}
                src="/src/Assets/Images/cart.png"
                alt="Product"
                className="rounded-md"
              />
              <div>
                <p className="font-semibold text-gray-700">
                  Fashion Glasses Sunny Premium
                </p>
                <p className="font-bold text-orange-500">$25</p>
                <p className="text-gray-600 text-sm">
                  Qty{" "}
                  <span className="border px-2 py-0.5 rounded bg-white">2</span>
                </p>
              </div>
            </div>

            {/* Order Status */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2">Order Status</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    In transit
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date</span>
                  <span className="text-gray-800">Jan 14, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Est.</span>
                  <span className="text-gray-800">Jan 18, 2024</span>
                </div>
              </div>
            </div>

            {/* Ticket Info */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2">
                Ticket Information
              </h3>
              <div className="space-y-2">
                <p className="text-sm flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-blue-500" /> Created: Jan
                  15, 2024
                </p>
                <p className="text-sm flex items-center text-gray-600">
                  <FaShoppingCart className="mr-2 text-orange-500" /> Order:
                  #ORD-2024-1234
                </p>
              </div>
            </div>

            {/* Customer */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2">Customer</h3>
              <div className="flex items-center space-x-3">
                <Image
                  width={30}
                  height={30}
                  src="/src/Assets/Images/lady.png"
                  alt="Customer"
                  className="rounded-full border-2 border-blue-500"
                />
                <div>
                  <p className="font-bold text-gray-800">John Smith</p>
                  <p className="text-sm text-gray-500">john.smith@email.com</p>
                  <div className="flex space-x-4 mt-1 text-xs text-gray-600">
                    <p>Customer since: Jan 2024</p>
                    <p>Orders: 3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Articles */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-700 mb-2">
                Helpful Resources
              </h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <FaBox className="mr-2 text-blue-500" /> How to track your
                  order
                </li>
                <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <FaTruck className="mr-2 text-green-500" /> Shipping &
                  delivery information
                </li>
                <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <FaShoppingCart className="mr-2 text-orange-500" /> Returns &
                  refunds policy
                </li>
                <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <FaPaperclip className="mr-2 text-purple-500" /> Payment
                  methods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Sidebar - Desktop */}
      <div className="hidden lg:block w-1/3 max-w-md bg-white shadow-lg rounded-l-xl overflow-y-auto">
        <div className="p-5 border-b">
          <h2 className="font-bold text-xl text-gray-800">Order Details</h2>
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            Ticket #2024-1234
          </span>
        </div>

        <div className="p-5 space-y-6 overflow-y-auto">
          {/* Order Product */}
          <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 shadow-sm border border-gray-100">
            <Image
              width={120}
              height={120}
              src="/src/Assets/Images/cart.png"
              alt="Product"
              className="rounded-md"
            />
            <div>
              <p className="font-semibold text-gray-700">
                Fashion Glasses Sunny Premium
              </p>
              <p className="font-bold text-orange-500">$25</p>
              <p className="text-gray-600">
                Qty{" "}
                <span className="border px-2 py-0.5 rounded bg-white">2</span>
              </p>
            </div>
          </div>

          {/* Order Status */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-2">Order Status</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  In transit
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date</span>
                <span className="text-gray-800">Jan 14, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Est.</span>
                <span className="text-gray-800">Jan 18, 2024</span>
              </div>
            </div>
          </div>

          {/* Ticket Info */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-2">
              Ticket Information
            </h3>
            <div className="space-y-2">
              <p className="text-sm flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-blue-500" /> Created: Jan
                15, 2024
              </p>
              <p className="text-sm flex items-center text-gray-600">
                <FaShoppingCart className="mr-2 text-orange-500" /> Order:
                #ORD-2024-1234
              </p>
            </div>
          </div>

          {/* Customer */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-2">Customer</h3>
            <div className="flex items-center space-x-3">
              <Image
                width={30}
                height={30}
                src="/src/Assets/Images/lady.png"
                alt="Customer"
                className="rounded-full border-2 border-blue-500"
              />
              <div>
                <p className="font-bold text-gray-800">John Smith</p>
                <p className="text-sm text-gray-500">john.smith@email.com</p>
                <div className="flex space-x-4 mt-1 text-xs text-gray-600">
                  <p>Customer since: Jan 2024</p>
                  <p>Orders: 3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Help Articles */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-2">
              Helpful Resources
            </h3>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
                <FaBox className="mr-2 text-blue-500" /> How to track your order
              </li>
              <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
                <FaTruck className="mr-2 text-green-500" /> Shipping & delivery
                information
              </li>
              <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
                <FaShoppingCart className="mr-2 text-orange-500" /> Returns &
                refunds policy
              </li>
              <li className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
                <FaPaperclip className="mr-2 text-purple-500" /> Payment methods
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col flex-1 h-full bg-white shadow-lg lg:rounded-r-xl">
        {/* Chat Header - Desktop */}
        <div className="hidden lg:flex p-4 bg-gray-50 shadow-sm border-b items-center space-x-4">
          <Image
            width={30}
            height={30}
            src="/src/Assets/Images/lady.png"
            alt="Support Agent"
            className="rounded-full w-10 h-10 border-2 border-blue-500"
          />
          <div>
            <h2 className="font-bold text-gray-800">Support Agent</h2>
            <p className="text-gray-500 text-sm">
              Online • Typically replies in 5 minutes
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4  mx-auto">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
              >
                {!msg.sent && (
                  <Image
                    width={30}
                    height={30}
                    src="/src/Assets/Images/lady.png"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full mr-2 self-end"
                  />
                )}
                <div
                  className={`p-3 rounded-lg max-w-xs sm:max-w-md shadow-sm ${
                    msg.sent
                      ? "bg-orange-500  rounded-br-none"
                      : "bg-white border border-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  <div
                    className={`text-xs mt-1 ${
                      msg.sent ? "text-orange-200" : "text-gray-500"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
                {msg.sent && (
                  <Image
                    width={30}
                    height={30}
                    src="/src/Assets/Images/lady.png"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full ml-2 self-end"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <form
          onSubmit={sendMessage}
          className="p-3 bg-white border-t flex items-center gap-2"
        >
          <button
            type="button"
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaPaperclip />
          </button>
          <button
            type="button"
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaSmile />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gray-50"
          />
          <button
            type="submit"
            className="bg-orange-500 p-3 rounded-lg text-orange hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!message.trim()}
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}
