"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Clipboard, Fullscreen, Monitor, Smartphone, Tablet } from 'lucide-react'
import { ImperativePanelHandle } from "react-resizable-panels"
import { z } from "zod"
import { FileTree, createFileTreeForRegistryItemFiles } from "@/lib/registry"
import { Button } from "@/registry/default/ui/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable"
import { Separator } from "@/registry/default/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group"
import { Style } from "@/registry/registry-styles"
import { registryItemFileSchema, registryItemSchema } from "@/registry/schema"
import { cn } from "@/registry/default/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { trackEvent } from "@/lib/events"

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>
  view: "code" | "preview"
  setView: (view: "code" | "preview") => void
  style?: Style["name"]
  setStyle: (style: Style["name"]) => void
  activeFile: string | null
  setActiveFile: (file: string) => void
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
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
  tree,
  highlightedFiles,
  children,
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview")
  const [style, setStyle] =
    React.useState<BlockViewerContext["style"]>("default")
  const [activeFile, setActiveFile] = React.useState<
    BlockViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null)
  const resizablePanelRef = React.useRef<ImperativePanelHandle | null>(null);

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
        style,
        setStyle,
        resizablePanelRef,
        activeFile,
        setActiveFile,
        tree,
        highlightedFiles,
      }}
    >
      <div
        id={item.name}
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-2 mb-4 mt-2"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "800px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  )
}

function BlockViewerToolbar() {
  const { setView, item, resizablePanelRef, style } = useBlockViewer()

  return (
    <div className="flex w-full items-center gap-2 md:pr-[14px]">
      <Tabs
        defaultValue="preview"
        onValueChange={(value) => setView(value as "preview" | "code")}
        className=""
      >
        <TabsList className="h-7 items-center rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)]">
          <TabsTrigger
            value="preview"
            className="h-[1.45rem] rounded-sm px-2 text-xs"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="h-[1.45rem] hidden md:block rounded-sm px-2 text-xs"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <a
        href={`#${item.name}`}
        className="text-sm hidden md:block font-medium underline-offset-2 hover:underline"
      >
        {item.description}
      </a>
      <div className="ml-auto items-center gap-2 flex">
        <div className="hidden h-7 items-center gap-1.5 rounded-md border p-[2px] shadow-none lg:flex">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              if (resizablePanelRef?.current) {
                resizablePanelRef?.current.resize(parseInt(value))
              }
            }}
          >
            <ToggleGroupItem
              value="100"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Desktop"
            >
              <Monitor className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Tablet"
            >
              <Tablet className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="40"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Mobile"
            >
              <Smartphone className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <Separator orientation="vertical" className="h-4" />
            <Button
              size="icon"
              variant="ghost"
              className="h-[22px] w-[22px] rounded-sm p-0"
              asChild
              title="Open in New Tab"
            >
              <Link href={`/view/${item.name}`} target="_blank">
                <span className="sr-only">Open in New Tab</span>
                <Fullscreen className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </ToggleGroup>
        </div>
      <div className="md:hidden">
        <Button
          size="icon"
          variant="ghost"
          className="h-[22px] w-[22px] rounded-sm p-0 mt-1"
          asChild
          title="Open in New Tab"
        >
          <Link href={`/view/${item.name}`} target="_blank">
            <span className="sr-only">Open in New Tab</span>
            <Fullscreen className="size-5" />
          </Link>
        </Button>
      </div>
      </div>

    </div>
  )
}

function BlockViewerView() {
  const { item, resizablePanelRef } = useBlockViewer()

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height]">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={resizablePanelRef}
            className="relative rounded-xl border bg-background md:aspect-auto"
            defaultSize={100}
            minSize={40}
          >
            <iframe
              src={`/view/${item.name}`}
              height={item.meta?.iframeHeight ?? 800}
              className="relative z-20 w-full bg-background overflow-auto"
            />
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

function BlockViewerCode() {
  const { activeFile, highlightedFiles, tree } = useBlockViewer()

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile)
  }, [highlightedFiles, activeFile])

  if (!file) {
    return null
  }

  return (
    <div className="mr-[14px] flex overflow-hidden rounded-xl bg-zinc-950 text-white group-data-[view=preview]/block-view-wrapper:hidden md:h-[--height]">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-12 items-center gap-2 border-zinc-700 bg-zinc-900 px-4 text-sm font-medium">
          <div className="flex gap-2">
            {tree?.map((file, index) => (
              <Tree key={index} item={file} index={1} />
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <BlockCopyCodeButton />
          </div>
        </div>
        <div
          key={file?.path}
          data-rehype-pretty-code-fragment
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          className="relative flex-1 overflow-hidden after:absolute after:inset-y-0 after:left-0 after:w-10 after:bg-zinc-950 [&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:translate-y-[-1px] [&_.line:before]:pr-1 [&_pre]:h-[--height] [&_pre]:overflow-auto [&_pre]:!bg-transparent [&_pre]:pb-20 [&_pre]:pt-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"

          // className="overflow-hidden border border-t-0 rounded-b-xl w-auto  after:absolute after:inset-y-0 after:left-3 after:bg-zinc-950 [&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:translate-y-[-1px] [&_.line:before]:pr-2 [&_pre]:h-[--height] [&_pre]:overflow-auto [&_pre]:!bg-transparent [&_pre]:pb-28"
        />
      </div>
    </div>
  )
}


function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer()
  const renderItem = (item: FileTree, index: number) => (
    <div onClick={() => item.path && setActiveFile(item.path)} className={cn(`flex items-center gap-2 cursor-pointer`,item.path === activeFile && "bg-card text-black dark:text-white px-3 py-1 rounded-xl")}>
      {item?.name?.split("\\")?.pop()}
    </div>
  )

  if (!item.children) {
    return renderItem(item, index)
  }

  return (
    <>
      {item.children.map((subItem, subIndex) => (
        <Tree key={subItem.name} item={subItem} index={index + 1} />
      ))}
    </>
  )
}


function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const file = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile)
  }, [activeFile, item.files])

  const content = file?.content

  if (!content) {
    return null
  }

  return (
    <Button
      onClick={() => {
        copyToClipboard(content)
        trackEvent({
          name: "copy_block_code",
          properties: {
            name: item.name,
            file: file.path,
          },
        })
      }}
      className="h-7 w-7 shrink-0 rounded-lg p-0 hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white [&>svg]:size-3"
      variant="ghost"
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  )
}


function BlockViewer({
  item,
  tree,
  highlightedFiles,
  ...props
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles">) {
  return (
    <BlockViewerProvider
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      {...props}
    >
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode />
    </BlockViewerProvider>
  )
}

export { BlockViewer }
