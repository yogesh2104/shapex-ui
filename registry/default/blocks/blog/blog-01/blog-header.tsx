"use client";
import React from "react";
import { Filter, Rss } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Input } from "@/registry/default/ui/input";

const BlogHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-4 py-12 md:py-16 bg-background container"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="space-y-4 col-span-2 flex-1">
            <h1 className="text-4xl md:text-5xl font-bold">The Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              News, stories, and guides from our team. Subscribe to stay
              updated.
            </p>
          </div>
          <div className="flex md:justify-end gap-2">
            <Button variant="outline">
              <Rss className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
            <Button>Write a Post</Button>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex-1">
            <Input placeholder="Search articles..." className="h-11" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px] h-11">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Posts</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-11 w-11">
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary">All</Badge>
          <Badge variant="outline">Technology</Badge>
          <Badge variant="outline">Design</Badge>
          <Badge variant="outline">Business</Badge>
          <Badge variant="outline">Marketing</Badge>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHeader;
