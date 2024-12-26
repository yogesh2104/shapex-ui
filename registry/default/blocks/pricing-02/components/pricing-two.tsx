import { Check } from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/default/ui/card";

interface Feature {
  title: string;
  description: string;
}

interface PricingTier {
  title: string;
  monthlyConversions: string;
  description: string;
  price: string | "Let's talk";
  buttonText: string;
  buttonVariant: "default" | "secondary" | "outline";
  features: Feature[];
  gradient: string;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Professional",
    monthlyConversions: "Up to 50 Monthly Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, in? Nemo, quas esse a id at quae sunt! Temporibus, consectetur optio. Beatae, culpa nam quas eaque ipsa blanditiis adipisci rem.",
    price: "$99/mo",
    buttonText: "Start Free Trial",
    buttonVariant: "default",
    gradient: "from-blue-100 to-blue-200",
    features: [
      {
        title: "Account Performance Reporting",
        description: "Standard",
      },
      {
        title: "Affiliate Recruiting",
        description: "Affiliate Marketplace",
      },
      {
        title: "Affiliate Payments",
        description: "Basic",
      },
    ],
  },
  {
    title: "Enterprise",
    monthlyConversions: "Unlimited Conversions Monthly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, in? Nemo, quas esse a id at quae sunt! Temporibus, consectetur optio. Beatae, culpa nam quas eaque ipsa blanditiis adipisci rem.",
    price: "Let's talk",
    buttonText: "Contact Us",
    buttonVariant: "secondary",
    gradient: "from-green-100 to-green-200",
    features: [
      {
        title: "Account Setup",
        description: "Onboarding call",
      },
      {
        title: "Account Management",
        description: "Dedicated rep",
      },
      {
        title: "Account Performance Reporting",
        description: "Custom",
      },
    ],
  },
  {
    title: "Enterprise Plus",
    monthlyConversions: "Unlimited Conversions Monthly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, in? Nemo, quas esse a id at quae sunt! Temporibus, consectetur optio. Beatae, culpa nam quas eaque ipsa blanditiis adipisci rem.",
    price: "Let's talk",
    buttonText: "Contact Us",
    buttonVariant: "secondary",
    gradient: "from-purple-100 to-purple-200",
    features: [
      {
        title: "Account Setup",
        description: "Premium Onboarding and Migration",
      },
      {
        title: "Account Management",
        description: "Premium account management",
      },
      {
        title: "Account Performance Reporting",
        description: "Custom",
      },
    ],
  },
];

const PricingTwo = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a192f] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 100% 0)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Influencer And Affiliate Marketing Plans and Pricing
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            in? Nemo, quas esse a id at quae sunt! Temporibus, consectetur
            optio. Beatae, culpa nam quas eaque ipsa blanditiis adipisci rem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br text-black ${tier.gradient} border-0`}
            >
              <CardHeader>
                <h3 className="text-2xl font-bold">{tier.title}</h3>
                <p className="text-sm font-medium ">
                  {tier.monthlyConversions}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm ">{tier.description}</p>
                <div className="text-3xl font-bold">{tier.price}</div>
                <Button className="w-full" variant={tier.buttonVariant}>
                  {tier.buttonText}
                </Button>
              </CardContent>
              <div className="px-5 py-2 w-full">
                <div className="text-sm font-semibold">Power Features</div>
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black  shrink-0" />
                      <div>
                        <div className="text-sm font-medium">
                          {feature.title}
                        </div>
                        <div className="text-sm ">{feature.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTwo;
