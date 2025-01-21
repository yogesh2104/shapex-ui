'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1535928120929-02661d8c46dd?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTR8fHNob2VzfGVufDB8fHx8MTczNjMyMzAwMXww&ixlib=rb-4.0.3",
    title: "Discover The Best Price, Only Made For You.",
    description: "At slothUI, we sell many things from A to Z with the world's most competetive price.",
  },
  {
    image: "https://images.unsplash.com/photo-1651571481110-34a66a5d14ab?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTF8fHNvZmF8ZW58MHx8fHwxNzM2MzIzNzgwfDA&ixlib=rb-4.0.3",
    title: "Quality Products at Unbeatable Prices",
    description: "Explore our wide range of premium products at amazing prices.",
  },
  {
    image: "https://images.unsplash.com/photo-1566831453303-34a2c76ec34f?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTJ8fHRhYmxlfGVufDB8fHx8MTczNjMyMzczOHww&ixlib=rb-4.0.3",
    title: "Shop Smart, Live Better",
    description: "Find everything you need for your home and lifestyle.",
  },
]

function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      className="relative w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[400px] md:h-[700px] w-full">
              <Image
                src={slide.image}
                alt="Hero image"
                fill
                className="object-cover brightness-50"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h1 className="max-w-3xl text-2xl font-bold text-white sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-xl text-sm md:text-lg text-white/90">
                  {slide.description}
                </p>
                <Button
                  size="sm"
                  className="mt-8 text-white bg-purple-600 hover:bg-purple-700"
                >
                  Explore Our Products
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block absolute left-4 top-1/2 z-10 p-1.5" />
      <CarouselNext className="hidden md:block absolute right-4 top-1/2 z-10 p-1.5" />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current ? "w-4 bg-white" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}

export default HeroCarousel
