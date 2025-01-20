import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Stat {
  value: string;
  title: string;
  description: string;
}

interface StatsGridProps {
  stats: Stat[];
}

const StatisticCard: React.FC<Stat> = ({ value, title, description }) => (
  <div className="space-y-2">
    <div className="text-4xl font-bold">{value}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <StatisticCard key={index} {...stat} />
    ))}
  </div>
);

const StatsTwo = () => {
  const statsData: Stat[] = [
    { value: "200%",title: "More Speed",description: "Ut porttitor leo a diam sollicitudin." },
    { value: "21.2K", title: "Total Ratings", description: "Maecenas pharetra convallis posuere morbi." },
    { value: "10X", title: "Efficiency Level", description: "Lacinia at quis risus sed vulputate." },
    { value: "1M", title: "Total Users", description: "Fames ac turpis egestas sed tempus." },
  ];

  return (
    <div className="w-full space-y-8 py-4 px-2">
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
              Get Started
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
        <StatsGrid stats={statsData} />
      </Card>
    </div>
  );
};

export default StatsTwo;
