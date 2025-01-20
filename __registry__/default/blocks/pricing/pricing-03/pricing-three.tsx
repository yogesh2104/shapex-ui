import { Check } from "lucide-react";
import { cn } from "@/registry/default/lib/utils";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/default/ui/card";

type PlanPros = {
  plans: {
    name: string;
    price: Number;
    description: string;
    buttonText: string;
    popular: boolean;
    features: string[];
  }[];
};
const Pricing = ({ plans }: PlanPros) => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
            id="pricing-plan"
          >
            Simple and Affordable Pricing Plans
          </h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-sm md:text-xl/relaxed">
            Start making Amazing Experience
          </p>
        </div>
        <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col border",
                "dark:bg-zinc-900",
                plan.popular && "border-primary dark:shadow-lg",
              )}
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-2 right-4 rounded-sm px-3"
                  variant="secondary"
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader className="cursor-pointer">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-5xl font-bold tracking-tight">
                    {plan.price.toString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <Button
                  className={cn(
                    "w-full",
                    plan.popular &&
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
              <CardFooter className="flex-1">
                <div className="flex flex-col gap-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Features
                  </h4>
                  <ul className="grid gap-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};



const plans = [
  {
    name: "Free",
    price: 0,
    description: "Great for trying out 10 days free.",
    buttonText: "Download for Free",
    popular: false,
    features: [
      "Free Trial",
      "Automatic Album Designing",
      "Image Editing With Live Ready To Use Content",
      "Millions of Designing",
    ],
  },
  {
    name: "Professional",
    price: 199,
    description: "Best for Design And Ready to use",
    buttonText: "Buy Now",
    popular: true,
    features: [
      "12 Month Subscription",
      "Automatic Album Designing",
      "Image Editing With Live Ready To Use Content",
      "Millions of Designing",
    ],
  },
  {
    name: "Enterprise",
    price: 2999,
    description: "Best for large album",
    buttonText: "Buy Now",
    popular: false,
    features: [
      "36 Month Subscription",
      "Automatic Album Designing",
      "Image Editing With Live Ready To Use Content",
      "Millions of Designing",
    ],
  },
];


// this is only for show on shapexui you can remove as you need
const PricingThree=()=>{
  return <Pricing plans={plans} />
}


export default PricingThree;
