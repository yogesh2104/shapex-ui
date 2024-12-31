"use client";

import { motion } from "framer-motion";
import { Badge } from "@/registry/default/ui/badge";
import { Card } from "@/registry/default/ui/card";
import { Progress } from "@/registry/default/ui/progress";
import { ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";

interface RoadmapItem {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  quarter: string;
  progress: number;
  tasks: string[];
}

const roadmapData: RoadmapItem[] = [
  {
    title: "Foundation Phase",
    description: "Setting up the core infrastructure and basic functionalities",
    status: "completed",
    quarter: "Q1 2024",
    progress: 100,
    tasks: [
      "Core architecture setup",
      "Basic UI components",
      "Authentication system",
      "Database schema design",
    ],
  },
  {
    title: "Feature Development",
    description: "Building key features and enhancing user experience",
    status: "in-progress",
    quarter: "Q2 2024",
    progress: 65,
    tasks: [
      "Advanced user management",
      "Analytics dashboard",
      "Integration with third-party APIs",
      "Real-time notifications",
    ],
  },
  {
    title: "Scale & Optimize",
    description: "Optimizing performance and preparing for scale",
    status: "upcoming",
    quarter: "Q3 2024",
    progress: 0,
    tasks: [
      "Performance optimization",
      "Load balancing setup",
      "Caching implementation",
      "Security enhancements",
    ],
  },
  {
    title: "Market Release",
    description: "Final preparations and public release",
    status: "upcoming",
    quarter: "Q4 2024",
    progress: 0,
    tasks: [
      "Beta testing program",
      "Marketing campaign",
      "Documentation",
      "Public launch event",
    ],
  },
];

const getStatusColor = (status: RoadmapItem["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-500/10 text-green-500";
    case "in-progress":
      return "bg-blue-500/10 text-blue-500";
    case "upcoming":
      return "bg-gray-500/10 text-gray-500";
  }
};

const getStatusIcon = (status: RoadmapItem["status"]) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    case "in-progress":
      return <Clock className="w-4 h-4 text-blue-500" />;
    case "upcoming":
      return <Circle className="w-4 h-4 text-gray-500" />;
  }
};

const RoadmapOne = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Product Roadmap</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Follow our journey as we build and improve our product. This roadmap
          outlines our planned features and milestones.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {roadmapData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border -ml-4 hidden md:block">
              <div
                className={`w-3 h-3 rounded-full -ml-[6px] ${
                  item.status === "completed"
                    ? "bg-green-500"
                    : item.status === "in-progress"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                }`}
              />
            </div>

            <Card className="p-6 ml-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <Badge
                      variant="secondary"
                      className={getStatusColor(item.status)}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {getStatusIcon(item.status)}
                  <span>{item.quarter}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Progress value={item.progress} className="h-2" />
                  <span className="text-sm text-muted-foreground w-12">
                    {item.progress}%
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {item.tasks.map((task, taskIndex) => (
                    <motion.div
                      key={task}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: taskIndex * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <span>{task}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapOne;
