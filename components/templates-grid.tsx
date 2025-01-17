'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Eye, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from 'sonner'

interface PortfolioItem {
  title: string
  description: string
  techStack: string
  image: string | null
  video: string | null
  downloadLink: string
  previewLink: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Stacked Portfolio",
    description: "A stunning Portfolio",
    techStack: "Next.js, Tailwind, TypeScript",
    image: null,
    video:"/template/demo.mp4",
    downloadLink: "https://api.github.com/repos/yogesh2104/stacked-portfolio/zipball",
    previewLink: "https://stacked-portfolio.vercel.app/"
  },
]

const PortfolioItem = ({ item }: { item: PortfolioItem }) => {

  const [loading, setLoading] = useState(false);

  const handleDownload = async (url:string) => {
    setLoading(true);

    try {
      window.location.href = url;
    } catch (error) {
      toast.error("Somthing Went Wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <motion.div
          className="relative h-64 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          
          {item.image && <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />}
          {item?.video && 
          <video
            autoPlay
            loop
            muted
            src={item.video}
            className="w-full rounded-xl shadow-2xl"
          />
          }
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-2xl font-bold">{item.title}</h3>
          </div>
        </motion.div>
        <CardContent className="p-6">
          <motion.div
            initial={false}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-lg mb-2">{item.description}</p>
            <p className="text-sm mb-4">
              <span className="font-bold">Tech Stack:</span> {item.techStack}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="outline" className="w-full" onClick={()=>handleDownload(item.downloadLink)}>
                  {loading ? <Loader2 className='animate-spin'/> : <><Download className="mr-2 h-4 w-4" />Download</>}
              </Button>
              <Button asChild className="w-full">
                <a href={item.previewLink} target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </a>
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function PortfolioGrid() {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

