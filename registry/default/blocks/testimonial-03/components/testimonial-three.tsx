"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  name: string;
  text: string;
  rating: number;
}

interface StarRatingProps {
  rating: number;
  className?: string;
  maxStars?: number;
}

const AUTO_SCROLL_INTERVAL = 5000;
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      '"ShapeX-UI has drastically improved our development speed. The ready-made components save us hours of work."',
    name: "Emma Watson",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque veritatis asperiores quas obcaecati facere sit beatae doloribus officia eligendi debitis, totam neque quos alias dolorem impedit consequuntur accusantium? Pariatur, sequi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    id: 2,
    quote:
      '"We were able to achieve a cohesive design system for our platform in no time. ShapeX-UI is an essential tool for our team."',
    name: "Liam Brown",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque veritatis asperiores quas obcaecati facere sit beatae doloribus officia eligendi debitis, totam neque quos alias dolorem impedit consequuntur accusantium? Pariatur, sequi.",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    quote:
      '"Our clients are always impressed with the smooth animations and clean designs. ShapeX-UI gives us a competitive edge."',
    name: "Sophia Davis",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque veritatis asperiores quas obcaecati facere sit beatae doloribus officia eligendi debitis, totam neque quos alias dolorem impedit consequuntur accusantium? Pariatur, sequi.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    quote:
      '"As a freelance designer, ShapeX-UI has become my go-to library. It’s versatile and saves me so much time."',
    name: "Noah Wilson",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque veritatis asperiores quas obcaecati facere sit beatae doloribus officia eligendi debitis, totam neque quos alias dolorem impedit consequuntur accusantium? Pariatur, sequi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    quote:
      '"Using ShapeX-UI, we’ve managed to reduce the time-to-market for our applications significantly."',
    name: "Isabella Martinez",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque veritatis asperiores quas obcaecati facere sit beatae doloribus officia eligendi debitis, totam neque quos alias dolorem impedit consequuntur accusantium? Pariatur, sequi.",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    quote:
      '"ShapeX-UIs components are not only functional but also aesthetically pleasing. Our users love the designs!"',
    name: "James Anderson",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque veritatis asperiores quas obcaecati facere sit beatae doloribus officia eligendi debitis, totam neque quos alias dolorem impedit consequuntur accusantium? Pariatur, sequi.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const StarRating = ({
  rating,
  maxStars = 5,
  className = "",
}: StarRatingProps) => {
  const stars = useMemo(
    () =>
      Array.from({ length: maxStars }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 w-5 transition-colors",
            i < rating
              ? "fill-green-500 text-green-500"
              : "fill-gray-200 text-gray-200",
          )}
        />
      )),
    [rating, maxStars],
  );

  return <div className={cn("flex gap-0.5", className)}>{stars}</div>;
};

const TestimonialCard = ({
  testimonial,
  isCurrent,
  isMobile,
}: {
  testimonial: Testimonial;
  isCurrent: boolean;
  isMobile: boolean;
}) => (
  <Card
    className={cn(
      "h-full transition-transform duration-300",
      isMobile
        ? "scale-100"
        : isCurrent
          ? "bg-gray-50 scale-110 text-black"
          : "scale-90",
    )}
  >
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="size-14">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-gray-600">{testimonial.quote}</p>
    </CardContent>
  </Card>
);

const NavigationControls = ({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
}: {
  currentIndex: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
}) => (
  <div className="flex items-center justify-center gap-4 mt-8">
    <Button
      variant="outline"
      size="icon"
      onClick={onPrevious}
      className="rounded-full"
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <span className="text-sm text-gray-500">
      {currentIndex + 1} / {totalItems}
    </span>
    <Button
      variant="outline"
      size="icon"
      onClick={onNext}
      className="rounded-full"
      aria-label="Next testimonial"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
);

const TestimonialThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isMobile = useMediaQuery();

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const previous = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  }, []);

  const visibleTestimonials = useMemo(() => {
    if (isMobile) {
      return [TESTIMONIALS[currentIndex]];
    }
    return [
      TESTIMONIALS[
        (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
      ],
      TESTIMONIALS[currentIndex],
      TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
    ];
  }, [currentIndex, isMobile]);

  useEffect(() => {
    const id = setInterval(next, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="px-4 py-12" aria-label="Customer testimonials">
      <h1 className="text-4xl font-bold text-center mb-12 max-w-3xl mx-auto">
        Read trusted reviews from our customers
      </h1>

      <div className="relative max-w-6xl mx-auto">
        <div
          className={cn(
            "flex items-center h-80 overflow-hidden",
            isMobile ? "gap-0" : "gap-4",
          )}
        >
          <AnimatePresence initial={false} custom={direction}>
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                className="flex-1"
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isCurrent={!isMobile && idx === 1}
                  isMobile={isMobile}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <NavigationControls
          currentIndex={currentIndex}
          totalItems={TESTIMONIALS.length}
          onPrevious={previous}
          onNext={next}
        />
      </div>
    </section>
  );
};

export default TestimonialThree;
