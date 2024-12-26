import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import LogoSlider from "./logo-slider";

const LogoThree = () => {
  const companies = [
    "/logo/logo-20.svg",
    "/logo/logo-21.svg",
    "/logo/logo-22.svg",
    "/logo/logo-23.svg",
    "/logo/logo-24.svg",
    "/logo/logo-25.svg",
    "/logo/logo-26.svg",
    "/logo/logo-27.svg",
  ];

  return (
    <section className="py-16 container mx-auto rounded-xl">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-1 text-center lg:text-left">
          <h2 className="text-4xl font-semibold leading-tight">
            Trusted by companies <br />
            <span className="p-2 italic text-4xl font-sans font-bold bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
              all over the world
            </span>
          </h2>
          <p className="mt-4 text-lg">
            Join thousands of organizations that rely on our solutions to
            elevate their business. From startups to enterprises, we help
            everyone achieve their goals with cutting-edge technology.
          </p>
          <Button
            variant="outline"
            className="mt-8 flex items-center space-x-2"
          >
            <span>Learn More</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="lg:col-span-2">
          <LogoSlider companies={companies} />
        </div>
      </div>
    </section>
  );
};

export default LogoThree;
