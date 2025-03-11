import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";

interface User {
  name: string;
  followers: string;
  image: string;
  verified?: boolean;
}

const users: User[] = [
  {
    name: "Miracle",
    followers: "327K",
    image: "/src/Assets/Images/stories/pro-1.jpeg",
    verified: true,
  },
  {
    name: "Miracle Ahmad",
    followers: "12",
    image: "/src/Assets/Images/stories/pro-2.jpeg",
  },
  {
    name: "Miraclenair",
    followers: "Have no",
    image: "/src/Assets/Images/stories/pro-1.jpeg",
  },
  {
    name: "Miracleon",
    followers: "327K",
    image: "/src/Assets/Images/stories/pro-2.jpeg",
  },
  {
    name: "Miraclestop",
    followers: "99K",
    image: "/src/Assets/Images/stories/pro-1.jpeg",
  },
  {
    name: "Miraclesio",
    followers: "439",
    image: "/src/Assets/Images/stories/pro-2.jpeg",
  },
  {
    name: "Miraclestop",
    followers: "99K",
    image: "/src/Assets/Images/stories/pro-1.jpeg",
  },
  {
    name: "Miraclesio",
    followers: "439",
    image: "/src/Assets/Images/stories/pro-2.jpeg",
  },
];

const Stores = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-8 md:gap-10">
        {/* Following Stores Section */}
        <div>
          <div className="flex justify-between items-center mb-4 mt-3">
            <h2 className="font-Oswald text-[#1F1D2B] text-xl sm:text-2xl md:text-3xl font-semibold">
              Following Store
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {users.map((user, index) => (
              <div
                key={`following-${index}`}
                className="flex items-center bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 40px, 48px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold flex items-center text-sm sm:text-base truncate">
                    {user.name}
                    {user.verified && (
                      <span className="text-orange-500 ml-1 flex-shrink-0">
                        <RiVerifiedBadgeFill className="text-[#FF6F3C]" />
                      </span>
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {user.followers} followers
                  </p>
                </div>
                <button className="bg-[#FF6F3C] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-3xl text-xs sm:text-sm hover:bg-orange-600 transition-colors flex-shrink-0 whitespace-nowrap">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Stores Section */}
        <div className="mt-4 sm:mt-6 md:mt-10">
          <div className="flex justify-between items-center mb-4 mt-3">
            <h2 className="font-Oswald text-[#1F1D2B] text-xl sm:text-2xl md:text-3xl font-semibold">
              Recommended Store
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {users.map((user, index) => (
              <div
                key={`recommended-${index}`}
                className="flex flex-col items-center bg-white p-3 sm:p-4 gap-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-1">
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 40px, 48px"
                  />
                </div>
                <div className="w-full text-center">
                  <h3 className="font-semibold flex justify-center items-center text-sm sm:text-base">
                    {user.name}
                    {user.verified && (
                      <span className="text-orange-500 ml-1">
                        <RiVerifiedBadgeFill className="text-[#FF6F3C]" />
                      </span>
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {user.followers} followers
                  </p>
                </div>
                <button className="bg-[#FF6F3C] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-3xl text-xs sm:text-sm hover:bg-orange-600 transition-colors mt-1">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
