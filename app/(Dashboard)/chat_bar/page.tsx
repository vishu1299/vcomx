"use client";
import { useState } from "react";
import {
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiSmile,
  FiPaperclip,
  FiSend,
} from "react-icons/fi";

const ChatUI = () => {
  const [messages, setMessages] = useState([
    {
      sender: "other",
      text: "The shipment has been delayed. We need to inform the customer and offer a discount.",
      time: "11:45 AM",
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      sender: "me",
      text: "I'm sorry to hear about the delay, Michael. Do you have an updated estimated delivery date?",
      time: "11:47 AM",
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      sender: "other",
      text: "Yes, the new delivery date is expected to be next Monday. We should notify the customer immediately.",
      time: "11:49 AM",
      image: "/shipment-delay.jpg",
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      sender: "me",
      text: "Absolutely. I'll draft a message to inform them and include a 10% discount on their next purchase as a goodwill gesture.",
      time: "11:50 AM",
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      sender: "other",
      text: "That sounds good. Make sure to emphasize that we're doing everything we can to expedite the process.",
      time: "11:52 AM",
      avatar: "/src/Assets/Images/lady.png",
    },
  ]);

  console.log(setMessages);

  const chatList = [
    {
      name: "John Smith",
      role: "Client",
      time: "01:50 PM",
      unread: 1,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Emma Brown",
      role: "P - Supplier",
      time: "12:30 PM",
      unread: 4,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Michael Green",
      role: "Client",
      time: "11:56 AM",
      unread: 0,
      active: true,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Sarah Johnson",
      role: "Customer",
      time: "09:45 AM",
      unread: 3,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Chris Lee",
      role: "Customer",
      time: "09:15 AM",
      unread: 2,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Robert White",
      role: "P - Logistics",
      time: "08:30 AM",
      unread: 2,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Nancy Taylor",
      role: "P - Designer",
      time: "Yesterday",
      unread: 0,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Linda Moore",
      role: "Customer",
      time: "Yesterday",
      unread: 0,
      avatar: "/src/Assets/Images/lady.png",
    },
    {
      name: "Noah Sharma",
      role: "Client",
      time: "06/06/28",
      unread: 0,
      avatar: "/src/Assets/Images/lady.png",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Chat List Sidebar */}
      <div className="w-1/4 bg-white p-4 border-r overflow-y-auto">
        <input
          type="text"
          placeholder="Search name, chat, etc"
          className="w-full p-2 border rounded-lg mb-4"
        />
        <div className="space-y-2">
          {chatList.map((chat, index) => (
            <div
              key={index}
              className={`flex items-center p-3 rounded-lg cursor-pointer ${
                chat.active
                  ? "bg-orange-100 border-l-4 border-orange-500"
                  : "hover:bg-gray-200"
              }`}
            >
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="text-sm font-medium flex justify-between items-center">
                  <span>{chat.name}</span>
                  {chat.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  {chat.role} • {chat.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <div className="flex items-center space-x-3">
            <img
              src="/src/Assets/Images/lady.png"
              alt="Michael Green"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-semibold">Michael Green</div>
              <div className="text-xs text-gray-500">Online</div>
            </div>
          </div>
          <div className="flex space-x-4 text-gray-500">
            <FiPhone className="cursor-pointer text-lg" />
            <FiVideo className="cursor-pointer text-lg" />
            <FiMoreVertical className="cursor-pointer text-lg" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              } items-end space-x-2`}
            >
              {msg.sender !== "me" && (
                <img
                  src={msg.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div
                className={`p-3 rounded-xl max-w-xs ${
                  msg.sender === "me"
                    ? "bg-[#FF683A] text-white"
                    : "bg-white border"
                }`}
              >
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="attachment"
                    className="mb-2 rounded-lg w-48"
                  />
                )}
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <div
                  className={`text-xs opacity-75 mt-1 ${
                    msg.sender === "me" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </div>
              </div>
              {msg.sender === "me" && (
                <img
                  src={msg.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="p-4 border-t bg-white flex items-center shadow-md">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-full">
            <FiSmile className="text-gray-500 text-xl cursor-pointer mr-2" />
            <input
              type="text"
              className="flex-1 p-2 bg-transparent outline-none"
              placeholder="Type a message..."
            />
            <FiPaperclip className="text-gray-500 text-xl cursor-pointer mx-2" />
            <button className="bg-[#FF683A] text-white px-4 py-2 flex items-center rounded-xl shadow-md">
              <FiSend className="text-xl mr-2" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
