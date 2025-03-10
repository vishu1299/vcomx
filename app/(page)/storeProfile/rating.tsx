import { useState } from "react";

import { AiFillStar } from "react-icons/ai";

const ratings: number[] = [5, 4, 3, 2, 1];

const RatingProducts: React.FC = () => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="font-bold text-lg mb-4">Rating</h2>
      <div className="space-y-3">
        {ratings.map((rating, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div
              className={`w-5 h-5 border border-[#E9E9E9] rounded-sm ${
                selectedRatings.includes(rating) ? "bg-black" : "bg-white"
              }`}
              onClick={() => toggleRating(rating)}
            />
            <div className="flex items-center">
              {[...Array(rating)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400" size={18} />
              ))}
            </div>
            <span className=" text-[#727272] text-[14px]  font-Oswald font-normal">
              & up
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingProducts;
