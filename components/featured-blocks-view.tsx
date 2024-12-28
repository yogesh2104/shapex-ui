"use client"

import * as React from "react"
import Link from "next/link"
import { Fullscreen } from 'lucide-react'
import { z } from "zod"
import { Button } from "@/registry/default/ui/button"
import { registryItemSchema } from "@/registry/schema"

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>
}

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null)

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext)
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.")
  }
  return context
}

function BlockViewerProvider({
  item,
  children,
}: Pick<BlockViewerContext, "item"> & {
  children: React.ReactNode
}) {

  return (
    <BlockViewerContext.Provider
      value={{ item }}
    >
      <div
        id={item.name}
        className="flex min-w-0 flex-col items-stretch gap-2 mb-4"
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  )
}

function BlockViewerToolbar() {
  const { item } = useBlockViewer()

  return (
    <div className="flex w-full items-center gap-2 md:pr-[14px]">
      <span>{item.description}</span>
      <div className="ml-auto items-center gap-2 flex">
        <div className="flex rounded-md border p-1">
          <Link href={`/view/${item.name}`} target="_blank" className=" cursor-pointer">
            <span className="text-sm">Preview</span>
          </Link>
        </div>
      </div>

    </div>
  )
}

function BlockViewerView() {
  const { item } = useBlockViewer()

  return (
    <div className="">
      <div className="grid w-full gap-4">
        <iframe
            src={`/view/${item.name}`}
            height={600}
            className="relative z-20 w-full bg-background overflow-auto"
        />
      </div>
    </div>
  )
}


function FeaturedBlockViewer({
  item,
  ...props
}: Pick<BlockViewerContext, "item">) {
  return (
    <BlockViewerProvider
      item={item}
      {...props}
    >
      <BlockViewerToolbar />
      <BlockViewerView />
    </BlockViewerProvider>
  )
}

export { FeaturedBlockViewer }


