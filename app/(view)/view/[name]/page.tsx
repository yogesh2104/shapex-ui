import * as React from "react"
import { cn } from "@/lib/utils"
import "@/styles/mdx.css"
import { getRegistryComponent } from "@/lib/registry"
import { notFound } from "next/navigation"

export const dynamicParams = false

export default async function BlockPage({
  params,
}: 
{params: Promise<{ name: string }>}
) {

  const {name } = await params
  const Component = getRegistryComponent(name, "default")

  if (!Component) {
    return notFound()
  }
  
  return (
    <>
      <section className={`'flex justify-center items-center '} min-h-screen rounded-md  dark:bg-[#000000] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]`}>
      <div className={cn("themes-wrapper bg-background")}>
        <Component />
      </div>
    </section>
    </>
  )
}
