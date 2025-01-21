"use client";

import { Card } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/registry/default/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  logoSrc: string;
  avatarSrc: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"ShapeX-UI has drastically improved our development speed. The ready-made components save us hours of work."',
    name: "Emma Watson",
    role: "Lead Frontend Engineer",
    logoSrc: "/logos/company1.svg",
    avatarSrc: "/file.svg",
  },
  {
    quote:
      '"We were able to achieve a cohesive design system for our platform in no time. ShapeX-UI is an essential tool for our team."',
    name: "Liam Brown",
    role: "Design Manager",
    logoSrc: "/logos/company2.svg",
    avatarSrc: "/file.svg",
  },
  {
    quote:
      '"Our clients are always impressed with the smooth animations and clean designs. ShapeX-UI gives us a competitive edge."',
    name: "Sophia Davis",
    role: "Creative Director",
    logoSrc: "/placeholder.svg",
    avatarSrc: "/file.svg",
  },
  {
    quote:
      '"As a freelance designer, ShapeX-UI has become my go-to library. It’s versatile and saves me so much time."',
    name: "Noah Wilson",
    role: "Freelance UX Designer",
    logoSrc: "/placeholder.svg",
    avatarSrc: "/file.svg",
  },
  {
    quote:
      '"Using ShapeX-UI, we’ve managed to reduce the time-to-market for our applications significantly."',
    name: "Isabella Martinez",
    role: "Product Owner",
    logoSrc: "/placeholder.svg",
    avatarSrc: "/file.svg",
  },
  {
    quote:
      '"ShapeX-UIs components are not only functional but also aesthetically pleasing. Our users love the designs!"',
    name: "James Anderson",
    role: "UI/UX Specialist",
    logoSrc: "/placeholder.svg",
    avatarSrc: "/file.svg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-white ">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Don&apos;t just take our words. Over 10K people trust.
          </h2>
        </div>

        <div className="mt-12 sm:mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="h-[60rem] container mt-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="px-2">
                    <Card
                      className={`bg-gray-100 rounded-2xl p-10 transition-transform duration-300 hover:scale-105 ${
                        index % 2 === 0 ? "xl:-rotate-2" : "xl:rotate-2"
                      }`}
                    >
                      <blockquote>
                        <p className="text-xl font-medium leading-9 text-gray-900">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                      <p className="mt-6 text-base font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-base font-normal text-gray-600">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                        <img
                          className="w-auto h-7"
                          src={testimonial.logoSrc}
                          alt="Company logo"
                        />
                        <img
                          className="object-cover w-10 h-10 rounded-full"
                          src={testimonial.avatarSrc}
                          alt="Avatar"
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
