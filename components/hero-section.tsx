import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function HeroSection() {

  return (
    <section id="hero">
      <div className="relative mb-4 h-full overflow-hidden py-5 md:py-10">
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
