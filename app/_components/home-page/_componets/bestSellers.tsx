import Link from "next/link";
import React from "react";

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

const BestSellers: React.FC = () => {
  const bestSellersData: BestSellerItem[] = [
    {
      image: "/src/Assets/Images/bestSellers/bestsellers-1.jpg",
      playIcon: "/src/Assets/Images/bestSellers/Icon.png",
      title: "Premium Smartwatch",
      viewCount: "45K views",
      like: "2.3K likes",
      tags: [
        {
          tagButton: ["SALE", "NEW", "-20%"],
          starIcon: "/src/Assets/Images/bestSellers/star-icon.png",
          reviews: "(1,234 reviews)",
          price: "$68.00",
          discount: "$98.00",
        },
      ],
    },
    {
      image: "/src/Assets/Images/bestSellers/bestsellers-2.jpg",
      playIcon: "/src/Assets/Images/bestSellers/Icon.png",
      title: "Premium Smartwatch",
      viewCount: "45K views",
      like: "2.3K likes",
      tags: [
        {
          tagButton: ["SALE", "NEW", "-20%"],
          starIcon: "/src/Assets/Images/bestSellers/star-icon.png",
          reviews: "(1,234 reviews)",
          price: "$68.00",
          discount: "$98.00",
        },
      ],
    },
    {
      image: "/src/Assets/Images/bestSellers/bestsellers-3.jpg",
      playIcon: "/src/Assets/Images/bestSellers/Icon.png",
      title: "Premium Smartwatch",
      viewCount: "45K views",
      like: "2.3K likes",
      tags: [
        {
          tagButton: ["SALE", "NEW"],
          starIcon: "/src/Assets/Images/bestSellers/star-icon.png",
          reviews: "(1,234 reviews)",
          price: "$68.00",
          discount: "$98.00",
        },
      ],
    },
    {
      image: "/src/Assets/Images/bestSellers/bestsellers-3.jpg",
      playIcon: "/src/Assets/Images/bestSellers/Icon.png",
      title: "Premium Smartwatch",
      viewCount: "45K views",
      like: "2.3K likes",
      tags: [
        {
          tagButton: ["SALE", "NEW"],
          starIcon: "/src/Assets/Images/bestSellers/star-icon.png",
          reviews: "(1,234 reviews)",
          price: "$68.00",
          discount: "$98.00",
        },
      ],
    },
  ];

  return (
    <div className="py-4">
      <div className="flex items-center gap-4">
        <p className="text-[#454545] text-[44px] font-Oswald font-semibold">
          Best Sellers
        </p>
        <div className="flex-1 border-b border-gray-400"></div>
        <Link href="/storeProfile">
          <button className="bg-[#FF6F3C] px-4 py-2 text-[16px] font-Oswald font-bold text-white rounded-full">
            View All
          </button>
        </Link>
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
  );
};

export default BestSellers;
