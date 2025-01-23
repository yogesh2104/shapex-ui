"use client";
import React, { ReactNode, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { CircleX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import BlogHeader from "./blog-header";


const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string[];
  content: () => ReactNode;
}

/**
 * This component inspired by aceternity expandable-card
 *
 * Source: [https://ui.aceternity.com/components/expandable-card by Manu Arora]
 *
*/
const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const ref = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActivePost(null);
      }
    }

    if (activePost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePost]);

  useOutsideClick(ref, () => setActivePost(null));

  return (
    <>
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 grid place-items-center z-20 p-1">
            <motion.div
              layoutId={`card-${activePost.title}-${id}`}
              ref={ref}
              className="w-fullbg-white max-w-xl dark:bg-neutral-900 bg-background rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  width={600}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 p-1 rounded-full"
                >
                  <CircleX size={24} />
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                  {activePost.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {activePost.description}
                </p>
                <div className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {activePost.content()}
                </div>
                <div className="flex justify-center mt-2">
                  <Button size={"sm"} variant={"outline"}>
                    Read More...
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BlogHeader />
      <div className="max-w-6xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <motion.div
            layoutId={`card-${post.title}-${id}`}
            key={post.title}
            onClick={() => setActivePost(post)}
            className="p-2 group flex flex-col rounded-xl cursor-pointer"
          >
            <Card key={post.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={300}
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
