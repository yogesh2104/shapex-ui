// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";

// interface StatItemProps {
//   value: string;
//   label: string;
//   delay?: number;
// }

// interface StatsData {
//   value: string;
//   label: string;
// }

// const statsData: StatsData[] = [
//   { value: "20,000", label: "Projects Completed" },
//   { value: "20+", label: "Years of Experience" },
//   { value: "50%", label: "Increase in Efficiency" },
//   { value: "100+", label: "Happy Clients" },
//   { value: "100%", label: "Client Satisfaction" },
//   { value: "Forever", label: "Commitment to Excellence" },
// ];

// const StatItem = ({ value, label, delay = 0 }: StatItemProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay }}
//     >
//       <Card className="bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-lg rounded-lg transform transition-transform hover:scale-105 duration-300">
//         <CardContent className="p-8">
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: delay + 0.2 }}
//             className="flex flex-col items-center justify-center text-center"
//           >
//             <div className="flex items-center mb-3">
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: delay + 0.3 }}
//                 className="text-4xl font-extrabold text-indigo-600"
//               >
//                 {value}
//               </motion.span>
//             </div>
//             <p className="text-gray-500 text-sm font-medium">{label}</p>
//           </motion.div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// const StatsTwo = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-6 py-16">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-5xl font-extrabold text-center mb-16 text-gray-800 leading-tight"
//       >
//         Delivering Exceptional Results
//       </motion.h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {statsData.map((stat, index) => (
//           <StatItem
//             key={index}
//             value={stat.value}
//             label={stat.label}
//             delay={index * 0.1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsTwo

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Eye, Gauge, Play, Users } from "lucide-react";

const StatsTwo = () => {
  return (
    <div className="w-full space-y-8 py-12 px-2">
      <Card className="mx-auto max-w-6xl p-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              We only deliver results.
            </h2>
            <p className="text-muted-foreground">
              We don&apos;t use excuses or something. Okay maybe sometimes.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:justify-end">
            <Button variant="outline" className="rounded-2xl px-10">
              <Play className="size-3" />
              Demo
            </Button>
            <Button className="rounded-2xl">
              Get Started<span className="ml-2">→</span>{" "}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold">200%</div>
            <h3 className="font-semibold text-lg">More Speed</h3>
            <p className="text-sm text-muted-foreground">
              Ut porttitor leo a diam sollicitudin.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">21.2K</div>
            <h3 className="font-semibold text-lg">Total Ratings</h3>
            <p className="text-sm text-muted-foreground">
              Maecenas pharetra convallis posuere morbi.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">10X</div>
            <h3 className="font-semibold text-lg">Efficiency Level</h3>
            <p className="text-sm text-muted-foreground">
              Lacinia at quis risus sed vulputate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">1M</div>
            <h3 className="font-semibold text-lg">Total Users</h3>
            <p className="text-sm text-muted-foreground">
              Fames ac turpis egestas sed tempus.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatsTwo;
