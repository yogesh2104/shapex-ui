"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { VideoDialog } from "./video-dialog";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Pre-designed Blocks",
    description:
      "Our library includes 30+ pre-designed components such as headers, footers, login forms, CTAs, and more, to accelerate your development workflow.",
  },
  {
    title: "Customizable Variants",
    description:
      "Easily customize components with variants and Tailwind CSS to match your project’s unique design requirements.",
  },
  {
    title: "Built on ShadCN UI",
    description:
      "Leverage the power of ShadCN UI, ensuring your components are modern, responsive, and highly performant.",
  },
];

const FeatureTwo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-10 lg:py-16 bg-gradient-to-br from-black to-gray-900 rounded-2xl overflow-hidden relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 gap-y-16 xl:gap-x-36">
          <motion.div variants={itemVariants}>
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Elevate your UI
              </span>
              <span className="font-serif text-5xl italic lg:block md:text-7xl mt-2">
                design process
              </span>
              <span className="font-sans text-4xl lg:block md:text-6xl mt-2">
                with our versatile component library.
              </span>
            </h2>
            <motion.p
              variants={itemVariants}
              className="mt-8 font-sans text-lg font-normal leading-8 text-gray-300 lg:mt-8"
            >
              Auraui is your gateway to mastering modern web development, with
              resources that adapt to your pace and level.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10">
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 font-sans text-base font-semibold transition-all duration-200 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
                  role="button"
                >
                  Learn More
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ul className="space-y-5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="transform transition-all duration-200 hover:shadow-lg hover:bg-gray-800/30 p-4 rounded-xl"
                >
                  <h3 className="font-sans text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 font-sans text-lg font-normal leading-8 text-gray-300">
                    {feature.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-start md:justify-center mb-16">
          <VideoDialog videoSrc="https://www.youtube.com/embed/5Peo-ivmupE?si=YNTQs95Rx0-4FOvp" />
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureTwo;
