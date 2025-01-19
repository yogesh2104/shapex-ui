import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewForm from "./write-review";

interface Review {
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

interface Rating {
  label: string;
  value: number;
}

const RatingThree = () => {
  const ratings: Rating[] = [
    { label: "Reliability", value: 4.1 },
    { label: "Payout rating", value: 4.3 },
    { label: "Positive solutions", value: 4.1 },
  ];

  const reviews: Review[] = [
    {
      author: "Julia",
      location: "Berlin",
      rating: 4,
      date: "Jan 11",
      title: "Moved here from another insurance company",
      content:
        "Great car insurance company! Efficient and reliable service. Quick claims processing and excellent customer support. Affordable premiums and a wide range of coverage options",
    },
    {
      author: "Kim",
      location: "Frankfurt",
      rating: 3,
      date: "Jan 11",
      title: "Decent Car Insurance Company with Room for Improvement",
      content:
        "Decent car insurance company. Average service and claims processing time. Customer support could be better. Premiums are somewhat affordable, but coverage options are limited.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-teal-500 fill-teal-500" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2 md:row-span-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Button variant="ghost" className="p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </Button>
              </div>
              <CardTitle className="text-4xl font-bold">
                Reviews and ratings
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">4,7</span>
                <div className="flex">{renderStars(4.7)}</div>
              </div>
              <p className="text-gray-500">Based on 565 ratings</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ratings.map((rating) => (
                  <div key={rating.label} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{rating.label}</span>
                      <span>{rating.value}</span>
                    </div>
                    <Progress value={rating.value * 20} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className=" mt-4 flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Reviews 153</h2>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Verified" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="unverified">Unverified</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="All ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All ratings</SelectItem>
                  <SelectItem value="5">5 stars</SelectItem>
                  <SelectItem value="4">4 stars</SelectItem>
                  <SelectItem value="3">3 stars</SelectItem>
                  <SelectItem value="2">2 stars</SelectItem>
                  <SelectItem value="1">1 star</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 md:col-start-3">
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <div className="w-10 h-10 rounded-full bg-gray-200 text-black flex items-center justify-center">
                          {review.author[0]}
                        </div>
                      </Avatar>
                      <div>
                        <p className="font-semibold">
                          {review.author}, {review.location}
                        </p>
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                    </div>
                    <span className="text-xs">{review.date}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{review.title}</h3>
                  <p className="text-primary/70">{review.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-1 w-full mt-1">
        <div className="flex justify-center">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default RatingThree;
