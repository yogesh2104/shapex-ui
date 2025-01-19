"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LogoCarouselProps {
  companies: string[];
  autorotateTiming?: number;
  direction?: "left" | "right";
  radius?: number;
}

const LogoSlider: React.FC<LogoCarouselProps> = ({
  companies,
  autorotateTiming = 3000,
  direction = "right",
  radius = 180,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!companies || companies.length === 0) return;

    const interval = setInterval(() => {
      slide(direction);
    }, autorotateTiming);

    return () => clearInterval(interval);
  }, [companies, autorotateTiming, direction]);

  const slide = (dir: "left" | "right") => {
    const step = dir === "right" ? 1 : -1;
    setActiveIndex(
      (prevIndex) => (prevIndex + step + companies.length) % companies.length,
    );
  };

  const calculatePosition = (offset: number) => {
    const angle = offset * (Math.PI / 3);
    return {
      x: Math.sin(angle) * radius,
      y: -Math.cos(angle) * radius + radius / 2,
    };
  };

  const logoVariants = useMemo(
    () => ({
      enter: (offset: number) => {
        const { x, y } = calculatePosition(direction === "right" ? -2 : 2);
        return { x, y, opacity: 0, scale: 0.5 };
      },
      center: (offset: number) => {
        const { x, y } = calculatePosition(offset);
        return {
          x,
          y,
          opacity: 1,
          scale: offset === 0 ? 1 : 0.8,
          transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
        };
      },
      exit: (offset: number) => {
        const { x, y } = calculatePosition(direction === "right" ? 2 : -2);
        return {
          x,
          y,
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
        };
      },
    }),
    [direction, radius],
  );

  const visibleLogos = useMemo(() => {
    if (!companies || companies.length === 0) return [];
    return [-1, 0, 1].map((offset) => {
      const index =
        (activeIndex + offset + companies.length) % companies.length;
      return { offset, logo: companies[index], index };
    });
  }, [activeIndex, companies]);

  return (
    <div>
      <div className="mx-auto w-full text-center">
        <div className="relative h-[200px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative min-w-[500px] min-h-[500px]">
              <AnimatePresence initial={false}>
                {visibleLogos.map(({ offset, logo, index }) => (
                  <motion.div
                    key={index}
                    custom={offset}
                    variants={logoVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 ml-[-50px]"
                  >
                    <Image
                      src={logo}
                      width={80}
                      height={80}
                      alt={`Company logo ${index + 1}`}
                      className=" dark:brightness-200"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
