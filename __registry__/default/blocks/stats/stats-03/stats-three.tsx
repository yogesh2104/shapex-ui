import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import { Database, Eye, Gauge, Play, Users } from "lucide-react";
import { ReactNode } from "react";

interface Stat {
  value: string;
  title: string;
  icon: ReactNode;
}

interface StatsGridProps {
  stats: Stat[];
}

const StatisticCard: React.FC<Stat> = ({ value, title, icon }) => (
  <div className="space-y-2">
    {icon}
    <div className="text-3xl font-bold">{value}</div>
    <p className="text-sm text-muted-foreground">{title}</p>
  </div>
);

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-2 gap-8 place-items-center">
    {stats.map((stat, index) => (
      <StatisticCard key={index} {...stat} />
    ))}
  </div>
);


const StatsThree = () => {

  const statsData: Stat[] = [
    { value: "200%",title: "More Speed",icon: <Database className="h-5 w-5 text-muted-foreground" />},
    { value: "21.2K", title: "Total Ratings", icon: <Eye className="h-5 w-5 text-muted-foreground" />},
    { value: "10X", title: "Efficiency Level", icon: <Gauge className="h-5 w-5 text-muted-foreground" /> },
    { value: "1M", title: "Total Users", icon: <Users className="h-5 w-5 text-muted-foreground" /> },
  ];

  return (
    <div className="w-full space-y-8 py-6 px-2">
      <Card className="mx-auto max-w-6xl p-8 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Let&apos;s build something great.
            </h2>
            <p className="text-muted-foreground">
              Enim sed faucibus turpis in eu mi bibendum neque egestas. Mi
              bibendum neque egestas congue quisque egestas diam in arcu. Elit
              pellentesque habitant.
            </p>
          </div>
          <StatsGrid stats={statsData}/>
        </div>

        <div className="grid mt-12">
          <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-10">
            <Button variant="outline" className="rounded-2xl px-10">
              <Play className="size-3" />
              Demo
            </Button>
            <Button className="rounded-2xl">
              Get Started<span className="ml-2">→</span>{" "}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatsThree;
