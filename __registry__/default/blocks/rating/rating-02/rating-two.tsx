"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RatingProps {
  onChange?: (rating: number) => void;
  defaultValue?: number;
}

const emojiVariants = {
  initial: { scale: 0.8, opacity: 0, y: 20 },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.4 },
  },
  selected: {
    scale: 1.4,
    y: [-20, 0],
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
  unselected: {
    scale: 0.9,
    opacity: 0.5,
    transition: {
      duration: 0.2,
    },
  },
};

const Rating: React.FC<RatingProps> = ({ onChange, defaultValue = 0 }) => {
  const [selected, setSelected] = useState(defaultValue);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emojis = ["😢", "😕", "😐", "🙂", "😄"];

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const handleSubmit = () => {
    console.log("Submitted:", { rating: selected, feedback });
    setIsSubmitted(true);
  };

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="relative">
          <div className="hidden md:block h-60 max-w-2xl bg-yellow-600 rounded-lg" />
          <div className="absolute left-0 p-2 md:p-0 md:left-12 md:top-10 w-full max-w-xl">
            <Card className=" w-full max-w-xl ">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold text-center">
                  Share Your Experience
                </CardTitle>
                <p className="text-center text-gray-500">
                  How was your search experience with our services?
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isSubmitted ? (
                  <>
                    <div className="relative">
                      <motion.div
                        className="flex items-center justify-center gap-8 py-6"
                        initial="initial"
                        animate="animate"
                        variants={{
                          animate: {
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                      >
                        {emojis.map((emoji, index) => (
                          <motion.div
                            key={index}
                            className="flex flex-col items-center gap-2"
                            variants={emojiVariants}
                          >
                            <motion.button
                              className="text-4xl focus:outline-none cursor-pointer relative"
                              variants={emojiVariants}
                              whileHover="hover"
                              animate={
                                selected === index ? "selected" : "unselected"
                              }
                              onClick={() => handleSelect(index)}
                              whileTap={{ scale: 0.9 }}
                            >
                              {emoji}
                            </motion.button>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="feedback" className="text-sm font-medium">
                        What's the main reason for your rating?
                      </Label>
                      <div className="relative">
                        <Input
                          id="feedback"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          placeholder="Share your thoughts with us..."
                          className="pl-10 pr-4 py-2"
                        />
                        <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <Button
                        onClick={handleSubmit}
                        className="px-8 py-2 flex items-center gap-2"
                        disabled={!selected || !feedback}
                      >
                        Submit Feedback
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-6xl mb-4"
                    >
                      🎉
                    </motion.div>
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p className="text-gray-500">
                      Your feedback helps us improve our services.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
