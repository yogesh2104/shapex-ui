"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/registry/default/ui/carousel";
import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
  image: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"ShapeX-UI has drastically improved our development speed. The ready-made components save us hours of work."',
    author: "Emma Watson",
    role: "Lead Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    quote:
      '"We were able to achieve a cohesive design system for our platform in no time. ShapeX-UI is an essential tool for our team."',
    author: "Liam Brown",
    role: "Design Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    quote:
      '"Our clients are always impressed with the smooth animations and clean designs. ShapeX-UI gives us a competitive edge."',
    author: "Sophia Davis",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    quote:
      '"As a freelance designer, ShapeX-UI has become my go-to library. It’s versatile and saves me so much time."',
    author: "Noah Wilson",
    role: "Freelance UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    quote:
      '"Using ShapeX-UI, we’ve managed to reduce the time-to-market for our applications significantly."',
    author: "Isabella Martinez",
    role: "Product Owner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    quote:
      '"ShapeX-UIs components are not only functional but also aesthetically pleasing. Our users love the designs!"',
    author: "James Anderson",
    role: "UI/UX Specialist",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

const TestimonialTwo = () => {
  return (
    <Carousel
      className="relative w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="xl:basis-1/2">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialTwo;