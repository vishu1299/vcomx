"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ChevronRight, Star, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

interface Review {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  description: string;
  time: string;
  rating: number;
  product: {
    name: string;
    imageUrl: string;
  };
}

const CampaignReviewList: React.FC = () => {
  const [date, setDate] = React.useState<{
    from?: Date;
    to?: Date;
  }>({
    from: new Date(2028, 4, 1),
    to: new Date(2028, 7, 25),
  });

  const reviews: Review[] = [
    {
      id: "1",
      user: {
        name: "Joseph",
        avatarUrl: "/src/Assets/Images/lady.png",
      },
      description:
        "A comprehensive campaign to promote the new Spring Collection, featuring a mix of vibrant and pastel colors that capture the essence of the season. Targeted ads and social media posts are driving traffic to the collection page.",
      time: "11:00 AM",
      rating: 4,
      product: {
        name: "Classic Leather Jacket",
        imageUrl: "/src/Assets/Images/lady.png",
      },
    },
    {
      id: "2",
      user: {
        name: "Joseph",
        avatarUrl: "/src/Assets/Images/lady.png",
      },
      description:
        "A comprehensive campaign to promote the new Spring Collection, featuring a mix of vibrant and pastel colors that capture the essence of the season. Targeted ads and social media posts are driving traffic to the collection page.",
      time: "11:00 AM",
      rating: 4,
      product: {
        name: "Classic Leather Jacket",
        imageUrl: "/src/Assets/Images/lady.png",
      },
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Date Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-gray-50 border-gray-200"
            >
              <CalendarIcon className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-normal">
                {date.from && date.to
                  ? `${format(date.from, "MMM d, yyyy")} - ${format(
                      date.to,
                      "MMM d, yyyy"
                    )}`
                  : "Select Date Range"}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              defaultMonth={date.from || new Date()}
              selected={date as { from: Date; to: Date }} // Ensure type matches DateRange
              onSelect={(selectedDate) => {
                if (selectedDate?.from && selectedDate?.to) {
                  setDate(selectedDate);
                } else {
                  setDate({ from: undefined, to: undefined }); // Ensure a proper reset
                }
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        {/* View All Button */}
        <Button className="bg-orange hover:bg-orange text-white flex items-center gap-1">
          View All
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Review Cards */}
      <div className="space-y-3">
        {reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4">
                {/* User Info */}
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    {/* User Avatar */}
                    <div className="flex-shrink-0">
                      <Image
                        src={`${review.user.avatarUrl}`}
                        alt={review.user.name}
                        width={40}
                        height={40}
                        className="rounded-full bg-gray-200"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">
                        {review.user.name}
                      </h3>
                    </div>
                  </div>

                  {/* More Options */}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </div>

                {/* Review Description */}
                <div className="mt-3">
                  <p className="text-sm text-gray-600">{review.description}</p>
                </div>

                {/* Review Details */}
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    {/* Time */}
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-1">Time:</span>
                      <span>{review.time}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center text-xs">
                      <span className="text-gray-500 mr-1">Rating:</span>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={`${review.product.imageUrl}`}
                      alt={review.product.name}
                      width={40}
                      height={40}
                      className="rounded-md bg-gray-200"
                    />
                    <span className="text-sm font-medium">
                      {review.product.name}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CampaignReviewList;
