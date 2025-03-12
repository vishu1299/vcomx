import React from "react";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Dante Valdez",
    date: "23 Mar",
    rating: 5,
    comment:
      "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
  },
  {
    id: 2,
    name: "Dante Valdez",
    date: "23 Mar",
    rating: 4,
    comment:
      "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
  },
  {
    id: 3,
    name: "Dante Valdez",
    date: "23 Mar",
    rating: 3,
    comment:
      "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
  },
  {
    id: 4,
    name: "Dante Valdez",
    date: "23 Mar",
    rating: 2,
    comment:
      "Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.",
  },
];

const ratingSummary = [
  { stars: 5, count: 480 },
  { stars: 4, count: 220 },
  { stars: 3, count: 90 },
  { stars: 2, count: 30 },
  { stars: 1, count: 12 },
];

const totalReviews = ratingSummary.reduce((acc, item) => acc + item.count, 0);
const averageRating = 4.5;

const ReviewUpcomming: React.FC = () => {
  return (
    <div className=" rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Review</h2>
      <div className="flex flex-col md:flex-row items-center gap-12  rounded-lg mx-auto">
        <div className="text-center w-40">
          <p className="text-6xl font-bold">{averageRating.toFixed(1)}</p>
          <p className="text-gray-500 text-lg">{totalReviews} reviews</p>
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-4xl ${
                  i < Math.round(averageRating) ? "" : "opacity-30"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1 w-full md:w-auto">
          {ratingSummary.map(({ stars, count }) => (
            <div key={stars} className="flex items-center gap-5">
              <div className="flex text-yellow-400 text-3xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < stars ? "" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>

              <div className="relative flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                  style={{ width: `${(count / totalReviews) * 100}%` }}
                ></div>
              </div>

              <span className="text-lg text-gray-600">{stars} stars</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded-lg  shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <img
                  src={"/src/Assets/Images/brandprofile/store.png"}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-yellow-400 text-sm mt-1">
                  ⭐ {review.rating}.0
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <button className="text-blue-500 text-sm">reply</button>
            </div>
            <p className="mt-2 ml-14 text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewUpcomming;
