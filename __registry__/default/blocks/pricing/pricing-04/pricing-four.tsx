import { Check, X } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  price: number;
  features: Feature[];
}

const pricingData: PricingTier[] = [
  {
    name: "Starter",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 20,
    features: [
      { name: "10 users", included: true },
      { name: "2GB of storage", included: true },
      { name: "Email support", included: true },
      { name: "Help center access", included: false },
      { name: "Phone support", included: false },
      { name: "Community access", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 30,
    features: [
      { name: "20 users", included: true },
      { name: "5GB of storage", included: true },
      { name: "Email support", included: true },
      { name: "Help center access", included: true },
      { name: "Phone support", included: false },
      { name: "Community access", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    features: [
      { name: "50 users", included: true },
      { name: "20GB of storage", included: true },
      { name: "Email support", included: true },
      { name: "Help center access", included: true },
      { name: "Phone support", included: true },
      { name: "Community access", included: true },
    ],
  },
];

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex flex-col gap-2">
          <span className="text-lg">{tier.name}</span>
          <span className="text-sm text-muted-foreground">
            {tier.description}
          </span>
          <div className="mt-2">
            <span className="text-4xl font-bold">${tier.price}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
        </CardTitle>
        <Button className="w-full">Get Started</Button>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-lg mb-4">What's included:</p>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.included ? (
                <Check className="h-5 w-5 text-primary" />
              ) : (
                <X className="h-5 w-5 text-destructive" />
              )}
              <span className="text-muted-foreground">{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export const Pricing = () => {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-2xl mx-auto">
        <h2 className="text-center lg:text-center text-3xl md:text-4xl font-medium font-heading text-foreground ">
          Choose the Plan That&apos;s Right for You
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam
          maiores, facere inventore
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingData.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
