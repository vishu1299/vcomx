import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

import { RiVerifiedBadgeFill } from "react-icons/ri";
type Tag = {
  tagButton: string[];
  starIcon: string;
  reviews: string;
  price: string;
  discount: string;
};

type BestSellerItem = {
  image: string;
  playIcon: string;
  title: string;
  viewCount: string;
  like: string;
  tags: Tag[];
};

interface BrandItem {
  bg: string;
  fg: string;
  name: string;
  size: string;
}

const brands: BrandItem[] = [
  {
    bg: "/Assets/Images/CURATEDBRANDS/Background (1).png",
    fg: "/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },
  {
    bg: "/Assets/Images/CURATEDBRANDS/Background (2).png",
    fg: "/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },

  {
    bg: "/Assets/Images/CURATEDBRANDS/Background (3).png",
    fg: "/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },
  {
    bg: "/Assets/Images/CURATEDBRANDS/Background (1).png",
    fg: "/Assets/Images/CURATEDBRANDS/Frame 32.png",
    name: "LOREM",
    size: "200 ML",
  },
];

import { GoEye } from "react-icons/go";

import Image from "next/image";

const bestSellersData: BestSellerItem[] = [
  {
    image: "/Assets/Images/bestSellers/bestsellers-1.jpg",
    playIcon: "/Assets/Images/bestSellers/Icon.png",
    title: "Premium Smartwatch",
    viewCount: "45K views",
    like: "2.3K likes",
    tags: [
      {
        tagButton: ["SALE", "NEW", "-20%"],
        starIcon: "/Assets/Images/bestSellers/star-icon.png",
        reviews: "(1,234 reviews)",
        price: "$68.00",
        discount: "$98.00",
      },
    ],
  },
  {
    image: "/Assets/Images/bestSellers/bestsellers-2.jpg",
    playIcon: "/Assets/Images/bestSellers/Icon.png",
    title: "Premium Smartwatch",
    viewCount: "45K views",
    like: "2.3K likes",
    tags: [
      {
        tagButton: ["SALE", "NEW", "-20%"],
        starIcon: "/Assets/Images/bestSellers/star-icon.png",
        reviews: "(1,234 reviews)",
        price: "$68.00",
        discount: "$98.00",
      },
    ],
  },
  {
    image: "/Assets/Images/bestSellers/bestsellers-3.jpg",
    playIcon: "/Assets/Images/bestSellers/Icon.png",
    title: "Premium Smartwatch",
    viewCount: "45K views",
    like: "2.3K likes",
    tags: [
      {
        tagButton: ["SALE", "NEW"],
        starIcon: "/Assets/Images/bestSellers/star-icon.png",
        reviews: "(1,234 reviews)",
        price: "$68.00",
        discount: "$98.00",
      },
    ],
  },
  {
    image: "/Assets/Images/bestSellers/bestsellers-3.jpg",
    playIcon: "/Assets/Images/bestSellers/Icon.png",
    title: "Premium Smartwatch",
    viewCount: "45K views",
    like: "2.3K likes",
    tags: [
      {
        tagButton: ["SALE", "NEW"],
        starIcon: "/Assets/Images/bestSellers/star-icon.png",
        reviews: "(1,234 reviews)",
        price: "$68.00",
        discount: "$98.00",
      },
    ],
  },
];

const users = [
  {
    name: "Miracle",
    followers: "327K",
    image: "/Assets/Images/stories/pro-1.jpeg",
    verified: true,
  },
  {
    name: "Miracle Ahmad",
    followers: "12",
    image: "/Assets/Images/stories/pro-2.jpeg",
  },
  {
    name: "Miraclenair",
    followers: "Have no",
    image: "/Assets/Images/stories/pro-1.jpeg",
  },
  {
    name: "Miracleon",
    followers: "327K",
    image: "/Assets/Images/stories/pro-2.jpeg",
  },
  {
    name: "Miraclestop",
    followers: "99K",
    image: "/Assets/Images/stories/pro-1.jpeg",
  },
  {
    name: "Miraclesio",
    followers: "439",
    image: "/Assets/Images/stories/pro-2.jpeg",
  },
  {
    name: "Miraclestop",
    followers: "99K",
    image: "/Assets/Images/stories/pro-1.jpeg",
  },
  {
    name: "Miraclesio",
    followers: "439",
    image: "/Assets/Images/stories/pro-2.jpeg",
  },
];
const eventsData = [
  {
    image: "/Assets/Images/stories/store-1.jpeg",
    id: 1,

    shop: "Cosmetics & Beauty Products",

    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    EyeIcon: <GoEye />,
    viewer: "12,8K",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
    shopping: "Cosmetics",
    products: "Products",
    imageProfile: "/Assets/Images/stories/pro-1.jpeg",
    verified: true,
  },
  {
    image: "/Assets/Images/stories/store-1.jpeg",
    id: 1,

    shop: "Cosmetics & Beauty Products",

    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    EyeIcon: <GoEye />,
    viewer: "12,8K",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
    shopping: "Cosmetics",
    products: "Products",
    imageProfile: "/Assets/Images/stories/pro-1.jpeg",
    verified: true,
  },
  {
    image: "/Assets/Images/stories/store-1.jpeg",
    id: 1,

    shop: "Cosmetics & Beauty Products",

    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    EyeIcon: <GoEye />,
    viewer: "12,8K",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
    shopping: "Cosmetics",
    products: "Products",
    imageProfile: "/Assets/Images/stories/pro-1.jpeg",
    verified: true,
  },
];

const AllSearchResult = () => {
  return (
    <div className="">
      <div className=" flex justify-between">
        <p className=" font-Oswald text-[#1F1D2B] text-[30px] font-semibold">
          Store
        </p>
        <p className=" text-[18px] text-[#FF6F3C] font-medium font-Oswald">
          See All
        </p>
      </div>

      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4   rounded-lg">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-6 rounded-xl shadow-xl"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold flex items-center">
                {user.name}{" "}
                {user.verified && (
                  <span className="text-orange-500 ml-1">
                    <RiVerifiedBadgeFill className="text-[#FF6F3C]" />
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-500">
                {user.followers} followers
              </p>
            </div>
            <button className="bg-[#FF6F3C] text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Follow
            </button>
          </div>
        ))}
      </div>

      <div>
        <div className="mt-10">
          <p className=" font-Oswald font-semibold text-[#1F1D2B] text-[30px]">
            Live
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full mt-4">
            {eventsData.map((item, index) => (
              <div key={index} className="">
                <div className="relative   rounded-t-xl ">
                  <img
                    src={item.image}
                    alt="Event"
                    className="w-full h-[167px]"
                  />

                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    <span className="bg-red-500 px-3 py-1 rounded-full text-white">
                      Live
                    </span>
                    <div className="flex gap-2 items-center">
                      {item.EyeIcon}
                      <span>{item.viewer}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md p-4 ">
                  <p className="text-[#1F1D2B] font-semibold text-lg">
                    {item.shop}
                  </p>

                  <div className="flex gap-2 mt-2 text-[#888888]">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                      {item.shopping}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                      {item.products}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={item.imageProfile}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex items-center gap-1">
                      <p className="font-medium">Miracle</p>
                      <RiVerifiedBadgeFill className="text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-between items-center gap-4">
          <p className="text-[#1F1D2B] text-[30px] font-Oswald font-semibold">
            Videos
          </p>

          <button className="text-[#FF6F3C] px-4 py-2  font-Oswald  font-bold text-[18px]  rounded-full">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {bestSellersData.map((item, index) => (
            <div key={index}>
              <div className="relative   w-full max-w-[329px] mx-auto h-[439px] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute bg-black/30 inset-0 flex items-center justify-center">
                  <img
                    src={item.playIcon}
                    alt="Play Icon"
                    className="w-14 h-14"
                  />
                </div>
                <div className="absolute bottom-8 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <div className="flex justify-between text-sm">
                    <p>{item.viewCount}</p>
                    <p>{item.like}</p>
                  </div>
                </div>
              </div>
              <div className="">
                {item.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="mt-3">
                    <div className="flex gap-2">
                      {tag.tagButton.map((btn, btnIndex) => (
                        <div
                          key={btnIndex}
                          className={` text-[12px] font-Oswald text-[#FFFFFF]  font-medium px-2 py-1 rounded ${
                            btnIndex === 0
                              ? "bg-[#303341]"
                              : btnIndex === 1
                              ? "bg-[#3D93E2]"
                              : btnIndex === 2
                              ? "bg-[#DB4444]"
                              : ""
                          }`}
                        >
                          <button className=""> {btn}</button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center mt-2">
                      <img src={tag.starIcon} alt="Star Icon" className="" />
                      <p className=" text-[14px]  font-normal font-Oswald text-[#5E6267] ml-1">
                        {tag.reviews}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <p className=" text-[#121212] text-[16px] font-Oswald  font-medium">
                        {tag.price}
                      </p>
                      <p className=" text-[14px] text-[#A0A0A0] font-normal font-Oswald line-through">
                        {tag.discount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 flex   items-center justify-center">
        <div className=" w-full">
          <div className="flex   justify-between w-full ">
            <p className=" text-[30px] font-bold text-[#121212] font-Oswald py-3">
              Curated Brands
            </p>

            <button className=" text-[#FF6F3C] font-Oswald font-bold text-[18px]">
              See All
            </button>
          </div>
          <div className="relative w-full flex justify-center items-center ">
            <div className="w-full  grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-6  ">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 flex flex-col items-center justify-end h-80 w-full  "
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.bg}
                      alt="Background"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 rounded-lg"
                    />
                    <div className="absolute top-[30%] inset-0 flex flex-col items-center justify-center">
                      <Image
                        src={brand.fg}
                        alt=""
                        width={100}
                        height={50}
                        className="mb-3 rounded-lg"
                      />
                      <div className="mt-auto mb-4 bg-white px-3 py-1 text-sm rounded flex gap-2">
                        <p className="font-bold text-sm text-[#111111]">
                          {brand.name}
                        </p>
                        <p className="text-[#888888]">({brand.size})</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSearchResult;
