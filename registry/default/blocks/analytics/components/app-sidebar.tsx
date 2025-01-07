"use client"

import * as React from "react"
import {
  ChartColumn,
  House,
  Settings2,
  UserRound,
} from "lucide-react"

import { NavMain } from "@/registry/default/blocks/analytics/components/nav-main"
import { NavUser } from "@/registry/default/blocks/analytics/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Logo from "@/components/logo"

const data = {
  user: {
    name: "Baburao Ganpat Rao Apte",
    email: "m@example.com",
    avatar: "/character/babu-rao.jpg"
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive:true
    },
    {
      title: "Chart",
      url: "#",
      icon: ChartColumn,
    },
    {
      title: "Users",
      url: "#",
      icon: UserRound,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem onClick={toggleSidebar}>
            <div className="flex cursor-pointer aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Logo/> {/* repalce with your logo */}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
