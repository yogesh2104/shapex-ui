import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface ProductCardProps {
  name: string
  price: number
  image: string
  color: string
  rating: number
  reviews: number
  tag?: string
}

export function ProductCard({
  name,
  price,
  image,
  color,
  rating,
  reviews,
  tag
}: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden">
      <div className="p-0">
        <Button
          variant="ghost"
          size="icon"
          className="absolute rounded-full right-2 top-2 z-10 h-8 w-8 bg-white/80 dark:bg-black"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        {tag && (
          <Badge
            variant={tag === "Popular" ? "default" : "destructive"}
            className="absolute left-2 top-2 z-10"
          >
            {tag}
          </Badge>
        )}
        <div className="aspect-square overflow-hidden rounded-3xl">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm font-bold">${price}</p>
          </div>
          <p className="text-sm text-muted-foreground">{color}</p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-[#F59E0B]"
                      : "fill-muted stroke-[#F59E0B]"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

