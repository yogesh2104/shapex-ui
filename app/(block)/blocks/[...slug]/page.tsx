import { BlockDisplay } from "@/components/block-display"
import { getAllBlockIds } from "@/lib/blocks"

export const dynamicParams = false

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const slug = (await params).slug

  const blocks = await getAllBlockIds(
    ["registry:block"],
    slug ?? [],
    "default"
  )


  return blocks.map((name) => (
    <div key={name} className="border-grid container  md:py-4" >
      <BlockDisplay name={name} />
    </div>
  ))
}