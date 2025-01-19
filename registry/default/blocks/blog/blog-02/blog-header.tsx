"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Badge } from "@/registry/default/ui/badge";
import { Separator } from "@/registry/default/ui/separator";

const MagazineHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-4 py-12 md:py-10 bg-background"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="font-serif">
            Stories Worth Sharing
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
            The Journal
          </h1>
          <Separator className="max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <h3 className="font-medium mb-2">Featured Stories</h3>
            <p className="text-sm text-muted-foreground">
              Hand-picked articles from our editors
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Latest Updates</h3>
            <p className="text-sm text-muted-foreground">
              Fresh perspectives and insights
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Editor's Choice</h3>
            <p className="text-sm text-muted-foreground">
              Must-read pieces from our collection
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <Input
            placeholder="Search stories..."
            className="h-11 font-serif focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button variant="outline" size="icon" className="h-11 w-11">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MagazineHeader;
