"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/registry/default/lib/utils";
import { Switch } from "@/registry/default/ui/switch";
import { Button } from "@/registry/default/ui/button";
import PriceSlider from "./price-slider";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

interface Feature {
  title: string;
  description: string;
}

interface PricingTier {
  title: string;
  monthlyConversions: string;
  description: string;
  price: string | "Let's talk";
  features: Feature[];
  gradient: string;
}

const Pricing = () => {
  const [isYearly, setIsYearly] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(50);

  const pricingTiers: PricingTier[] = [
    {
      title: "Basic",
      monthlyConversions: "Up to 50 Monthly Conversions",
      description:
        "Perfect for small businesses and startups looking to establish their online presence.",
      price: "5",
      gradient: "from-blue-500 to-blue-600",
      features: [
        {
          title: "Standard",
          description: "Account Performance Reporting",
        },
        {
          title: "Affiliate",
          description: "Affiliate Marketplace, Recruiting",
        },
        {
          title: "Basic",
          description: "Affiliate Payments",
        },
      ],
    },
    {
      title: "Enterprise",
      monthlyConversions: "Unlimited Conversions Monthly",
      description:
        "Ideal for growing businesses with higher conversion needs and advanced features.",
      price: "10",
      gradient: "from-green-500 to-green-600",
      features: [
        {
          title: "Setup",
          description: "Account and onboarding call",
        },
        {
          title: "Management",
          description: "Account Dedicated rep",
        },
        {
          title: "Custom",
          description: "Account Performance Reporting",
        },
      ],
    },
    {
      title: "Enterprise Plus",
      monthlyConversions: "Unlimited Conversions Monthly",
      description:
        "For large organizations requiring premium support and customized solutions.",
      price: "20",
      gradient: "from-purple-500 to-purple-600",
      features: [
        {
          title: "Setup",
          description: "Account and Premium Onboarding,",
        },
        {
          title: "Management",
          description: "Premium account management",
        },
        {
          title: "Custom",
          description: "Account Performance Reporting",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
          Pricing
        </h2>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-xl ">
          Choose the plan that's right for you and start converting today.
        </p>
      </div>

      <div className="mb-12">
        <PriceSlider
          minValue={0}
          maxValue={100}
          defaultValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      </div>

      <div className="flex items-center justify-center space-x-4 mb-12">
        <span className={"font-medium dark:text-white text-black"}>
          Monthly
        </span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <span className={"font-medium dark:text-white text-black"}>Yearly</span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {pricingTiers?.map((plan, idx) => {
          const basePrice = parseInt(plan.price);
          const isBasic = plan.title === "Basic";
          const calculatedPrice = isBasic
            ? isYearly
              ? 12 * basePrice
              : basePrice
            : sliderValue * basePrice * (isYearly ? 12 * 0.8 : 1);

          return (
            <Card
              key={idx}
              className={`overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <CardHeader
                className={`py-8 px-6 bg-gradient-to-br ${plan.gradient} text-white`}
              >
                <CardTitle className="text-2xl font-bold">
                  {plan.title}
                </CardTitle>
                <p className="text-lg opacity-90">{plan.monthlyConversions}</p>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <div className="mb-6 text-center">
                  <span className="text-5xl font-extrabold text-black">
                    ${calculatedPrice.toFixed(0)}
                  </span>
                  <span className="text-xl text-gray-500 ml-2">
                    /{isYearly ? "year" : "month"}
                  </span>

                  {isBasic ? (
                    <p className={cn("mt-1 text-sm text-gray-500")}>1 user</p>
                  ) : (
                    <p className={cn("mt-1 text-sm text-gray-500")}>
                      {sliderValue} user{sliderValue !== 1 ? "s" : ""}
                    </p>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-black">
                          {feature.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {feature.description}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 bg-gray-50">
                <Button className="w-full" variant="outline">
                  Choose {plan.title}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
