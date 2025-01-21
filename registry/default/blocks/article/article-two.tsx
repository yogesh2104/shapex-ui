"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Article = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto xl:max-w-4xl">
            <p className="text-sm font-bold tracking-widest  uppercase">
              Article
            </p>
            <h1 className="text-3xl font-bold  mt-7 sm:text-4xl xl:text-5xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="text-sm font-normal  mt-7">Dec 24, 2024</p>

            <div className="mt-10">
              <p className="text-base font-normal leading-7 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                quos cumque nostrum exercitationem odit veritatis sequi officia
                maxime, vel unde minima, fuga dolor tempora molestias explicabo
                adipisci ad. Totam, veniam! Tempore, suscipit necessitatibus
                nulla officia labore quaerat perspiciatis hic repudiandae velit
                optio mollitia facere. Perferendis aut veniam sit suscipit hic
                id molestiae reprehenderit, harum facilis incidunt libero
                magnam, perspiciatis sed?
              </p>
              <h2 className="mt-12 text-3xl font-bold ">
                Lorem, ipsum dolor sit amet
              </h2>
              <p className="mt-6 text-base font-normal leading-7 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                sequi amet exercitationem sed dolores eum id tenetur earum,
                labore illo velit quisquam ex suscipit quos repudiandae
                aspernatur reprehenderit aut quis?
              </p>
              <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7  list-disc">
                <li>Lorem ipsum dolor sit,</li>
                <li>Eos sequi amet exercitationem sed dolores.</li>
                <li>labore illo velit quisquam ex suscipit.</li>
              </ul>
              <h2 className="mt-12 text-3xl font-bold ">Get Started</h2>
              <p className="mt-6 text-base font-normal leading-7 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae adipisci debitis deserunt quaerat at voluptate
                labore facilis officia eveniet voluptatum quas, asperiores iure
                nisi similique. Labore dolorum vitae quam incidunt.
              </p>
              <blockquote className="pl-5 mt-8 border-l-2 border-gray-900">
                <p className="text-lg italic font-medium ">
                  “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam tempore eos, assumenda totam consequatur voluptas,
                  fugit ea possimus dolorum sequi mollitia iusto aspernatur non
                  sed nobis fugiat dolor praesentium minima.”
                </p>
              </blockquote>
              <div className="relative mt-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mt-8"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="placeholder"
                    width={1000}
                    height={400}
                    className="rounded-lg"
                  />
                </motion.div>
              </div>
              <h2 className="mt-16 text-3xl font-bold ">Lorem ipsum</h2>
              <p className="mt-6 text-base font-normal leading-7 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                eligendi, totam nobis iure, corporis error rerum nam ullam rem
                asperiores magni nisi fugiat nesciunt sequi atque odit voluptate
                velit sed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
