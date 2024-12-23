import * as React from "react"
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
      <div className={"max-w-full bg-background"}>
        <Component />
      </div>
    </>
  )
}
