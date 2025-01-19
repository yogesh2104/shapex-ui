"use client";

import { motion } from "framer-motion";
import { Checkbox } from "@/registry/default/ui/checkbox";

interface RoadmapItem {
  title: string;
  completed: boolean;
}

interface RoadmapPhase {
  phase: string;
  phaseNumber: string;
  items: RoadmapItem[];
}

const roadmapData: RoadmapPhase[] = [
  {
    phase: "Initialization",
    phaseNumber: "PHASE 1",
    items: [
      { title: "Project Kickoff", completed: true },
      { title: "Req Gathering", completed: true },
      { title: "Initial Design Mockups", completed: true },
      { title: "Development Setup", completed: false },
      { title: "Prototype Creation", completed: false },
      { title: "Initial Testing", completed: false },
    ],
  },
  {
    phase: "Development",
    phaseNumber: "PHASE 2",
    items: [
      { title: "Feature Development", completed: true },
      { title: "UI/UX Enhancements", completed: true },
      { title: "API Integration", completed: false },
      { title: "Database Setup", completed: false },
      { title: "Beta Testing", completed: false },
      { title: "Bug Fixing", completed: false },
    ],
  },
  {
    phase: "Launch Preparation",
    phaseNumber: "PHASE 3",
    items: [
      { title: "Final Testing", completed: false },
      { title: "Marketing Campaign", completed: false },
      { title: "Documentation", completed: false },
      { title: "User Training", completed: false },
      { title: "Pre-Launch Feedback", completed: false },
      { title: "Launch Event Planning", completed: false },
    ],
  },
  {
    phase: "Post-Launch",
    phaseNumber: "PHASE 4",
    items: [
      { title: "Live Support", completed: false },
      { title: "User Feedback", completed: false },
      { title: "Cont. Improvement", completed: false },
      { title: "New Feature", completed: false },
      { title: "Perf. Optimization", completed: false },
      { title: "Customer Stories", completed: false },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
};

const RoadmapThree = () => {
  return (
    <div className="max-w-7xl p-2">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Full Roadmap
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          Follow our detailed project roadmap to see how we bring AuraUI to
          life.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {roadmapData.map((phase, phaseIndex) => (
          <motion.div
            key={phase.phase}
            variants={itemVariants}
            className="relative"
          >
            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  {phase.phaseNumber}
                </div>
                <h2 className="text-2xl font-semibold mb-6">{phase.phase}</h2>
              </div>
              <div className="space-y-4">
                {phase.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <Checkbox checked={item.completed} />
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {item.title}
                    </label>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RoadmapThree;
