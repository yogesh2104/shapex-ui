import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { docsConfig, NavItem, NavItemWithChildren } from "@/config/docs";
import { cn } from "@/lib/utils";

interface BlockPaginationProps {
  doc: any;
}

export function BlockPagination({ doc }: BlockPaginationProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex items-center justify-between mb-6">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className="mr-2 size-4" />
          {pager.prev.title}
        </Link>
      )}

      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 size-4" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: string) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc === link?.href
  );
  const prev = activeIndex > 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex < flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
