"use client";

import { useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface ScaleSliderProps {
  defaultValue: number;
  minValue: number;
  maxValue: number;
  damping?: number;
  stiffness?: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

const PriceSlider: React.FC<ScaleSliderProps> = ({
  defaultValue,
  minValue,
  maxValue,
  damping = 20,
  stiffness = 300,
  setSliderValue,
}) => {
  const range = maxValue - minValue;
  const notchSize = 100 / range;

  const x = useMotionValue(((defaultValue - minValue) / range) * 100);
  const xSpring = useSpring(x, { damping, stiffness });
  const width = useTransform(xSpring, [0, 100], ["0%", "100%"]);

  const progress = useTransform(x, (latest) => {
    return (latest % notchSize) / notchSize;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    x.set(newValue);
  };

  const handleDragEnd = () => {
    const closestNotch = Math.round(x.get() / notchSize) * notchSize;
    x.set(closestNotch);
  };

  useEffect(() => {
    const unsubscribe = x.onChange((latest) => {
      const newValue = Math.round((latest / 100) * range) + minValue;
      if (newValue !== defaultValue) {
        setSliderValue(newValue);
      }
    });

    return () => unsubscribe();
  }, [x, notchSize, defaultValue, range, minValue]);

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="relative flex h-12 items-center gap-3 rounded-full bg-black pl-4 pr-6 dark:bg-white">
        <div className="relative h-1/3 w-full">
          {/* Slider */}
          <motion.div
            className="absolute inset-y-0 left-0 z-10 rounded-l-full bg-white dark:bg-black"
            style={{ width }}
          >
            {/* Thumb */}
            <motion.div className="absolute right-0 top-1/2 size-6 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-neutral-800 bg-white shadow-md dark:bg-black text-[10px] flex justify-center items-center">
              {x.get()}
            </motion.div>
          </motion.div>

          {/* Slider input */}
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={x.get()}
            onChange={handleChange}
            onPointerUp={handleDragEnd}
            className="absolute -inset-x-3 inset-y-0 z-20 w-[calc(100%+1.5rem)] cursor-pointer opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
