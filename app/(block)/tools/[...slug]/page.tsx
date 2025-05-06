import { Mdx } from "@/components/mdx";
import { allPages } from "content-collections";
import { notFound } from "next/navigation";

async function getPageFromParams(slug:string) {
    const page = allPages.find((page) => page.slugAsParams === slug);
  
    if (!page) {
      null;
    }
  
    return page;
}



export default async function ToolsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
    
  
  const { slug } = await params;

  const page = await getPageFromParams(slug?.join("/"));

  if (!page) {
    notFound();
  }

  return (
    <article className=" py-6 lg:py-12">
        <div className="space-y-4">
        <h1 className="font-heading inline-block text-4xl lg:text-5xl">
            {page.title}
        </h1>
        {page.description && (
            <p className="text-xl text-muted-foreground">{page.description}</p>
        )}
        </div>
        <hr className="my-4" />
        <Mdx code={page.body.code} />
    </article>
  );
}