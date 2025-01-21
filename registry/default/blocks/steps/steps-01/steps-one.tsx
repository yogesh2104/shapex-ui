"use client";

import { useState } from "react";
import { Check, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Switch } from "@/registry/default/ui/switch";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

interface Step {
  id: number;
  title: string;
  isCompleted: boolean;
  content?: {
    steps: string[];
    buttonText?: string;
    buttonIcon?: React.ReactNode;
  };
}

const steps: Step[] = [
  {
    id: 1,
    title: "Enable this app to your Shopify theme",
    isCompleted: true,
    content: {
      steps: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      ],
      buttonText: "Enable App",
      buttonIcon: <ExternalLink className="w-4 h-4 ml-2" />,
    },
  },
  {
    id: 2,
    title: "Add the Product Reviews Section to Your Theme",
    isCompleted: true,
    content: {
      steps: [
        "Aliquam malesuada bibendum arcu vitae elementum curabitur.",
        "Viverra orci sagittis eu volutpat odio facilisis.",
        "Ac felis donec et odio pellentesque diam volutpat commodo.",
        "Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.",
      ],
      buttonText: "Open Theme Editor",
      buttonIcon: <ExternalLink className="w-4 h-4 ml-2" />,
    },
  },
  {
    id: 3,
    title: "Highlight with Star Ratings",
    isCompleted: true,
    content: {
      steps: [
        "Nunc sed blandit libero volutpat sed cras ornare arcu.",
        "Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.",
        "Adipiscing at in tellus integer feugiat scelerisque varius morbi.",
        "Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.",
      ],
      buttonText: "Customize Star Ratings",
      buttonIcon: <ExternalLink className="w-4 h-4 ml-2" />,
    },
  },
  {
    id: 4,
    title: "Brand Your Reviews",
    isCompleted: true,
    content: {
      steps: [
        "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus.",
        "Integer quis auctor elit sed vulputate mi sit amet mauris.",
        "Purus sit amet volutpat consequat mauris nunc congue nisi vitae.",
        "Ut pharetra sit amet aliquam id diam maecenas ultricies mi.",
      ],
      buttonText: "Brand Reviews",
      buttonIcon: <ExternalLink className="w-4 h-4 ml-2" />,
    },
  },
  {
    id: 5,
    title: "Begin Automated Review Collection",
    isCompleted: true,
    content: {
      steps: [
        "Erat imperdiet sed euismod nisi porta lorem mollis aliquam.",
        "Nunc congue nisi vitae suscipit tellus mauris a diam maecenas.",
        "Et malesuada fames ac turpis egestas maecenas pharetra convallis.",
        "Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.",
      ],
      buttonText: "Setup Automated Emails",
      buttonIcon: <ExternalLink className="w-4 h-4 ml-2" />,
    },
  },
  {
    id: 6,
    title: "Find Your Perfect Plan",
    isCompleted: true,
    content: {
      steps: [
        "Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.",
        "Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.",
        "Enim praesent elementum facilisis leo vel fringilla est ullamcorper.",
        "Feugiat vivamus at augue eget arcu dictum varius duis at.",
      ],
      buttonText: "View Pricing Plans",
      buttonIcon: <ExternalLink className="w-4 h-4 ml-2" />,
    },
  },
];

const Steps = () => {
  const [expandedStep, setExpandedStep] = useState(1);
  const [enabled, setEnabled] = useState(false);
  const totalSteps = steps.length;

  return (
    <div className="mt-10 flex items-center justify-center mb-10">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">Onboarding Guide</CardTitle>
            <p className="text-muted-foreground">
              Complete the steps to start collecting & display reviews effectively
            </p>
          </div>
          <Switch
            checked={enabled}
            onCheckedChange={setEnabled}
            className="ml-4"
          />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Step {expandedStep}</span>
            <span>/</span>
            <span>{totalSteps}</span>
            <div className="flex-1 h-1 bg-muted rounded-full">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${(expandedStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={cn(
                  "rounded-lg border bg-card transition-colors",
                  expandedStep === step.id && "bg-muted/50",
                )}
              >
                <div
                  className="flex items-center gap-4 p-4 cursor-pointer"
                  onClick={() => setExpandedStep(step.id)}
                >
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Check className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 font-medium">{step.title}</div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground/50 transition-transform",
                      expandedStep === step.id && "rotate-180",
                    )}
                  />
                </div>

                {expandedStep === step.id && step.content && (
                  <div className="px-16 pb-4 space-y-4">
                    <ol className="list-decimal space-y-2">
                      {step.content.steps.map((substep, index) => (
                        <li key={index} className="text-muted-foreground">
                          {substep}
                        </li>
                      ))}
                    </ol>
                    {step.content.buttonText && (
                      <Button className="mt-4">
                        {step.content.buttonText}
                        {step.content.buttonIcon}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Steps;
