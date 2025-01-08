import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"
import { Badge } from "@/registry/default/ui/badge"
import HeroCarousel from "./hero-carousel"
import CategoryCarousel from "./category-carousel"
import { Plus } from "lucide-react"
import PopularProductCard from "./popular-product-card"

const products = [
  {
    name: "AI Powered Sneakers",
    price: 59,
    image: "https://images.unsplash.com/photo-1582901621692-8abda42cd03c?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwyMDB8fFNuZWFrZXJzfGVufDB8fHx8MTczNjMyNDEzMHww&ixlib=rb-4.0.3",
    color: "Orange Splash",
    rating: 5,
    reviews: 25,
    tag: "Popular"
  },
  {
    name: "Aesthetics Cream Thing",
    price: 49,
    image: "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTN8fENyZWFtJTIwVGhpbmd8ZW58MHx8fHwxNzM2MzI0MTk1fDA&ixlib=rb-4.0.3",
    color: "Purple Royal",
    rating: 4,
    reviews: 115,
  },
  {
    name: "Just A Chair",
    price: 25,
    image: "https://images.unsplash.com/photo-1523567940912-9a9b9788f863?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTN8fENoYWlyfGVufDB8fHx8MTczNjMyNDI2MHww&ixlib=rb-4.0.3",
    color: "Blue Inferno",
    rating: 4,
    reviews: 99,
    tag: "25% OFF!"
  },
  {
    name: "Some Luxury Bag",
    price: 100,
    image: "https://images.unsplash.com/photo-1725545384466-98ef14c1784b?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTR8fGJhZ3xlbnwwfHx8fDE3MzYzMjQzMjZ8MA&ixlib=rb-4.0.3",
    color: "Gold",
    rating: 1,
    reviews: 1200,
  },
  {
    name: "iBicycle 2.4 Max",
    price: 250,
    image: "https://images.unsplash.com/photo-1513540870164-07649a1d676f?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTl8fEJpY3ljbGUlMjB8ZW58MHx8fHwxNzM2MzI0NDUyfDA&ixlib=rb-4.0.3",
    color: "Completely Black",
    rating: 3,
    reviews: 880,
  },
  {
    name: "Laptop with headphone",
    price: 999,
    image: "https://images.unsplash.com/photo-1718279597963-90e70e1eba23?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTh8fHRhYmxlfGVufDB8fHx8MTczNjMyMzczOHww&ixlib=rb-4.0.3",
    color: "Orange Obviously",
    rating: 4,
    reviews: 3,
  }
]

export default function ECommerce() {
  return (
    <>
      <HeroCarousel/>
      <CategoryCarousel/>
      <div className="px-4 py-12">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">Only The Best good for you!</Badge>
          <h1 className="text-4xl font-bold tracking-tight">We've Got Everything You Need.</h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {products.map((product) => (
          <ProductCard key={product.name} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full">
          Load More Items <Plus/>
          </Button>
        </div>
      </div>
      <PopularProductCard/>
    </>
  )
}

