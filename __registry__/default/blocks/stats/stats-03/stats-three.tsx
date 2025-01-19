import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";
import { Database, Eye, Gauge, Play, Users } from "lucide-react";

const StatsThree = () => {
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
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <Database className="h-5 w-5 text-muted-foreground" />
              <div className="text-3xl font-bold">420%</div>
              <p className="text-sm text-muted-foreground">Data Efficiency</p>
            </div>
            <div className="space-y-2">
              <Eye className="h-5 w-5 text-muted-foreground" />
              <div className="text-3xl font-bold">708+</div>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </div>
            <div className="space-y-2">
              <Gauge className="h-5 w-5 text-muted-foreground" />
              <div className="text-3xl font-bold">1.82M</div>
              <p className="text-sm text-muted-foreground">AI LLM Scale</p>
            </div>
            <div className="space-y-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <div className="text-3xl font-bold">3.23K</div>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
          </div>
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
