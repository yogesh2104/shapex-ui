import { BlockDisplay } from "@/components/block-display";
import { BlockPagination } from "@/components/BlockPagination";
import { siteInfo } from "@/config/site-info";
import { getAllBlockIds } from "@/lib/blocks";
import { registryCategories, } from "@/registry/registry-categories";
import { Clock, Sparkles } from "lucide-react";

export const dynamicParams = false;

function capitalizeFirstLetter(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getDocFromParams({ params }: { params: Promise<{ slug: string[] }>}) {
  const { slug } = await params;
  const joinSlug = slug?.join("/") || ""
  const doc = registryCategories.find((doc) => doc.slug === joinSlug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({params,}: { params: Promise<{ slug: string[] }>}) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: `${capitalizeFirstLetter(doc.slug)} - shapex/ui`,
    description: siteInfo.description,
    openGraph: {
      title: doc.slug,
      description: siteInfo.description,
      type: "article",
      url: `https://www.shapexui.site/blocks/${doc.slug}`,
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
      title: doc.slug,
      description: siteInfo.description,
      images: [siteInfo.ogImage],
      creator: "@im_yogesh88",
    },
  }
}

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    slug: [category.slug],
  }))
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const blocks = await getAllBlockIds(["registry:block"], slug ?? [], "default");

  if (!blocks?.length) {
    return <ComingSoon />;
  }

  return (
    <main>
      <BlockGrid blocks={blocks} />
      <BlockPagination doc={`/blocks/${slug}`} />
    </main>
  );
}

function ComingSoon() {
  return (
    <div className="h-[calc(100vh-9rem)] flex items-center justify-center bg-background">
      <div className="w-full max-w-2xl border-border bg-card">
        <div className="p-8 text-center space-y-8">
          <header>
            <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
              Coming Soon
            </h1>
          </header>
          <p className="text-lg text-foreground/80 animate-fadeIn">
            Something amazing is in the works. Stay tuned!
          </p>
          <div className="flex justify-center gap-6 py-4">
            <Clock className="w-8 h-8 text-foreground animate-spin-slow" />
            <Sparkles className="w-8 h-8 text-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockGrid({ blocks }: { blocks: string[] }) {
  return (
    <div className="grid gap-4">
      {blocks.map((blockId) => (
        <div key={blockId} className="border-grid">
          <BlockDisplay name={blockId} />
        </div>
      ))}
    </div>
  );
}
