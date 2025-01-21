'use client'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { 
    LaptopMinimal, 
    Laptop, 
    Utensils, 
    Volleyball, 
    CarFront, 
    Camera, 
    Fence,
    Shirt,
    Home,
    Smartphone,
    Gamepad2,
    Baby,
    Brush,
    Book,
    Dumbbell,
    PawPrint,
    Scissors,
    Watch,
    Music,
    HeartPulse,
    Coins,
    Plane
} from "lucide-react"

const slides = [
    {
        icon: LaptopMinimal,
        title: "Computer",
        count: "1.2k+ Items"
    },
    {
        icon: Laptop,
        title: "Laptop",
        count: "800+ Items"
    },
    {
        icon: Utensils,
        title: "Food",
        count: "2k+ Items"
    },
    {
        icon: Volleyball,
        title: "Sport",
        count: "1.5k+ Items"
    },
    {
        icon: CarFront,
        title: "Car",
        count: "900+ Items"
    },
    {
        icon: Camera,
        title: "Camera",
        count: "600+ Items"
    },
    {
        icon: Fence,
        title: "Fence",
        count: "400+ Items"
    },
    {
        icon: Shirt,
        title: "Fashion",
        count: "3.2k+ Items"
    },
    {
        icon: Home,
        title: "Real Estate",
        count: "750+ Items"
    },
    {
        icon: Smartphone,
        title: "Mobile",
        count: "1.8k+ Items"
    },
    {
        icon: Gamepad2,
        title: "Gaming",
        count: "950+ Items"
    },
    {
        icon: Baby,
        title: "Kids & Baby",
        count: "1.1k+ Items"
    },
    {
        icon: Brush,
        title: "Art & Craft",
        count: "680+ Items"
    },
    {
        icon: Book,
        title: "Books",
        count: "2.5k+ Items"
    },
    {
        icon: Dumbbell,
        title: "Fitness",
        count: "780+ Items"
    },
    {
        icon: PawPrint,
        title: "Pets",
        count: "920+ Items"
    },
    {
        icon: Scissors,
        title: "Beauty",
        count: "1.4k+ Items"
    },
    {
        icon: Watch,
        title: "Watches",
        count: "560+ Items"
    },
    {
        icon: Music,
        title: "Music",
        count: "850+ Items"
    },
    {
        icon: HeartPulse,
        title: "Health",
        count: "1.3k+ Items"
    },
    {
        icon: Coins,
        title: "Finance",
        count: "340+ Items"
    },
    {
        icon: Plane,
        title: "Travel",
        count: "670+ Items"
    }
]


function CategoryCarousel(){
    return(
        <div className="py-5 md:py-16 bg-gray-50">
            <div className="flex flex-col items-center justify-center mb-2 md:mb-12 px-4 text-center">
                <h1 className="text-2xl md:text-4xl text-black font-bold mb-2">Browse By Categories</h1>
                <p className="text-gray-600 max-w-lg text-sm md:text-xl"> 
                    Discover more than 100 categories. We don&apos;t even know why its that many.
                </p>
            </div>
            
            <Carousel
                className="w-full max-w-6xl mx-auto px-4"
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="py-8">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="basis-2/3 md:basis-1/3 lg:basis-1/6">
                            <div className="group cursor-pointer">
                                <div className="relative mx-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="p-3 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                                            <slide.icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600" />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {slide.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">{slide.count}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:block absolute left-4 top-1/2 z-10 p-2" />
                <CarouselNext className="hidden md:block absolute right-4 top-1/2 z-10 p-2" />
                {/* <CarouselPrevious className="hidden lg:block"/>
                <CarouselNext className="hidden lg:block"/> */}
            </Carousel>
        </div>
    )
}


export default CategoryCarousel

