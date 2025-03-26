"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";

// Types for color, reviews, and sizes
type ColorOption = {
  id: string;
  name: string;
  bgColor: string;
};

type Review = {
  name: string;
  rating: number;
  date: string;
  comment: string;
};

// Color and Size Options
const colors: ColorOption[] = [
  { id: "black", name: "Black", bgColor: "bg-black" },
  { id: "blue", name: "Blue", bgColor: "bg-blue-500" },
  { id: "orange", name: "Orange", bgColor: "bg-orange" },
];

const sizes: string[] = [
  "US 6",
  "US 6.5",
  "US 7",
  "US 7.5",
  "US 8",
  "US 8.5",
  "US 9",
  "US 9.5",
  "US 10",
  "US 10.5",
  "US 11",
  "US 11.5",
  "US 12",
];

const reviews: Review[] = [
  {
    name: "John Doe",
    rating: 5,
    date: "25 Jul 28",
    comment:
      "These sneakers are super comfortable and perfect for my morning runs. The grip is excellent, and they fit just right. Highly recommend!",
  },
  {
    name: "Sarah Lee",
    rating: 4.5,
    date: "14 Aug 28",
    comment:
      "Great for both running and everyday use. The cushioning is amazing, and the shoes are very lightweight. Could use more color options.",
  },
  {
    name: "Michael Brown",
    rating: 4,
    date: "1 Sep 28",
    comment:
      "Good value for the price. The sneakers are sturdy and look stylish. However, they took a little time to break in.",
  },
  {
    name: "Ashutosh Paul",
    rating: 4,
    date: "1 Sep 28",
    comment:
      "This dude’s built like a tank and dresses like he’s about to drop a mixtape. But man, it took a while for his brain to load.",
  },
];

const ProductDetail: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [selectedSize, setSelectedSize] = useState<string>("US 9");
  const [mainImage, setMainImage] = useState<string>(
    "/src/Assets/Images/shoes.png"
  );

  const thumbnails = [
    "/src/Assets/Images/shoes.png",
    "/src/Assets/Images/shoes.png",
    "/src/Assets/Images/shoes.png",
    "/src/Assets/Images/shoes.png",
  ];

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Image and Thumbnail Section */}
      <div className="flex w-full flex-col space-y-6">
        <div className="flex">
          {/* Thumbnail Images */}
          <div className="flex flex-col space-y-2 mr-4">
            {thumbnails.map((img, index) => (
              <div
                key={index}
                className={`w-20 h-20 bg-gray-200 flex items-center justify-center rounded-lg cursor-pointer ${
                  mainImage === img ? "border-2 border-black" : ""
                }`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={`Shoe ${index + 1}`}
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center relative">
            <Image
              src={mainImage}
              alt="Running Sneakers"
              width={400}
              height={400}
              className="w-3/4 h-auto"
            />
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection reviews={reviews} />
      </div>

      {/* Product Info Section */}
      <ProductInfo
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
  );
};

// Reviews Section
const ReviewsSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => (
  <div className="mt-6 w-full bg-gray-100 p-6 rounded-lg shadow-sm">
    <h2 className="text-2xl font-bold">Rating & Reviews</h2>
    <div className="flex justify-between items-center mt-2">
      <div className="flex items-center space-x-1 text-yellow-500 text-2xl">
        <span>⭐ 4.6</span>
        <span className="text-sm text-gray-500">Based on 320 Reviews</span>
      </div>
      <div className="flex space-x-2">
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
          Filters
        </button>
        <select className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg">
          <option>Newest</option>
          <option>Oldest</option>
          <option>Highest Rated</option>
          <option>Lowest Rated</option>
        </select>
      </div>
    </div>

    {/* All Reviews in One Grey Box */}
    <div className="mt-4 space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
          <p className="text-yellow-500 mt-1">
            {"⭐".repeat(Math.floor(review.rating))}
          </p>
          <p className="text-gray-700 mt-2">{review.comment}</p>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-end space-x-2 mt-6">
      <button className="px-3 py-1 bg-[#FF683A] text-white rounded">1</button>
      <button className="px-3 py-1 bg-gray-200 rounded">2</button>
      <button className="px-3 py-1 bg-gray-200 rounded">3</button>
      <button className="px-3 py-1 bg-gray-200 rounded">...</button>
    </div>
  </div>
);

// Product Info Section
const ProductInfo: React.FC<{
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}> = ({ selectedColor, setSelectedColor, selectedSize, setSelectedSize }) => (
  <div>
    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
      Footwear
    </span>
    <div className="flex items-start justify-between mt-2">
      <h1 className="text-3xl font-bold">Running Sneakers</h1>
      <button className="flex items-center space-x-2 bg-[#FF683A] text-white px-4 py-2 rounded-lg hover:bg-orange transition-all">
        <Pencil size={16} />
        <span>Edit</span>
      </button>
    </div>
    <p className="text-gray-600 mt-1">Product ID: RNS-7892</p>
    <p className="text-gray-500 mt-4">
      The Running Sneakers are designed for comfort and performance...
    </p>

    <div className="mt-6 flex gap-16 items-center">
      <div>
        <p className="text-xl font-normal">Price</p>
        <p className="text-4xl font-semibold">$75.00</p>
      </div>
      <div>
        <p className="text-xl font-normal">Stock</p>
        <p className="text-4xl font-semibold">200</p>
      </div>
    </div>

    {/* Size Options */}
    <SizeSelector
      sizes={sizes}
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
    />

    {/* Color Options */}
    <ColorSelector
      colors={colors}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
    />

    {/* Vertical Details Section */}
    <DetailsSection />
  </div>
);

// Size Selector
const SizeSelector: React.FC<{
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}> = ({ sizes, selectedSize, setSelectedSize }) => (
  <div className="mt-6">
    <p className="text-lg font-semibold mb-2">Size</p>
    <div className="grid grid-cols-4 gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`border rounded-lg px-3 py-1 text-sm ${
            selectedSize === size
              ? "border-black bg-gray-200"
              : "border-gray-300"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
);

// Color Selector
const ColorSelector: React.FC<{
  colors: ColorOption[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}> = ({ colors, selectedColor, setSelectedColor }) => (
  <div className="mt-6">
    <p className="text-lg font-semibold mb-2">Color</p>
    <div className="flex space-x-3">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => setSelectedColor(color.id)}
          className={`w-8 h-8 rounded-sm ${color.bgColor} border-2 ${
            selectedColor === color.id ? "border-black" : "border-transparent"
          }`}
        />
      ))}
    </div>
  </div>
);

// Product Details Section
const DetailsSection: React.FC = () => (
  <div className="mt-6 space-y-6">
    <DetailBlock
      title="Product Details"
      items={[
        "Style: Athletic/Casual",
        "Pattern: Solid with subtle branding",
        "Closure Type: Lace-up",
        "Sole: Rubber with grip-enhancing texture",
        "Insole: Cushioned for extra comfort",
        "Heel Type: Flat",
        "Toe Shape: Round",
      ]}
    />
    <DetailBlock
      title="Materials"
      items={["Upper: Mesh and synthetic", "Sole: Rubber", "Insole: EVA foam"]}
    />
    <DetailBlock
      title="Care Instructions"
      items={[
        "Clean with a damp cloth",
        "Air dry only",
        "Avoid direct exposure to sunlight for prolonged periods",
        "Do not machine wash or tumble dry",
      ]}
    />
  </div>
);

// Detail Block
const DetailBlock: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div>
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <ul className="text-gray-600 list-disc pl-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProductDetail;
