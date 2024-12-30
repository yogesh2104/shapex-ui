"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteInfo } from "@/config/site-info"
import { ThemeToggle } from "./theme-toggle"
import Logo from "./logo"
import { MobileNav } from "./mobile-sidebar"
import { CommandMenu } from "./command-menu"

export function MainHeader() {
  return (
    <>
    <header className={cn("supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full border-b bg-background/40 backdrop-blur-lg")}>
      <div className="container flex h-16 items-center">
        <MobileNav />

        <div className="flex w-full justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="hidden font-bold capitalize lg:inline-block">
              {siteInfo.name}
            </span>
          </Link>
          <div className="flex items-center">
            <CommandMenu/>
            <Link
              href={"https://github.com/yogesh2104/shapex-ui"}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>

    </>
  )
}
