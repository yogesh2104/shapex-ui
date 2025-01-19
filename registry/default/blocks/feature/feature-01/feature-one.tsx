"use client";

/**
 *
 * This component is inspire by Eldora UI
 *
 * Source: [https://www.eldoraui.site/docs/components/features]
 */

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { Card } from "@/registry/default/ui/card";
import { cn } from "@/registry/default/lib/utils";

export type FeatureItem = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
  icon?: React.ReactNode;
};

export interface FeaturesProps {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right" | "top" | "bottom";
  data: FeatureItem[];
  className?: string;
}

const LineProgress: React.FC<{
  position: FeaturesProps["linePosition"];
  isActive: boolean;
  duration: number;
}> = ({ position, isActive, duration }) => {
  const baseClasses = cn(
    "absolute overflow-hidden",
    position === "left" || position === "right"
      ? "inset-y-0 w-0.5"
      : "inset-x-0 h-0.5",
    "rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30",
  );

  const progressClasses = cn(
    "absolute bg-primary dark:bg-white transition-all ease-linear",
    position === "left" || position === "right"
      ? "left-0 top-0 w-full"
      : "left-0 h-full",
    position === "left" && "left-0 right-auto",
    position === "right" && "left-auto right-0",
    position === "top" && "top-0",
    position === "bottom" && "bottom-0",
    isActive
      ? position === "left" || position === "right"
        ? "h-full"
        : "w-full"
      : position === "left" || position === "right"
        ? "h-0"
        : "w-0",
  );

  return (
    <div className={baseClasses}>
      <div
        className={progressClasses}
        style={{
          transitionDuration: isActive ? `${duration}ms` : "0s",
          transformOrigin:
            position === "left" || position === "right" ? "top" : "left",
        }}
      />
    </div>
  );
};

const FeatureCard: React.FC<{
  feature: FeatureItem;
  isActive: boolean;
  onClick: () => void;
  collapseDelay: number;
}> = ({ feature, isActive, onClick, collapseDelay }) => (
  <Card
    className="relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0"
    onClick={onClick}
    style={{ scrollSnapAlign: "center" }}
  >
    <LineProgress position="top" isActive={isActive} duration={collapseDelay} />
    <h2 className="text-xl font-bold">{feature.title}</h2>
    <p className="mx-0 max-w-sm text-balance text-sm text-muted-foreground">
      {feature.content}
    </p>
  </Card>
);

const FeatureOne = ({
  collapseDelay = 5000,
  ltr = false,
  linePosition = "left",
  data = [],
  className,
}: FeaturesProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const carouselRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setCurrentIndex(0), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, collapseDelay);
    return () => clearInterval(timer);
  }, [collapseDelay, data.length]);

  const MediaContent = () => {
    const currentFeature = data[currentIndex];

    if (!currentFeature) {
      return <Card className="aspect-auto size-full bg-muted" />;
    }

    if (currentFeature.image) {
      return (
        <motion.img
          key={currentIndex}
          src={currentFeature.image}
          alt={currentFeature.title}
          className="aspect-auto size-full rounded-xl border border-border object-cover object-left-top p-1 shadow-lg"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      );
    }

    if (currentFeature.video) {
      return (
        <video
          preload="auto"
          src={currentFeature.video}
          className="aspect-auto size-full rounded-lg object-cover shadow-lg"
          autoPlay
          loop
          muted
        />
      );
    }

    return <Card className="aspect-auto size-full bg-muted" />;
  };

  return (
    <section
      ref={containerRef}
      className={cn("py-6", className)}
      id="features"
    >
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto my-12 grid h-full items-center gap-10 lg:grid-cols-2">
            <div
              className={cn(
                "order-1 hidden lg:flex",
                ltr ? "lg:order-2 lg:justify-end" : "justify-start",
              )}
            >
              <Accordion
                type="single"
                value={`item-${currentIndex}`}
                onValueChange={(value) =>
                  setCurrentIndex(Number(value.split("-")[1]))
                }
                className="w-full"
              >
                {data.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={`item-${index}`}
                    className="relative mb-8 last:mb-0 border-b-0"
                  >
                    <LineProgress
                      position={linePosition}
                      isActive={currentIndex === index}
                      duration={collapseDelay}
                    />
                    <div className="relative flex items-center gap-4 p-2">
                      {item.icon && (
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          {item.icon}
                        </div>
                      )}
                      <div className="flex-1">
                        <AccordionTrigger className="py-2 hover:no-underline">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.content}
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div
              className={cn(
                "h-[350px] min-h-[200px] w-auto",
                ltr && "lg:order-1",
              )}
            >
              <MediaContent />
            </div>

            <ul
              ref={carouselRef}
              className="flex snap-x snap-mandatory flex-nowrap overflow-x-auto py-10 lg:hidden [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ padding: "50px calc(50%)" }}
            >
              {data.map((item, index) => (
                <FeatureCard
                  key={item.id}
                  feature={item}
                  isActive={currentIndex === index}
                  onClick={() => setCurrentIndex(index)}
                  collapseDelay={collapseDelay}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
