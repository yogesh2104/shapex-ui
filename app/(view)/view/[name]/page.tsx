import * as React from "react"
import "@/styles/mdx.css"
import { getRegistryComponent, getRegistryItem } from "@/lib/registry"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { siteInfo } from "@/config/site-info"
import { getAllBlockIds } from "@/lib/blocks"

const getCachedRegistryItem = React.cache(
  async (name: string ) => {
    return await getRegistryItem(name)
  }
)

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: {
    name: string
  }
}): Promise<Metadata> {
  const { name } = await params
  const item = await getCachedRegistryItem(name)

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    title: `${item.name}${item.description ? ` - ${item.description}` : ""}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://shapexui.site/blocks/${item.name}`,
      images: [
        {
          url: siteInfo.ogImage,
          width: 1200,
          height: 630,
          alt: siteInfo.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteInfo.ogImage],
      creator: "@im_yogesh88",
    },
  }
}

export async function generateStaticParams() {
  const blockIds = await getAllBlockIds()
  return blockIds.map((name) => ({ name })).flat()
}

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
