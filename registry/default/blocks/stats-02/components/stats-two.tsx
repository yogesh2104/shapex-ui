import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Eye, Gauge, Play, Users } from "lucide-react";

const StatsTwo = () => {
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
