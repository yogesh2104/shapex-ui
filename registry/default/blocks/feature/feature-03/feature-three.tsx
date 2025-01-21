"use client";

import { VideoDialog } from "./video-dialog";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Pre-designed Blocks",
    description:
      "30+ pre-designed components to accelerate your development workflow.",
  },
  {
    title: "Customizable Variants",
    description: "Easily customize components with variants and Tailwind CSS.",
  },
  {
    title: "Built on ShadCN UI",
    description:
      "Leverage the power of ShadCN UI for modern, responsive components.",
  },
  {
    title: "Rapid Development",
    description:
      "Accelerate development with optimized components and responsive design.",
  },
];

const Feature=()=> {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid lg:gap-10 gap-32 lg:grid-cols-2 ">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Elevate your UI
              <span className="block text-primary mt-1">design process</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-muted-foreground">
                with our versatile component library.
              </span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Streamline your development workflow with our comprehensive
              library of pre-designed, customizable components. Built on ShadCN
              UI, our toolkit ensures modern, responsive, and highly performant
              designs.
            </p>
            <div className="mx-auto">
              <VideoDialog videoSrc="https://www.youtube.com/embed/5Peo-ivmupE?si=YNTQs95Rx0-4FOvp" />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="transition-all duration-200 hover:shadow-lg"
              >
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature