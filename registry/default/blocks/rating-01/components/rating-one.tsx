"use client";

import React, { useRef, useState, useEffect, useId } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import useClickOutside from "../hooks/useClickOutside";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { ArrowLeftIcon } from "lucide-react";

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
};

interface StarRatingProps {
  maxStars?: number;
  defaultValue?: number;
  onChange?: (rating: number) => void;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  maxStars = 5,
  defaultValue = 0,
  onChange,
  size = 24,
}) => {
  const [rating, setRating] = useState(defaultValue);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onChange?.(value);
  };

  const uniqueId = useId();
  const formContainerRef = useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState<null | string>(null);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setNote(null);
  };

  useClickOutside(formContainerRef, () => {
    closeMenu();
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-6">
        {[...Array(maxStars)].map((_, index) => {
          const value = index + 1;
          return (
            <button
              key={index}
              className="transition-transform hover:scale-110 focus:outline-none"
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleClick(value)}
            >
              <Star
                size={size}
                className={cn(
                  "transition-colors",
                  (hoverRating || rating) >= value
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-none text-gray-300",
                )}
              />
            </button>
          );
        })}
      </div>
      <MotionConfig transition={TRANSITION}>
        <div className="relative flex items-center justify-center">
          <motion.button
            key="button"
            layoutId={`popover-${uniqueId}`}
            className="flex h-9 items-center border border-zinc-950/10 bg-white px-3 text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50"
            style={{
              borderRadius: 8,
            }}
            onClick={openMenu}
          >
            <motion.span
              layoutId={`popover-label-${uniqueId}`}
              className="text-sm"
            >
              Write Review
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={formContainerRef}
                layoutId={`popover-${uniqueId}`}
                className="absolute h-[200px] w-[364px] overflow-hidden border border-zinc-950/10 bg-white outline-none dark:bg-zinc-700"
                style={{
                  borderRadius: 12,
                }}
              >
                <form
                  className="flex h-full flex-col"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <motion.span
                    layoutId={`popover-label-${uniqueId}`}
                    aria-hidden="true"
                    style={{
                      opacity: note ? 0 : 1,
                    }}
                    className="absolute left-4 top-3 select-none text-sm text-zinc-500 dark:text-zinc-400"
                  >
                    Write Message
                  </motion.span>
                  <textarea
                    className="h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none"
                    autoFocus
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <div key="close" className="flex justify-between px-4 py-3">
                    <button
                      type="button"
                      className="flex items-center"
                      onClick={closeMenu}
                      aria-label="Close popover"
                    >
                      <ArrowLeftIcon
                        size={16}
                        className="text-zinc-900 dark:text-zinc-100"
                      />
                    </button>
                    <button
                      className="relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800"
                      type="submit"
                      aria-label="Submit note"
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MotionConfig>
    </>
  );
};

const RatingOne = () => {
  return (
    <div className="relative">
      <div className="w-full space-x-5 space-y-5">
        <h1 className="text-2xl font-bold text-center">
          Share Your Experience
        </h1>
        <p className="text-center text-gray-500">
          How was your search experience with our services?
        </p>
        <StarRating
          onChange={(rating) => console.log("Star rating:", rating)}
        />
      </div>
    </div>
  );
};

export default RatingOne;
