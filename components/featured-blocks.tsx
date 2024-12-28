import * as React from "react"
import { getRegistryItem } from "@/lib/registry"
import { FeaturedBlockViewer } from "./featured-blocks-view"

export async function FeaturedBlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name)

  if (!item?.files) {
    return null
  }

  return (
    <FeaturedBlockViewer item={item} />
  )
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name)
})
