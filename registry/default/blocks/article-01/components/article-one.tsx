"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/registry/default/ui/card";
import { Badge } from "@/registry/default/ui/badge";
import { Separator } from "@/registry/default/ui/separator";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

const ArticleOne = () => {
  return (
    <ScrollArea className="h-[calc(100vh)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[50vh] mb-12"
            >
              <Image
                src="/placeholder.svg"
                alt="Hero image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-end p-8">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    Article
                  </Badge>
                  <h1 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h1>
                  <p className="text-sm text-gray-300 mt-4">May 24, 2024</p>
                </div>
              </div>
            </motion.div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  <p className="text-xl leading-relaxed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Neque quos cumque nostrum exercitationem odit veritatis
                    sequi officia maxime, vel unde minima, fuga dolor tempora
                    molestias explicabo adipisci ad. Totam, veniam!
                  </p>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h2 className="text-3xl font-bold mb-4">
                        Lorem, ipsum dolor sit amet
                      </h2>
                      <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eos sequi amet exercitationem sed dolores eum id
                        tenetur earum, labore illo velit quisquam ex suscipit
                        quos repudiandae aspernatur reprehenderit aut quis?
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src="/placeholder.svg"
                        alt="Article image"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </motion.div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-3xl font-bold mb-4">Get Started</h2>
                    <p className="text-lg leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repudiandae adipisci debitis deserunt quaerat at voluptate
                      labore facilis officia eveniet voluptatum quas, asperiores
                      iure nisi similique. Labore dolorum vitae quam incidunt.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <blockquote className="text-2xl font-semibold italic text-primary">
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam tempore eos, assumenda totam consequatur voluptas,
                      fugit ea possimus dolorum sequi mollitia iusto aspernatur
                      non sed nobis fugiat dolor praesentium minima."
                    </blockquote>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-4">Start Today</h2>
                    <p className="text-lg leading-relaxed">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Et eligendi, totam nobis iure, corporis error rerum nam
                      ullam rem asperiores magni nisi fugiat nesciunt sequi
                      atque odit voluptate velit sed.
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </section>
      </motion.div>
    </ScrollArea>
  );
};

export default ArticleOne;
