import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { docsConfig } from "@/config/docs";
import { TextEffect } from "./text-effect";
import { Magnetic } from "./magnetic.button";
import { Spotlight } from "./Spotlight";

export default async function HeroSection() {
  const springOptions = { bounce: 0.1 };

  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden md:py-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="z-10 flex flex-col">
          <div className="mt-4 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-3 text-center md:items-center md:px-10">
                
                <div className="relative mt-4 flex flex-col gap-4 md:items-center lg:flex-row">
                  <h1 className="relative mx-0 w-full md:max-w-[60.5rem] text-balance pt-5 text-left text-5xl font-extrabold tracking-tight text-black dark:text-white sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl">
                  <TextEffect
                    per='char'
                    delay={0.5}
                    variants={{
                      container: { hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                      },
                      item: {
                        hidden: { opacity: 0, rotateX: 90, y: 10 },
                        visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.2 } },
                      },
                    }}
                  >
                    A UI Blocks Tailored for
                  </TextEffect>
                  <span className="bg-gradient-to-r from-red-600 via-purple-500 to-blue-700 bg-clip-text text-transparent">Design Engineers</span>
                  </h1>  
                </div>

                <p className="max-w-2xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
                    Boost your web application's performance with reusable components built on <b className="bg-gradient-to-r from-red-600 via-purple-500 to-blue-700 bg-clip-text text-transparent">shadcn/ui</b>, <b className="bg-gradient-to-r from-red-600 via-purple-500 to-blue-700 bg-clip-text text-transparent">Framer Motion</b>, designed for efficiency and scalability.
                </p>

                <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-4 md:max-w-md sm:flex-row md:mx-auto">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                      <Magnetic
                        intensity={0.2}
                        springOptions={springOptions}
                        actionArea='global'
                        range={200}
                      >
                        <Link
                          href="/blocks"  
                          className={cn(
                          buttonVariants({
                              variant: "default",
                              size: "lg",
                          }),
                          "gap-2 whitespace-pre md:flex",
                          "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter",
                          )}>
                          <Magnetic
                            intensity={0.1}
                            springOptions={springOptions}
                            actionArea='global'
                            range={300}
                          >
                            <span>Browse Blocks</span>
                          </Magnetic>
                          
                          <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                        </Link>

                      </Magnetic>
                    <Link
                        href="/why-shapex-ui"
                        className={cn(
                        buttonVariants({
                            size: "lg",
                            variant: "outline",
                        }),
                        "gap-2 whitespace-pre md:flex",
                        "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter",
                        )}
                    >
                        Why Shapex-UI
                        <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </Link>
                    </div>
                </div>
                <div className="flex items-center flex-wrap gap-3 justify-center max-w-5xl mt-10">
                  {docsConfig.sidebarNav.map((items) => (
                    items?.title =="Blocks" && items?.items.slice(1,13).map((item)=>(
                      item.count !=0 &&
                      <Link
                        key={item.title}
                        href={item.href || "/"}
                        className={`rounded-full text-sm px-6 py-2 relative text-black dark:text-white bg-background border`}
                      >
                        {item.title}
                        <Badge className="absolute -top-2 -right-1 bg-yellow-500 text-xs px-1 py-0.8">
                          {item.count}
                        </Badge>
                          
                      </Link>
                    ))
                  ))}
                  <Link
                    href={"/blocks"}
                    className={`rounded-full px-2 md:px-6 py-1 text-sm md:py-2 underline relative text-black dark:text-white bg-background border `}
                  >
                  More                          
                  <Badge className="absolute -top-2 -right-2 text-xs bg-yellow-500 px-1 py-0.8">
                    17
                  </Badge>
                  </Link> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
