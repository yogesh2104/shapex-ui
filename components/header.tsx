"use client"

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Github, SearchCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteInfo } from "@/config/site-info"
import { ThemeToggle } from "./theme-toggle"
import Logo from "./logo"
import { docsConfig } from "@/config/docs"
import { MobileNav } from "./mobile-sidebar"
import { usePathname } from "next/navigation"
import { CommandMenu } from "./command-menu"

export function MainHeader() {
  const pathname= usePathname()
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
          
          <nav className="hidden md:flex items-center gap-4 text-sm xl:gap-6">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "transition-colors hover:text-foreground/80",
                      pathname?.startsWith(item.href)
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <CommandMenu/>
            <Link
              href={"/"}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-5" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>

    </>
  )
}
