"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/registry/default/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import MagazineHeader from "./blog-header";

const Blog = () => {
  return (
    <>
      <MagazineHeader />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <motion.div
            key={post.title}
            className="p-2 group flex flex-col rounded-xl cursor-pointer"
          >
            <Card key={post.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={200}
                  className="object-cover max-w-full transition-all duration-200 group-hover:scale-105"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <div className="flex flex-wrap gap-1">
                  {post.category?.map((_, indx) => (
                    <Badge key={indx} variant="secondary">
                      {_}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm">{post.date}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Blog;

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string[];
  content: () => ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    title: "Lorem, ipsum dolor",
    description: "An introduction to soilless farming techniques.",
    category: ["Snippet", "JavaScript"],
    image:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    date: "Dec-24-2024",
    content: () => (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        repudiandae architecto inventore? Temporibus iure in corrupti, quia
        obcaecati quaerat illo modi est voluptatum facere explicabo excepturi
        corporis animi, aperiam veniam.
      </p>
    ),
  },
  {
    title: "React Hooks Deep Dive",
    description: "Understanding advanced patterns with hooks.",
    category: ["Snippet", "JavaScript"],
    image:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    date: "Dec-24-2024",
    content: () => (
      <p>
        React hooks revolutionized how developers manage state and lifecycle
        events in functional components. Learn how to create custom hooks to
        encapsulate complex logic and improve reusability across your projects.
      </p>
    ),
  },
  {
    title: "CSS Grid Mastery",
    description: "Building modern and clean layouts with ease.",
    category: ["Snippet", "JavaScript"],
    image:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    date: "Dec-24-2024",
    content: () => (
      <p>
        CSS Grid is a powerful layout system available in CSS. It allows you to
        design responsive and flexible web layouts with minimal code. Unlock its
        potential with real-world examples and best practices.
      </p>
    ),
  },
];
