import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { docsConfig } from "@/config/docs";

export default async function HeroSection() {
  return (
    <section id="hero">
      <div className="relative mb-4 h-full overflow-hidden py-5 md:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent" />
        <div className="z-10 flex flex-col">
          <div className="mt-4 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
                
                <div className="relative mt-4 flex flex-col gap-4 md:items-center lg:flex-row">
                    <h1 className="relative mx-0 max-w-[43.5rem] text-balance pt-5 text-left text-5xl font-extrabold tracking-tight text-black dark:text-white sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl">
                    UI library for Design <span className="text-primary">Engineers</span>
                    </h1>
                    <span className="text-neutral-90 absolute -top-3.5 left-0 z-10 rotate-3 whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white md:top-12 md:-rotate-12">
                    Open-source
                    </span>
                </div>

                <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
                    50+ free and open-source animated components built with{" "}
                    <b>React</b>, <b>Typescript</b>, <b>Tailwind CSS</b>, and{" "}
                    <b>Framer Motion</b>.
                </p>

                <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-4 sm:max-w-lg sm:flex-row md:mx-auto">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                    <Link
                        href="/components"  
                        className={cn(
                        buttonVariants({
                            variant: "default",
                            size: "lg",
                        }),
                        "gap-2 whitespace-pre md:flex",
                        "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter",
                        )}
                    >
                        Browse Components
                        <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/docs"
                        className={cn(
                        buttonVariants({
                            size: "lg",
                            variant: "ghost",
                        }),
                        "gap-2 whitespace-pre md:flex",
                        "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter",
                        )}
                    >
                        Get Started
                        <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </Link>
                    </div>
                </div>
                <div className="flex items-center flex-wrap gap-3 justify-center max-w-6xl mt-10">
                  {docsConfig.sidebarNav.map((items) => (
                    items?.items.slice(1,14).map((item)=>(
                      <Link
                        key={item.title}
                        href={item.href || "/"}
                        className={`rounded-full px-6 py-2 relative text-white bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800`}
                      >
                        {item.title}
                        <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs px-2 py-0.5">
                          {item.count}
                        </Badge>
                          
                      </Link>
                    ))
                  ))}
                  <Link
                    href={"/blocks"}
                    className={`rounded-full px-6 py-2 underline relative text-white bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800`}
                  >
                  More                          
                  </Link> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
