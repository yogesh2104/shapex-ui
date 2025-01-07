import { AppSidebar } from "@/registry/default/blocks/analytics/components/app-sidebar"
import { SidebarInset,SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar"
import { AnalyticsChart } from "./analytics-chart"
import { Button } from "@/registry/default/ui/button"
import { PlusCircle, Search, Settings } from "lucide-react"
import { InfoCard } from "./info-card"
import { CustomerTable } from "./customer-table"

export default function Analytics() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-2 pt-2">
          <div className="flex flex-col">
            <SidebarTrigger className="ml-3 block md:hidden" />
            <header>
              <div className="container flex flex-col lg:flex-row h-16 lg:items-center lg:justify-between gap-2 px-4 mb-6 md:mb-4">
                <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="gap-2 rounded-2xl w-full">
                    <Settings className="h-4 w-4" />
                    Customize
                  </Button>
                  <Button className="gap-2 rounded-2xl w-full">
                    <PlusCircle className="h-4 w-4" />
                    Add New
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1 py-2">
              <div className="container px-4">

                <div className="grid gap-5 grid-cols-1 lg:grid-cols-[1fr,300px] ">
                  <AnalyticsChart />
                  <div className="space-y-4 border rounded-2xl">
                    <InfoCard
                      title="Total Visitors"
                      value={4818}
                      change={44.2}
                      icon="visitors"
                    />
                    <InfoCard
                      title="Engagement Rate"
                      value={118818}
                      change={-2.8}
                      icon="engagement"
                    />
                    <InfoCard
                      title="Conversion Rate"
                      value={12158187}
                      change={8}
                      icon="conversion"
                    />
                  </div>
                </div>

                <CustomerTable />

              </div>
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
