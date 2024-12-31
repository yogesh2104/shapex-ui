import { registryCategories } from "@/registry/registry-categories";
import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  let domain = headersList.get("host") as string;
  let protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...registryCategories.map((category) => ({
        url: `${protocol}://${domain}/blocks/${category.slug}`,
        lastModified: new Date(),
      })),
  ];
}
