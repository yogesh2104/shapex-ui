"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface StatsData {
  value: string;
  label: string;
}

const statsData: StatsData[] = [
  { value: "20,000", label: "Projects Completed" },
  { value: "20+", label: "Years of Experience" },
  { value: "50%", label: "Increase in Efficiency" },
  { value: "100+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

const StatsOne = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Delivering Exceptional Results
          </h2>
        </motion.div>

        <Card className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 border-0">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 border-8 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 border-8 border-white/20 rounded-full translate-x-1/2 translate-y-1/2" />

          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {statsData.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex flex-col space-y-2 p-4 rounded-lg transition-colors">
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-4xl font-bold text-white tracking-tight"
                    >
                      {achievement.value}
                    </motion.span>
                    <p className="text-blue-100 group-hover:text-white transition-colors">
                      {achievement.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatsOne;
