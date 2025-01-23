"use client";

import { motion } from "framer-motion";
import { Badge } from "@/registry/default/ui/badge";
import { Progress } from "@/registry/default/ui/progress";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

interface roadmapType {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  date: string;
  progress: number;
}

const roadmap: roadmapType[] = [
  {
    title: "Project Kickoff",
    description: "Initial planning and team assembly",
    status: "completed",
    date: "Jan 2025",
    progress: 100,
  },
  {
    title: "Alpha Release",
    description: "Core features development",
    status: "completed",
    date: "Mar 2025",
    progress: 100,
  },
  {
    title: "Beta Testing",
    description: "User feedback and bug fixes",
    status: "in-progress",
    date: "May 2025",
    progress: 60,
  },
  {
    title: "Performance Optimization",
    description: "Enhancing speed and efficiency",
    status: "in-progress",
    date: "Jul 2025",
    progress: 30,
  },
  {
    title: "Public Launch",
    description: "Official release and marketing",
    status: "planned",
    date: "Sep 2025",
    progress: 0,
  },
  {
    title: "Expansion",
    description: "New features and scaling",
    status: "planned",
    date: "Nov 2025",
    progress: 0,
  },
];

const statusConfig = {
  completed: { icon: CheckCircle, color: "text-green-500" },
  "in-progress": { icon: Clock, color: "text-blue-500" },
  planned: { icon: AlertCircle, color: "text-orange-500" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Roadmap = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Product Roadmap</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our journey from concept to launch. This roadmap outlines key
          roadmap.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmap.map((milestone, index) => {
          const StatusIcon = statusConfig[milestone.status].icon;
          return (
            <motion.div
              key={milestone.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="outline"
                      className={`${statusConfig[milestone.status].color} mb-2`}
                    >
                      {milestone.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {milestone.date}
                    </span>
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    <StatusIcon
                      className={`w-5 h-5 ${statusConfig[milestone.status].color}`}
                    />
                    {milestone.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {milestone.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={milestone.progress}
                      className="flex-grow"
                    />
                    <span className="text-sm font-medium">
                      {milestone.progress}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground">
          This roadmap is subject to change as we adapt to user feedback and
          market conditions.
        </p>
      </motion.div>
    </div>
  );
};

export default Roadmap;
