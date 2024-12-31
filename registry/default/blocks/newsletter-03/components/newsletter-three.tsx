import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

const NewsletterThree = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src="https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI"
        alt="Background"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-[#1E3A2B]/90"></div>
      <div className="relative z-10 w-full max-w-6xl px-4">
        <Card className="bg-transparent border-0">
          <CardContent className="p-8 text-white">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-6xl font-bold text-center">
                  {"Discover Hidden Gems Around the World"
                    .split(" ")
                    .map((word, i) => (
                      <span
                        key={i}
                        className={
                          word.toLowerCase() === "gems" ? "text-green-500" : ""
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                </h2>
              </div>

              <div className=" space-y-4 flex flex-col justify-center items-center text-center">
                <p className="text-gray-200 max-w-xl text-xs md:text-lg">
                  Plan your trips without the hassle. Get access to the best
                  addresses, restaurants, and activities with just one click!
                </p>
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Start exploring now with your mail"
                    className="bg-white/90 text-black"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    →
                  </Button>
                </form>

                <div className="flex flex-col md:flex-row items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center"
                      >
                        <UserCircle className="w-6 h-6 text-gray-600" />
                      </div>
                    ))}
                  </div>
                  <span className="text-green-500 font-semibold">
                    11K+ Travelers already{" "}
                  </span>
                  <span className="text-gray-200">exploring with us!</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsletterThree;
