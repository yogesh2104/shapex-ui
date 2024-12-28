import { FeaturedBlockDisplay } from "@/components/featured-blocks"
import HeroSection from "@/components/hero-section"
import { FEATURED_BLOCKS } from "@/config/docs"

export default function IndexPage() {
  return (
    <>
    <HeroSection/>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {FEATURED_BLOCKS.map((block) => (
          <div
            key={block}
            className="border container py-8 md:py-6 rounded-xl"
          >
            <FeaturedBlockDisplay name={block} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
