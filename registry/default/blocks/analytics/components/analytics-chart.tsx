'use client'

import { Download } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/registry/default/ui/button"

const chartData = [
    { date: "2025-01-01", desktop: 222,  },
    { date: "2025-01-02", desktop: 97,  },
    { date: "2025-01-03", desktop: 167,  },
    { date: "2025-01-01", desktop: 242,  },
    { date: "2025-01-05", desktop: 373,  },
    { date: "2025-01-06", desktop: 301,  },
    { date: "2025-01-07", desktop: 245,  },
    { date: "2025-01-08", desktop: 409,  },
    { date: "2025-01-09", desktop: 59,  },
    { date: "2025-01-10", desktop: 261,  },
    { date: "2025-01-11", desktop: 327,  },
    { date: "2025-01-12", desktop: 292,  },
    { date: "2025-01-13", desktop: 342,  },
    { date: "2025-01-14", desktop: 137,  },
    { date: "2025-01-15", desktop: 120,  },
    { date: "2025-01-16", desktop: 138,  },
    { date: "2025-01-17", desktop: 446,  },
    { date: "2025-01-18", desktop: 364,  },
    { date: "2025-01-19", desktop: 243,  },
    { date: "2025-01-20", desktop: 89,  },
    { date: "2025-01-21", desktop: 137,  },
    { date: "2025-01-22", desktop: 224,  },
    { date: "2025-01-23", desktop: 138,  },
    { date: "2025-01-24", desktop: 387,  },
    { date: "2025-01-25", desktop: 215,  },
    { date: "2025-01-26", desktop: 75,  },
    { date: "2025-01-27", desktop: 383,  },
    { date: "2025-01-28", desktop: 122,  },
    { date: "2025-01-29", desktop: 315,  },
    { date: "2025-01-30", desktop: 454,  },
    { date: "2025-02-01", desktop: 165,  },
    { date: "2025-02-02", desktop: 293,  },
    { date: "2025-02-03", desktop: 247,  },
    { date: "2025-02-04", desktop: 385,  },
    { date: "2025-02-05", desktop: 481,  },
    { date: "2025-02-06", desktop: 498,  },
    { date: "2025-02-07", desktop: 388,  },
    { date: "2025-02-08", desktop: 149,  },
    { date: "2025-02-09", desktop: 227,  },
    { date: "2025-02-10", desktop: 293,  },
    { date: "2025-02-11", desktop: 335,  },
    { date: "2025-02-12", desktop: 197,  },
    { date: "2025-02-13", desktop: 197,  },
    { date: "2025-02-14", desktop: 448,  },
    { date: "2025-02-15", desktop: 473,  },
    { date: "2025-02-16", desktop: 338,  },
    { date: "2025-02-17", desktop: 499,  },
    { date: "2025-02-18", desktop: 315,  },
    { date: "2025-02-19", desktop: 235,  },
    { date: "2025-02-20", desktop: 177,  },
    { date: "2025-02-21", desktop: 82,  },
    { date: "2025-02-22", desktop: 81,  },
    { date: "2025-02-23", desktop: 252,  },
    { date: "2025-02-24", desktop: 294,  },
    { date: "2025-02-25", desktop: 201,  },
    { date: "2025-02-26", desktop: 213,  },
    { date: "2025-02-27", desktop: 420,  },
    { date: "2025-02-28", desktop: 233,  },
    { date: "2025-02-29", desktop: 78,  },
    { date: "2025-02-30", desktop: 340,  },
    { date: "2025-02-31", desktop: 178,  },
    { date: "2025-03-30", desktop: 446,  },
]

const chartConfig = {
    views: {
        label: "Page Views",
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function AnalyticsChart() {
  return (
    <div className="rounded-2xl border bg-card">
      <div className="h-[280px]">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full px-2"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="#4F46E5"
              strokeWidth={1}
              dot={{
                fill: "#4F46E5",
              }}
              
            />
          </LineChart>
        </ChartContainer>
      </div>
      <div className="mt-4 p-4 flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between">
        
        <Button variant={"outline"} className="flex rounded-lg border">
          Download Report<Download className="size-4" />
        </Button>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-green-500">+8.8%</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            All Time High
          </span>
          <div className="text-2xl font-bold">98.78%
            <span className="ml-2 text-sm text-muted-foreground">Total Sales</span>
          </div>
        </div>
      </div>
    </div>
  )
}

