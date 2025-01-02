import React from 'react';
import { Github, Home, User, Code, ExternalLink, Linkedin, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';


function PortfolioGallery() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="space-y-4 mb-8">
        <h1 className=" md:text-xl font-bold">Developer Portfolio</h1>
        <p className="text-sm text-muted-foreground">
          ✨ My portfolio built with Next.js, Tailwind, Typescript and Eldora UI.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Button  className="w-full flex items-center gap-2">
          <Download className="h-4 w-4" />
          Free Download
        </Button>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <ExternalLink className="h-4 w-4" />
          Live Preview
        </Button>
      </div>
    </div>
  )
}



const PortfolioGrid = () => {
  const portfolioItems = [
    {
      title: "Project One",
      description: "A stunning web application with modern design principles",
      techStack: "Next.js, Tailwind, TypeScript",
      tweetEmbed: {
        name: "John Doe",
        handle: "johndoe",
        content: "This is an amazing project! The attention to detail is impressive."
      }
    },
    {
      title: "Project Two",
      description: "Interactive dashboard with real-time updates",
      techStack: "React, Tailwind, Firebase",
      tweetEmbed: {
        name: "Jane Smith",
        handle: "janesmith",
        content: "Loving the clean design and smooth animations!"
      }
    },
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {portfolioItems.map((item, index) => (
          <PortfolioGallery key={index}/>
        ))}
      </div>

    </div>
  );
};

export default PortfolioGrid;