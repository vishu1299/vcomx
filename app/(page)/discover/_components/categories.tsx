"use client";
import React, { useRef } from "react";
import {
  Shirt,
  Headphones,
  ShoppingBag,
  Home as HomeIcon,
  ChefHat,
  Volleyball,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  itemCount: number;
  backgroundImage: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  itemCount,
  backgroundImage,
  icon,
}) => {
  return (
    <div className="relative h-36 w-64 md:w-56 lg:w-48 xl:w-56 flex-shrink-0 rounded-lg overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="bg-white bg-opacity-90 rounded-full p-2 mb-2">
          {icon}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm">{itemCount} Items</p>
      </div>
    </div>
  );
};

const CategoryCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const categories = [
    {
      title: "Fashion",
      itemCount: 1234,
      backgroundImage: "/src/Assets/Images/products/product-1.jpeg",
      icon: <Shirt className="h-6 w-6 text-gray-800" />,
    },
    {
      title: "Electronics",
      itemCount: 1234,
      backgroundImage: "/src/Assets/Images/products/product-1.jpeg",
      icon: <Headphones className="h-6 w-6 text-gray-800" />,
    },
    {
      title: "Grocery",
      itemCount: 1234,
      backgroundImage: "/src/Assets/Images/products/product-1.jpeg",
      icon: <ShoppingBag className="h-6 w-6 text-gray-800" />,
    },
    {
      title: "Home",
      itemCount: 1234,
      backgroundImage: "/src/Assets/Images/products/product-1.jpeg",
      icon: <HomeIcon className="h-6 w-6 text-gray-800" />,
    },
    {
      title: "Food",
      itemCount: 1234,
      backgroundImage: "/src/Assets/Images/products/product-1.jpeg",
      icon: <ChefHat className="h-6 w-6 text-gray-800" />,
    },
    {
      title: "Sports",
      itemCount: 1234,
      backgroundImage: "/src/Assets/Images/products/product-1.jpeg",
      icon: <Volleyball className="h-6 w-6 text-gray-800" />,
    },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Categories
        </h2>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full shadow-md"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                itemCount={category.itemCount}
                backgroundImage={category.backgroundImage}
                icon={category.icon}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full shadow-md"
            onClick={scrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
