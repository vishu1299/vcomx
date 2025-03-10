import React from "react";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-1.jpeg",
  },
  {
    id: 2,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-2.jpeg",
  },
  {
    id: 3,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-1.jpeg",
  },
  {
    id: 1,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-1.jpeg",
  },
  {
    id: 2,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-2.jpeg",
  },
  {
    id: 3,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-1.jpeg",
  },
  {
    id: 1,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-1.jpeg",
  },
  {
    id: 2,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-2.jpeg",
  },
  {
    id: 3,
    name: "Garnier Skin Active BB Cream All In One Perfecting",
    price: 22.0,
    oldPrice: 36.0,
    rating: 5,
    reviews: "02",
    image: "/Assets/Images/products/product-1.jpeg",
  },
];

const BrandProductItem = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.map((product, index) => (
        <div key={index} className="rounded-lg shadow-lg">
          <div className="relative flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <p className="font-normal font-Oswald text-[#727272] text-[14px]">
                Cosmetic
              </p>
              <CiHeart size={20} className="text-[#727272]" />
            </div>
            <h3 className="text-[16px] font-Oswald text-[#303341] font-semibold mb-2">
              {product.name}
            </h3>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <MdStarRate key={index} />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">
                {product.reviews}{" "}
                <span className="text-[14px] text-[#727272] font-normal font-Oswald">
                  Reviews
                </span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[#FF9C9F] text-[19px] font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text[#727272] text-[15px] font-Oswald font-normal ml-2 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-sm">
                <LiaCartArrowDownSolid className="text-lg text-[#727272]" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandProductItem;
