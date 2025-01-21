import { Eye, Activity, Zap } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  change: number
  icon: "visitors" | "engagement" | "conversion"
}

export function InfoCard({ title, value, change, icon }: MetricCardProps) {
  const icons = {
    visitors: <Eye className="h-4 w-4 text-primary" />,
    engagement: <Activity className="h-4 w-4 text-primary" />,
    conversion: <Zap className="h-4 w-4 text-primary" />
  }

  return (
      <div className="flex items-center justify-between p-4">
        <div className="space-y-1">
          <p className="text-lg text-muted-foreground">{title}</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">{value.toLocaleString()}</p>
            <span className={`text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
              {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
            </span>
          </div>
        </div>
        <div className="rounded-full bg-primary/10 p-2">
          {icons[icon]}
        </div>
      </div>
  )
}

