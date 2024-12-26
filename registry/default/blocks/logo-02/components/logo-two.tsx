import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Marquee from "./marquee";


const LogoTwo = () => {
  return (
    <section className="py-16 rounded-xl bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row">
          <div className="lg:w-1/3">
            <h2 className="text-white text-4xl font-semibold leading-tight">
              Trusted by companies <br />
              <span className="p-2 italic text-4xl font-sans font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
                all over the world
              </span>
            </h2>
            <Button
              variant="outline"
              className="mt-8 flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="lg:w-2/3 mt-12 lg:mt-0">
            <div className="grid gap-6">
              <Marquee
                pauseOnHover
                className="border rounded-lg shadow-lg bg-gray-50 p-4"
              >
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-10 [&_svg]:mr-10"
                  >
                    <img
                      src={`/logo/logo-${num}.svg`}
                      alt={`Logo ${index + 1}`}
                      className="h-12 w-auto opacity-80 hover:opacity-100 transition duration-200"
                    />
                  </div>
                ))}
              </Marquee>
              <Marquee
                pauseOnHover
                reverse
                speed={20}
                className="border rounded-lg shadow-lg bg-gray-50 p-4"
              >
                {[6, 7, 8, 9, 10].map((num, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-10"
                  >
                    <img
                      src={`/logo/logo-${num}.svg`}
                      alt={`Logo ${index + 1}`}
                      className="h-12 w-auto opacity-80 hover:opacity-100 transition duration-200"
                    />
                  </div>
                ))}
              </Marquee>
              <Marquee
                pauseOnHover
                speed={10}
                className="border rounded-lg shadow-lg bg-gray-50 p-4"
              >
                {[11, 12, 13, 14].map((num, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/logo/logo-${num}.svg`}
                      alt={`Logo ${index + 1}`}
                      className="h-12 w-auto opacity-80 hover:opacity-100 transition duration-200"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTwo;
