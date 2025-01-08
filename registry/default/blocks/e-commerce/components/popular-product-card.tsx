import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const PopularProductCard = () => {
  const products = [
    {
      id: 1,
      title: "Red Sneakers",
      subtitle: "From Nike",
      image: "https://images.unsplash.com/photo-1582901621692-8abda42cd03c?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwyMDB8fFNuZWFrZXJzfGVufDB8fHx8MTczNjMyNDEzMHww&ixlib=rb-4.0.3",
      fullWidth: true
    },
    {
      id: 2,
      title: "Architecture Stuff",
      subtitle: "Very Aesthetics",
      image: "https://images.unsplash.com/photo-1523567940912-9a9b9788f863?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTN8fENoYWlyfGVufDB8fHx8MTczNjMyNDI2MHww&ixlib=rb-4.0.3",
      fullWidth: false
    },
    {
      id: 3,
      title: "Mountain For Sale",
      subtitle: "Mount Fuji",
      image: "https://images.unsplash.com/photo-1718279597963-90e70e1eba23?ixid=M3w2OTQ1NTR8MHwxfHNlYXJjaHwxOTh8fHRhYmxlfGVufDB8fHx8MTczNjMyMzczOHww&ixlib=rb-4.0.3",
      fullWidth: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
        <div className="space-y-4 mb-8">
            <p className="text-indigo-600 font-medium">Only the best goods for you.</p>
            <div className='flex flex-col md:flex-row gap-6 justify-start md:justify-between'>
                <h1 className="text-3xl md:text-4xl font-bold ">Most Popular Right Now</h1>
                <Button 
                    variant="default" 
                    className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-full w-full md:w-48 px-6"
                >
                    Explore All Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className={`overflow-hidden ${product.fullWidth ? 'md:col-span-2' : ''}`}
          >
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-sm opacity-90">{product.subtitle}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularProductCard;

